module.exports = {
  siteMetadata: {
    title: `JemberDev`,
    description: `JemberDev merupakan sebuah komunitas yang menjadi wadah bagi semua penggiat IT untuk menuangkan ide-ide kreatif guna menghasilkan teknologi yang dapat bermanfaat bagi masyarakat Indonesia khususnya daerah Jember ( :`,
    author: `https://github.com/jember-dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/jember.dev-icon.jpg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
