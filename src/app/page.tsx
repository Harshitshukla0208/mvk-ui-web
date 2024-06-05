"use client"
import Navbar from '../components/Navbar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import icon from '../assets/dark-icon.svg'
import { useState } from 'react';
import CopyCode from '@/components/CopyCode';
import Timeline from '../components/Timeline'

export default function Home() {

  const codeString1 = `npm i mvk-ui`;
  const codeString2 = `yarn add mvk-ui`
  const [copy1, setCopy1] = useState(false)
  const [copy2, setCopy2] = useState(false)

  return (
    <div className='mb-80'>
      <Navbar />
      <div className="hero bg-transparent" style={{ height: '650px' }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Rapidly build websites using mvk-ui</h1>
            <p className="py-6">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
            <button className="btn btn-primary">Get Started</button>

            {/* code-copy-boxes */}
            <div className="codebox-container flex gap-[0.5rem] ml-[1.75rem] mt-6">
              <div className="codebox1 flex mt-1 w-[195px] bg-[#282c34] rounded-lg overflow-hidden">
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '10px', paddingLeft: '20px' }}>
                  {codeString1}
                </SyntaxHighlighter>
                <div className="flex justify-between px-4 text-white text-xs items-center">
                  {
                    copy1 ?
                      (
                        <button className="py-1 items-center">
                          <span className='text-base mt-1 text-white'>
                            <Image src={success} alt="Code Copied" />
                          </span>
                          {/* Copied! */}
                        </button>
                      ) :
                      (
                        <button
                          className="py-1 items-center"
                          onClick={() => {
                            navigator.clipboard.writeText(codeString1);
                            setCopy1(true);
                            setTimeout(() => {
                              setCopy1(false)
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
              </div>
              <div className="codebox2 flex mt-1 w-[218px] bg-[#282c34] rounded-lg overflow-hidden">
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '10px', paddingLeft: '20px' }}>
                  {codeString2}
                </SyntaxHighlighter>
                <div className="flex justify-between px-4 text-white text-xs items-center">
                  {
                    copy2 ?
                      (
                        <button className="py-1 items-center">
                          <span className='text-base mt-1 text-white'>
                            <Image src={success} alt="Code Copied" />
                          </span>
                          {/* Copied! */}
                        </button>
                      ) :
                      (
                        <button
                          className="py-1 items-center"
                          onClick={() => {
                            navigator.clipboard.writeText(codeString2);
                            setCopy2(true);
                            setTimeout(() => {
                              setCopy2(false)
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get_started flex w-screen">
        <div className="left w-1/2">
          <div className="flex ml-16">
            <div className="bg-[transparent] w-[55px] h-[55px] flex justify-center rounded-xl border-[1px] border-slate-400">
              <Image src={icon} alt='icon' className='h-[25px] w-[50px] mt-[15px]' />
            </div>
            <h1 className='font-[525] text-4xl mt-2 ml-2'>Get started</h1>
          </div>
          <Timeline />
        </div>
        <div className="right w-1/2">
          <div className="flex flex-col justify-center items-center">
          <div className='mt-[20px]'>
            <CopyCode />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}