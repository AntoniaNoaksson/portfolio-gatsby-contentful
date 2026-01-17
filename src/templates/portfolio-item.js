import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';
import '../styles/portfolio-item.css';

const PortfolioItem = ({ data }) => {
    const project = data.contentfulProject;
    const thumbnailImage = project.thumbnail
        ? getImage(project.thumbnail.gatsbyImageData)
        : null;

    return (
        <Layout>
            <section className="portfolio-item-page">
                <h1>{project.title}</h1>

                {thumbnailImage && (
                    <GatsbyImage
                        image={thumbnailImage}
                        alt={project.thumbnail.description || project.title}
                        style={{ width: '100%', borderRadius: '12px' }}
                        imgStyle={{ objectFit: 'contain' }}
                    />
                )}

                {project.techStack && (
                    <div className="techstack">
                        <strong>Tech stack:</strong>{' '}
                        {project.techStack.join(', ')}
                    </div>
                )}

                {project.description && (
                    <div className="project-description">
                        {renderRichText(project.description)}
                    </div>
                )}
                <Link to="/portfolio/" className="read-more-btn">
                    ← Go back
                </Link>
            </section>
        </Layout>
    );
};

export default PortfolioItem;

export const query = graphql`
    query ($slug: String!) {
        contentfulProject(slug: { eq: $slug }) {
            title
            slug
            description {
                raw
            }
            thumbnail {
                description
                gatsbyImageData(
                    width: 900
                    placeholder: BLURRED
                    layout: CONSTRAINED
                )
            }
            techStack
        }
    }
`;
