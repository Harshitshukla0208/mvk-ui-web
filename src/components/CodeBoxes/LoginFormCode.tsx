import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg';

const LoginFormCode = () => {
    const codeString1 = `
"use client"  // for nextJS
import { LoginForm } from 'mvk-ui';

const App = () => {
    const handleLogin = (username: string, email: string, password: string) => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="app-container">
            <LoginForm 
                onSubmit={handleLogin} 
                usernamePlaceholder="Your username" 
                emailPlaceholder="Your email" 
                passwordPlaceholder="Your password" 
                usernameLabel="Username" 
                emailLabel="Email Address" 
                passwordLabel="Password" 
                buttonText="Sign In"
            />
        </div>
    );
};

export default App;
    `;

    const [copy1, setCopy1] = useState(false);

    return (
        <div className="p-4 flex justify-center">
            <div className="relative w-[100%] md:w-[500px] bg-[#282c34] rounded-xl overflow-hidden">
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ marginLeft: '15px' }}>
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

export default LoginFormCode;
