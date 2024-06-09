"use client"
import React from 'react'
import { TextArea } from 'mvk-ui'
import TextAreaCode from '@/components/CodeBoxes/TextAreaCode'

const Page = () => {
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Text area</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Text areas: the expandable boxes where you can type longer messages or multiple lines of text.</p>
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
                        <TextArea 
                            label="Description" 
                            placeholder="Enter your description here" 
                            rows={4}
                        />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <TextAreaCode />
            </div>
        </div>
    )
}

export default Page
