import { faAccusoft, faFacebookF, faIdeal, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCapsules } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="foot">
                    <div>
                        <h4>Quick Links</h4>
                        <h6>You Can Also Take Some Courses</h6>
                        <div>

                            <Link to="/courses" className="link"><FontAwesomeIcon icon={faCapsules} />Courses</Link> <br />

                            <Link to="/teachers" className="link"><FontAwesomeIcon icon={faBook} />Teachers</Link> <br />
                            <Link to="/classes" className="link"><FontAwesomeIcon icon={faIdeal} />Articles</Link> <br />
                            <Link to="/classes" className="link"><FontAwesomeIcon icon={faAccusoft} />Live Classes</Link>
                        </div>
                    </div>
                    <div>
                        <h4>Stay Connected</h4>
                        <span className="media"><FontAwesomeIcon icon={faFacebookF} /></span>
                        <span className="media"><FontAwesomeIcon icon={faInstagram} /></span>
                        <span className="media"><FontAwesomeIcon icon={faTwitter} /></span>
                        <span className="media"><FontAwesomeIcon icon={faWhatsapp} /></span>
                        <span className="media"><FontAwesomeIcon icon={faYoutube} /></span>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>Dhaka 1207 || Kajipara</p>
                        <h5>Phone: 017641842</h5>
                        <h6>Email: yoga.health@gmail.com</h6>
                    </div>
                </div>
                <p>All Reserves 2021|| Copyright </p>
            </footer>
        </div>
    );
};

export default Footer;