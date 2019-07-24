module.exports = {

  siteMetadata: {
    title: 'Master Painter',
    author: 'Sunny Ra'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles/index.scss'], 
      }
    }
  ]
}
