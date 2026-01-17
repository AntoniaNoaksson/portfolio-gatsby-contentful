/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `My Portfolio`,
        siteUrl: `https://example.com`
    },
    plugins: [
        // Hämtar innehåll från Contentful (Headless CMS)
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },

    
        // Genererar sitemap.xml för SEO
        {
            resolve: `gatsby-plugin-sitemap`
        },

        // React Helmet för bättra SEO
        {
            resolve: `gatsby-plugin-react-helmet`
        },

        // Bildhantering och optimering
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,

        // CSS-styling via PostCSS
        `gatsby-plugin-postcss`
    ]
};
