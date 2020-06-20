module.exports = {
  siteMetadata: {
    title: `Space Rebel`,
    description: `A space rebel dev shop`,
    author: `A rebel`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Racing Sans One', 'Earth Orbiter', 'Poppins'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
