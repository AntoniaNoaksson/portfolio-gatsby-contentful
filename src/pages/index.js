import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import ContactLink from '../components/ContactLink';
import '../styles/index.css';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulPage(slug: { eq: "/" }) {
                title
                body {
                    raw
                }
                img {
                    gatsbyImageData(layout: CONSTRAINED, width: 600)
                    title
                }
            }
        }
    `);

    const page = data?.contentfulPage;

    if (!page) {
        return (
            <Layout>
                <p>Startsida laddas eller saknas...</p>
            </Layout>
        );
    }

    const { title, body, img } = page;
    const image = getImage(img);

    return (
        <Layout>
            <section className="page-container">
                {img && (
                    <GatsbyImage
                        image={image}
                        alt={img?.title || title}
                        className="page-image"
                    />
                )}

                <h1 className="page-title">{title}</h1>

                {body?.raw && (
                    <section className="page-body">
                        {documentToReactComponents(JSON.parse(body.raw))}
                    </section>
                )}

                <aside>
                    <ContactLink />
                </aside>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Startsida</title>;
