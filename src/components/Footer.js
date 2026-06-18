import * as React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-container">
                <div className="footer-logo">
                    <Link to="/">Antonia Noaksson</Link>

                    <p className="footer-description">
                        Fullstack Developer focused on building modern,
                        accessible and user-friendly web applications.
                    </p>
                </div>

                <ul className="footer-links">
                    <li>
                        <a
                            href="https://github.com/AntoniaNoaksson"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/antonia-noaksson-20ba132b1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="footer-copyright">
                    © {new Date().getFullYear()} Antonia Noaksson
                </div>
            </section>
        </footer>
    );
};

export default Footer;
