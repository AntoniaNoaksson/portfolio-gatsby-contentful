import * as React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import '../styles/index.css';

const NotFound = ({ data }) => {
    const { title, body, img } = data.contentfulPage || {};
    const image = img ? getImage(img) : null;

    return (
        <Layout>
            <section className="page-container">

                {image && (
                    <GatsbyImage
                        image={image}
                        alt={title}
                        className="page-image"
                    />
                )}


                <h1 className="page-title">{title || 'Sidan hittades inte'}</h1>


                {body && (
                    <div className="page-body">
                        {documentToReactComponents(
                            body.raw ? JSON.parse(body.raw) : body
                        )}
                    </div>
                )}

                <div className="home-link">
                    <Link to="/">Back to home</Link>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "404" }) {
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
`;

export default NotFound;
export const Head = () => <title>Sorry, page not found</title>;
