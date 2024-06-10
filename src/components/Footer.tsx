import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-transparent text-black py-8">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-0">
            <div className="flex items-center space-x-4 mb-4 md:mb-0 md:space-x-6">
            {/* GitHub Icon */}
            <a
                href="https://github.com/Harshitshukla0208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-2xl"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/harshit-shukla-9a5950239/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-2xl"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            </div>
            <p className="text-sm md:text-lg mt-4 md:mt-0">
            © 2024 Harshit Shukla. All rights reserved.
            </p>
        </div>
        </footer>
    );
};

export default Footer;