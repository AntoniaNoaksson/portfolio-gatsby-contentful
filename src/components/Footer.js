import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-container">
                <div className="footer-logo">
                    <Link to="/portfolio">Antonia Noaksson</Link>
                    <StaticImage
                        src="../images/footerlogo.png"
                        alt="Footer logo"
                        width={150}
                    />
                </div>

                <section className="footer-description">
                    I’m a junior frontend developer who enjoys building modern,
                    accessible, and user-friendly web solutions.
                </section>

                <ul className="footer-links">
                    <li>
                        <a
                            href="https://github.com/AntoniaNoaksson"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to my GitHub-profile"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/antonia-noaksson-20ba132b1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to my LinkedIn-profile"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <Link to="/contact">Contact me</Link>
                    </li>
                </ul>

                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Antonia Noaksson. Alla
                    rättigheter förbehållna.
                </div>
            </section>
        </footer>
    );
};

export default Footer;
