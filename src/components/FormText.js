import React from 'react';
import { navigate } from 'gatsby-link';
import { Link } from 'gatsby';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
  status: 'IDLE',
};

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const reducer = (redState, action) => {
    switch (action.type) {
      case 'updatedFieldValue':
        return { ...redState, [action.field]: action.value };
      case 'updateStatus':
        return { ...redState, status: action.status };
      case 'reset':
      default:
        return INITIAL_STATE;
    }
  };

export default function Contact() {
  const [state, setState] = React.useState({});
  const [redState, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

const setStatus = (status) => {
    dispatch({ type: 'updateStatus', status })
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
    //   .then(() => navigate(form.getAttribute('action')))
      .then(response => {
          setStatus('SUCCESS')
      })
      .catch((error) => alert(error));
  };
  if (redState.status === 'SUCCESS') {
    return (
        <div className="flex flex-col">
            <p className="text-white font-bold text-secondary mt-32 mb-0 mx-auto">
                Message Received
            </p>
            <br></br>
            <p className=" mt-2 m-auto">
                <Link
                to={`/`}
                className='text-sr-blue-1 hover:underline'
            >
                Retrun to homepage
            </Link>
            </p>
            
      </div>
    );
  }
  return (
    <div className="flex flex-col p-8 my-20">
      <h1 className="text-white text-lg mb-8">
        Tell us about your mission and we'll reach out to you within 24 hours.
      </h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="text-white max-w-sm m-4"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className="flex items-center border-b border-b-2 border-sr-blue-1 py-2 mb-4">
          <label className="font-medium">
            Your full name:
            <br />
            <input
              className="appearance-none text-white bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="name"
              required={true}
              autoComplete="off"
              onChange={handleChange}
              value={state.name || ''}
            />
          </label>
        </p>

        <p className="flex items-center border-b border-b-2 border-sr-blue-1 py-2 mb-4">
          <label className="font-medium">
            Your email:
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={state.email || ''}
              autoComplete="off"
              required={true}
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight font-light focus:outline-none"
            />
          </label>
        </p>
        <p className="flex items-center border-b border-b-2 border-sr-blue-1 py-2">
          <label className="font-medium">
            Message:
            <br />
            <textarea
              name="message"
              onChange={handleChange}
              value={state.message || ''}
              autoComplete="off"
              required={true}
              cols="50"
              rows="4"
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 resize-none leading-tight focus:outline-none"
            />
          </label>
        </p>
        <p className="my-6">
          <button
            className="flex-shrink-0 bg-sr-blue-1 hover:bg-sr-blue-1 border-sr-blue-1 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
}
