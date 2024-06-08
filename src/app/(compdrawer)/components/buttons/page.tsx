"use client"
import React from 'react'
import { Primarybtn, Secondarybtn, Dangerbtn, Successbtn } from 'mvk-ui'
import BtnCodes  from '@/components/BtnCodeBoxes'

const Page = () => {
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Buttons</h1>
            <p className='mt-8'>Buttons allow the user to take actions or make choices.</p>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl h-64 md:h-[12rem] w-full md:w-[75%] p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center h-full">
                    <div className='flex flex-col md:flex-row gap-3 justify-center'>
                        <Primarybtn>Primary</Primarybtn>
                        <Secondarybtn>Secondary</Secondarybtn>
                        <Successbtn>Success</Successbtn>
                        <Dangerbtn>Danger</Dangerbtn>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Primary button</p>
            </div>
            <div>
                <BtnCodes />
            </div>
        </div>
    )
}

export default Page
