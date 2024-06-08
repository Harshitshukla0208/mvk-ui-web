"use client"
import React from 'react'
import { LoginForm } from 'mvk-ui'
import {LoginFormCode}  from '@/components/CodeBoxes'

const Page = () => {
    const handleLogin = (username: string, email: string, password: string) => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };
    
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Login form</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>A login form typically consists of input fields for a username/email and password, along with a submit button.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className="relative mt-5 border-[#f0f0f0] border-[2px] rounded-xl h-80 md:h-[30rem] w-full md:w-[75%] p-4 bg-white overflow-hidden mx-auto">
                <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                    {/* This div is only for background */}
                </div>
                <div className="relative flex justify-center items-center h-full">
                    <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <LoginForm 
                        onSubmit={handleLogin} 
                        usernamePlaceholder="Your username" 
                        emailPlaceholder="Your email" 
                        passwordPlaceholder="Your password" 
                        usernameLabel="Username" 
                        emailLabel="Email Address" 
                        passwordLabel="Password" 
                        buttonText="Sign In"
                    />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <LoginFormCode />
            </div>
        </div>
    )
}

export default Page
