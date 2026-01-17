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
        <p>
            <Link
                to={`/${data.contentfulPage.slug}`}
                aria-label="Gå till kontaktsidan"
                className="read-more-btn"
            >
               Contact me here
            </Link>
        </p>
    );
};

export default ContactLink;
