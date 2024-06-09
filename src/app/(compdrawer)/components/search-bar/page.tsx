"use client"
import React from 'react'
import { SearchBar1,SearchBar2 } from 'mvk-ui'
import SearchBarsCodes from '@/components/CodeBoxes/SearBarsCodes'
import { useState } from 'react'

const Page = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        console.log('Search:', searchValue);
    };
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Search bars</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Search bars: the compass of the digital realm, guiding users to their desired destinations with a keystroke.</p>
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
                    <SearchBar1 
                        placeholder="Search..." 
                        value={searchValue} 
                        onChange={handleSearchChange} 
                        onSearch={handleSearch} 
                        textColor="#333" 
                        backgroundColor="#fff" 
                        width='400px'
                    />
                    <SearchBar2 
                        placeholder="Search..." 
                        value={searchValue} 
                        onChange={handleSearchChange} 
                        onSearch={handleSearch} 
                        textColor="#333" 
                        backgroundColor="#fff" 
                        width='400px'
                    />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <SearchBarsCodes />
            </div>
        </div>
    )
}

export default Page
