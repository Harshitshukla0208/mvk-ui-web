"use client"
import React from 'react'
import { FilePicker } from 'mvk-ui'
import {FileSelectorCode}  from '@/components/CodeBoxes'
import { useState } from 'react';

const Page = () => {
    const [selectedFile, setSelectedFile] = useState<FileList | null>(null);

    const handleFileSelect = (files: FileList | null) => {
        if (files) {
            console.log('Selected file:', files[0].name);
        }
        setSelectedFile(files);
    };
    
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>File selector</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>A file selector, also known as a file input or file upload component, allows users to choose files from their local device to be uploaded to a server or processed within a web application.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl h-80 md:h-[20rem] w-full md:w-[75%] p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center h-full">
                    <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <FilePicker 
                        onFileSelect={handleFileSelect} 
                        textColor="#333" 
                        backgroundColor="#f8f9fa" 
                        borderColor="#007bff"
                        width="230px"
                        height="150px"
                    />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <FileSelectorCode />
            </div>
        </div>
    )
}

export default Page
