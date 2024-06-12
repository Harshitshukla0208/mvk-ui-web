import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg';

const CardCodes = () => {
    const codeString1 =
    `
    
    "use client"  // for nextJS
    import { Card1, Card3 } from "mvk-ui";
    import userImage from '../../assets/user.png';
    import shopbagImage from '../../assets/shop.png';

    function App() {
        return (
            <>
                <Card1 
                    image={userImage} 
                    title="John Doe" 
                    text="A brief description about John Doe." 
                    textColor="#000" 
                /> 
                <Card3 
                    image={shopbagImage} 
                    title="Sample Product" 
                    product_price="$99.99" 
                    text="This is a great product."
                    text_on_btn="Buy Now"
                    onClick={() => alert('Buy Now clicked')}
                    textColor="#000" 
                />  
            </>
        );
    }

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

export default CardCodes;
