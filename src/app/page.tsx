"use client"
import Navbar from '../components/Navbar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react';

export default function Home() {
  
  const codeString = `npm i mvk-ui`;
  const [copy, setCopy]= useState(false)

  return (
    <div>
      <Navbar />
      <div className="hero bg-transparent" style={{ height: '650px' }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Rapidly build websites using mvk-ui</h1>
            <p className="py-6">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
            <button className="btn btn-primary">Get Started</button>
            <div className="w-[200px] bg-[#3a404d] rounded-md overflow-hidden">
              <div className="flex justify-between px-4 text-white text-xs items-center">
                <p className="text-sm">npm</p>
                {
                  copy ? 
                  (
                    <button className="py-1 inline-flex items-center gap-1">
                      <span className='text-base mt-1 text-white'>
                        <Image src={success} alt="Code Copied" />
                      </span>
                      {/* Copied! */}
                    </button>
                  ):
                  (
                    <button 
                      className="py-1 inline-flex items-center gap-1"
                      onClick={() => {
                        navigator.clipboard.writeText(codeString);
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false)
                        }, 3000);
                      }}
                    >
                      <span className='text-base mt-1 text-white'>
                        <Image src={clipboardIcon} alt="Copy Code" />
                      </span>
                      {/* Copy code */}
                    </button>
                  )
                }
              </div>
              <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '10px' }}>
                {codeString}
              </SyntaxHighlighter>
            </div>
            <div className="flex mt-1 w-[200px] bg-[#282c34] rounded-md overflow-hidden">
              <div className="flex justify-between px-4 text-white text-xs items-center">
                {
                  copy ? 
                  (
                    <button className="py-1 inline-flex items-center gap-1">
                      <span className='text-base mt-1 text-white'>
                        <Image src={success} alt="Code Copied" />
                      </span>
                      {/* Copied! */}
                    </button>
                  ):
                  (
                    <button 
                      className="py-1 inline-flex items-center gap-1"
                      onClick={() => {
                        navigator.clipboard.writeText(codeString);
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false)
                        }, 3000);
                      }}
                    >
                      <span className='text-base mt-1 text-white'>
                        <Image src={clipboardIcon} alt="Copy Code" />
                      </span>
                      {/* Copy code */}
                    </button>
                  )
                }
              </div>
              <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '10px' }}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}