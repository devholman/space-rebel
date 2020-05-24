import React, { useReducer } from 'react';
import styles from './form.module.css';
const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  body: '',
  status: 'IDLE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updatedFieldValue':
      return { ...state, [action.field]: action.value };
    case 'updateStatus':
      return { ...state, status: action.status };
    case 'reset':

    default:
      return INITIAL_STATE;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setStatus = (status) => {
    console.log(state);
    dispatch({ type: 'updateStatus', status });
  };

  const updatedFieldValue = (field) => (event) => {
    dispatch({ type: 'updatedFieldValue', field, value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('PENDING');

    console.log(state);

    setTimeout(() => setStatus('SUCCESS'), 1000);
  };

  if (state.status === 'SUCCESS') {
    return (
      <p className={styles.success}>
        Message Received
        <button
          type="reset"
          className={styles.button && styles.centered}
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </p>
    );
  }
  return (
    <>
      {state.status === 'ERROR' && (
        <p className={styles.error}>Please Try Again</p>
      )}
      <form
        className={`${styles.form} ${
          state.status === 'PENDING' && styles.pending
        }`}
        onSubmit={handleSubmit}
      >
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            className={styles.input}
            value={state.name}
            onChange={updatedFieldValue('name')}
          ></input>
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            className={styles.input}
            value={state.email}
            onChange={updatedFieldValue('email')}
          ></input>
        </label>
        <label className={styles.label}>
          Subject
          <input
            type="text"
            name="subject"
            className={styles.input}
            value={state.subject}
            onChange={updatedFieldValue('subject')}
          ></input>
        </label>
        <label className={styles.label}>
          Body
          <textarea
            name="body"
            className={styles.input}
            value={state.body}
            onChange={updatedFieldValue('body')}
          ></textarea>
        </label>
        <button className={styles.button}>Send</button>
      </form>
    </>
  );
};
export default Form;
