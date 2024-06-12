import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg';

const FooterCodes = () => {
    const codeString1 =
    `
    
    "use client"  // for nextJS
    import { FooterDark, FooterLight } from 'mvk-ui';

    const App = () => {
        const footerLinks = [
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Contact', url: '/contact' }
        ];

        return (
            <div className="app-container">
            <FooterDark 
                text="© 2024 Your Company. All rights reserved." 
                links={footerLinks} 
                backgroundColor="#282c34" 
                textColor="#61dafb"
            />
            <FooterLight 
                text="© 2024 Your Company. All rights reserved." 
                links={footerLinks} 
                backgroundColor="#fff" 
                textColor="#333"
            />
            </div>
        );
    };

    export default App;
    `;

    const [copy1, setCopy1] = useState(false);

    return (
        <div className="p-0 flex justify-center">
            <div className="relative w-[100%] md:w-[500px] bg-[#282c34] rounded-xl overflow-hidden text-sm md:text-base">
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ margin: 0 }}>
                    {codeString1}
                </SyntaxHighlighter>
                <div className="absolute top-2 right-2">
                    {copy1 ? (
                        <button className="py-1 flex items-center text-white">
                            <Image src={success} alt="Code Copied" />
                            <p className="ml-2 text-xs">Copied!</p>
                        </button>
                    ) : (
                        <button
                            className="py-1 flex items-center text-white"
                            onClick={() => {
                                navigator.clipboard.writeText(codeString1);
                                setCopy1(true);
                                setTimeout(() => {
                                    setCopy1(false);
                                }, 3000);
                            }}
                        >
                            <Image src={clipboardIcon} alt="Copy Code" />
                            <p className="ml-2 text-xs">Copy code</p>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FooterCodes;
