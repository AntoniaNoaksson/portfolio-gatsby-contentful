import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Footer from './Footer';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem(sort: { order: ASC }) {
                nodes {
                    label
                    order
                    page {
                        slug
                    }
                }
            }
        }
    `);

    const navItems = data.allContentfulMenuItem.nodes;

    return (
        <div className="layout">
            <header>
                <Link
                    to="/portfolio"
                    aria-label="Gå till startsidan för Antonia Noakssons portfolio"
                    className="logo"
                >
                    Antonia Noakssons portfolio
                </Link>
                <nav className="navbar" aria-label="Huvudnavigering">
                    <ul>
                        {navItems.map((item) => {
                            const path =
                                !item.page?.slug || item.page.slug === '/'
                                    ? '/'
                                    : `/${item.page.slug}`;

                            return (
                                <li key={item.order}>
                                    <Link to={path}>{item.label}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>

            <main className="main-content">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;

export const Head = () => (
    <>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Antonia Noaksson – Portfolio</title>
        <meta
            name="description"
            content="Welcome to my portfolio — a collection of my projects and experience."
        />
    </>
);
