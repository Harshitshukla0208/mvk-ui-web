import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react';

const CopyCode = () => {
    const codeString1 = 
    `
    import { Selector } from 'mvk-ui';
    import './App.css'
    
    const App = () => {
        const dropdownOptions = [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' }
        ];
    
        const handleSelect = (value: string) => {
            console.log('Selected value:', value);
        };
    
        return (
            <div className="app-container">
            <Selector 
                options={dropdownOptions} 
                placeholder="Select an option" 
                onSelect={handleSelect} 
            />
            {/* Other components */}
            </div>
        );
    };
    
    export default App`;
    const [copy1, setCopy1] = useState(false)

    return (
        <div>
            <div className="flex justify-center mt-1 mb-2 w-[550px] bg-[#282c34] rounded-lg overflow-hidden">
            <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeString1}
            </SyntaxHighlighter>
            <div className="mt-2 px-4 text-white text-xs">
                {
                copy1 ?
                    (
                    <button className="py-1">
                        <span className='flex mt-1 ml-[-40px] text-white'>
                        <Image src={success} alt="Code Copied" />
                        <p className='mt-1'>Copied!</p>
                        </span>
                    </button>
                    ) :
                    (
                    <button
                        className="py-1"
                        onClick={() => {
                        navigator.clipboard.writeText(codeString1);
                        setCopy1(true);
                        setTimeout(() => {
                            setCopy1(false)
                        }, 3000);
                        }}
                    >
                        <span className='flex mt-1 ml-[-50px] text-white'>
                        <Image src={clipboardIcon} alt="Copy Code" />
                        <p className='mt-1'>Copy code</p>
                        </span>
                        
                    </button>
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default CopyCode
