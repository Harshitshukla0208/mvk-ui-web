"use client"
import React from 'react';
import { Navbar1 } from 'mvk-ui';
import NavbarCodes from '@/components/CodeBoxes/NavbarCodes';

const Page = () => {

    const navbarLinks = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' }
    ];

    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Navbar</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Navbar is used to show a navigation bar on the top of the page.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl w-full h-80 md:h-60 p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center">
                    <div className='flex flex-col md:flex-row gap-3 justify-center w-full'>
                        <Navbar1 
                            brand="My Brand" 
                            links={navbarLinks} 
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
                <NavbarCodes />
            </div>
        </div>
    )
}

export default Page;
