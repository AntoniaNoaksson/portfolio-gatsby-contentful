/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `Antonia Noaksson – Frontend Developer Portfolio`,
        siteUrl: `https://antonianoakssonportfolio.netlify.app`
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`
        },
        {
            resolve: `gatsby-plugin-react-helmet`
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-postcss`
    ]
};
