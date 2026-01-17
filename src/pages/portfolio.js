import * as React from 'react';
import Layout from '../components/Layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const PortfolioPage = () => {
    const [selectedTech, setSelectedTech] = React.useState('Alla');

    const data = useStaticQuery(graphql`
        query {
            allContentfulProject(sort: { title: ASC }) {
                nodes {
                    slug
                    title
                    techStack
                    description {
                        raw
                    }
                    thumbnail {
                        gatsbyImageData(width: 600, placeholder: BLURRED)
                        description
                    }
                }
            }
        }
    `);

    const items = data.allContentfulProject.nodes;

    const techOptions = [
        'Alla',
        ...new Set(items.flatMap((item) => item.techStack || []))
    ];

    const filteredItems =
        selectedTech === 'Alla'
            ? items
            : items.filter((item) => item.techStack?.includes(selectedTech));

    const getExcerpt = (desc, length = 120) => {
        if (!desc) return '';
        const text = documentToPlainTextString(JSON.parse(desc.raw));
        return text.length > length ? text.slice(0, length) + '...' : text;
    };

    return (
        <Layout>
            <h1 className="page-title">Min Portfolio</h1>
            <section className="portfolio-container-wrapper">
                <section className="portfolio-container">
                    {filteredItems.map((item) => {
                        const image = item.thumbnail
                            ? getImage(item.thumbnail)
                            : null;

                        return (
                            <section className="portfolio-item" key={item.slug}>
                                {image && (
                                    <GatsbyImage
                                        image={image}
                                        alt={
                                            item.thumbnail?.description ||
                                            item.title
                                        }
                                        className="page-image"
                                    />
                                )}

                                <Link to={`/portfolio/${item.slug}`}>
                                    <h2 className="page-subtitle">
                                        {item.title}
                                    </h2>
                                </Link>

                                {item.techStack && (
                                    <p className="page-body">
                                        <strong>Tech stack:</strong>{' '}
                                        {item.techStack.join(', ')}
                                    </p>
                                )}

                                {item.description && (
                                    <p className="page-body">
                                        {getExcerpt(item.description, 120)}
                                    </p>
                                )}

                                <Link
                                    to={`/portfolio/${item.slug}`}
                                    className="read-more-btn"
                                >
                                    View project
                                </Link>
                            </section>
                        );
                    })}
                </section>
                <div className="portfolio-filter">
                    {techOptions.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(tech)}
                            className={selectedTech === tech ? 'active' : ''}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <title>Portfolio</title>;

export default PortfolioPage;
