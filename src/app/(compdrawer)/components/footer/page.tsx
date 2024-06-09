"use client"
import React from 'react'
import { FooterLight, FooterDark } from 'mvk-ui'
import FooterCodes from '@/components/CodeBoxes/FooterCodes'

const Page = () => {
    const footerLinks = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' }
    ];
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Footer</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Footers: the bottom part of a webpage where you often find links to important information, like contact details or legal stuff.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl h-64 md:h-[12rem] w-full md:w-[80%] p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center h-full">
                    <div className='flex flex-col md:flex-row gap-3 justify-center'>
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
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <FooterCodes />
            </div>
        </div>
    )
}

export default Page
