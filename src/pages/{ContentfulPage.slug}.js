import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import PortfolioPage from './portfolio';
import IndexPage from '.';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Page = ({ data }) => {
    const page = data.contentfulPage;

    if (!page) {
        return (
            <Layout>
                <p>Sidan saknas...</p>
            </Layout>
        );
    }

    if (page.slug === 'portfolio') {
        return <PortfolioPage />;
    }

    if (page.slug === '/') {
        return <IndexPage />;
    }

    const image = page.img ? getImage(page.img) : null;

    return (
        <Layout>
            <main className="page-container">
                {image && (
                    <GatsbyImage
                        image={image}
                        alt={page.img?.title || page.title}
                    />
                )}
                <h1 className="page-title">{page.title}</h1>
                {page.body && (
                    <section className="page-body">
                        {renderRichText(page.body)}
                    </section>
                )}
            </main>
        </Layout>
    );
};

export default Page;

export const query = graphql`
    query ($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            title
            slug
            body {
                raw
            }
            img {
                gatsbyImageData(layout: CONSTRAINED, width: 400)
                title
            }
        }
        allContentfulProject(sort: { title: ASC }) {
            nodes {
                slug
                title
                description {
                    raw
                }
                thumbnail {
                    gatsbyImageData(width: 400)
                    title
                }
            }
        }
    }
`;
export const Head = ({ data }) => {
    if (data.contentfulPage.slug === 'portfolio') {
        return <title>Portfolio</title>;
    }
};
