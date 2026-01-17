console.log('Gatsby-node körs!');

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allContentfulProject {
                nodes {
                    slug
                }
            }
        }
    `);

    if (result.errors) {
        console.error(result.errors);
        throw result.errors;
    }

    const items = result.data.allContentfulProject.nodes;

    items.forEach((item) => {
        createPage({
            path: `/portfolio/${item.slug}`,
            component: path.resolve('./src/templates/portfolio-item.js'),
            context: { slug: item.slug }
        });
    });
};
