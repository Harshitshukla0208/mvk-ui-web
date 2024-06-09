"use client"
import React from 'react'
import { Avatar } from 'mvk-ui'
import AvatarCode from '@/components/CodeBoxes/AvatarCode'

const Page = () => {
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Avatar</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Avatars: tiny images or icons that represent you online, like your digital face or identity.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl h-64 md:h-[12rem] w-full md:w-[75%] p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center h-full">
                    <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <Avatar 
                        src="https://th.bing.com/th/id/OIP.2KEClthNBDqJZmXuFNaYUgAAAA?pid=ImgDet&w=195&h=195&c=7&dpr=1.4" 
                        alt="User Avatar" 
                        size={100} 
                        shape="circle" 
                        border={true} 
                        borderColor="transparent" 
                    />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <AvatarCode />
            </div>
        </div>
    )
}

export default Page
