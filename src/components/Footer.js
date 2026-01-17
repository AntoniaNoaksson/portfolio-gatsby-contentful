import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/portfolio">Antonia Noaksson</Link>
                    <StaticImage
                        src="../images/footerlogo.png"
                        alt="Footer logo"
                        className="footer-logo-image"
                        width={150}
                    />
                </div>

                <p className="footer-description">
                    Vill du komma i kontakt? Skicka ett mejl eller kolla mina
                    sociala medier!
                </p>

                <ul className="footer-links">
                    <li>
                        <a
                            href="https://github.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/username"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <Link to="/contact">Kontaktformulär</Link>
                    </li>
                </ul>

                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Antonia Noaksson. Alla
                    rättigheter förbehållna.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
