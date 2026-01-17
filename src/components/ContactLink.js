import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ContactLink = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulPage(slug: { eq: "contact" }) {
                slug
            }
        }
    `);

    if (!data?.contentfulPage) return null;

    return (
        <Link
            to={`/${data.contentfulPage.slug}`}
            aria-label="Go to the contact page"
            className="read-more-btn"
        >
            Contact me here
        </Link>
    );
};

export default ContactLink;
