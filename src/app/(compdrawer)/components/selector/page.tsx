"use client"
import React from 'react'
import { Selector } from 'mvk-ui'
import {SelectorCode}  from '@/components/CodeBoxes'

const Page = () => {
    const dropdownOptions = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];

    const handleSelect = (value: string) => {
        console.log('Selected value:', value);
    };
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Selector</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Selector can open a menu or any other element when the button is clicked.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl h-80 md:h-[18.5rem] w-full md:w-[75%] p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center h-full">
                    <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <Selector 
                        options={dropdownOptions} 
                        placeholder="Select an option" 
                        onSelect={handleSelect} 
                    />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <SelectorCode />
            </div>
        </div>
    )
}

export default Page
