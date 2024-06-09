import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-transparent text-black py-8">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex items-center space-x-4 mb-4">
                    {/* GitHub Icon */}
                    <a href="https://github.com/Harshitshukla0208" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/harshit-shukla-9a5950239/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </a>
                </div>
                <p className="text-lg">© 2024 Harshit Shukla. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
