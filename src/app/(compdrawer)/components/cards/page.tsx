"use client";
import React from 'react';
import { Card1 } from '@/components/Cards/Card1';
import { Card3 } from '@/components/Cards/Card3';
import CardCodes from '@/components/CodeBoxes/CardCodes';
import userImage from '../../../../assets/user.png';
import laptopImage from '../../../../assets/shop.png';

const Page = () => {
    return (
        <div className='mt-16 w-full px-4'>
            <h1 className='font-bold text-3xl'>Cards</h1>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Contact cards provide users with quick access to important contact information. Users can easily find details such as name, phone number, email address, and job title. These cards often feature buttons enabling users to initiate actions like making a call, sending an email, or accessing additional contact details.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Product cards offer users a snapshot of key information about a particular item. This includes details like product name, price, description, and availability. Buttons on product cards typically allow users to add items to their cart, view more details, or proceed to purchase directly. These buttons streamline the user experience, enabling swift actions and informed decisions.</p>
            </div>
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Preview</p>
            </div>
            <div className='md:flex'>
                <div className="relative mt-5 border-[#f0f0f0] border-2 rounded-xl h-96 md:h-[25rem] w-full md:w-[45%] p-4 bg-white overflow-hidden mx-auto">
                    <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                        {/* This div is only for background */}
                    </div>
                    <div className="relative flex justify-center items-center h-full">
                        <div className='flex flex-col md:flex-row gap-3 justify-center'>
                            <Card1 
                                image={userImage} 
                                title="John Doe" 
                                text="A brief description about John Doe." 
                                textColor="#000" 
                            />                                         
                        </div>
                    </div>
                </div>
                <div className="relative mt-5 border-[#f0f0f0] border-2 rounded-xl h-96 md:h-[25rem] w-full md:w-[45%] p-4 bg-white overflow-hidden mx-auto">
                    <div className="absolute inset-0 rotated-bg transform origin-top-left" style={{ width: '120%', height: '205%' }}>
                        {/* This div is only for background */}
                    </div>
                    <div className="relative flex justify-center items-center h-full">
                        <div className='flex flex-col md:flex-row gap-3 justify-center'>                 
                            <Card3 
                                image={laptopImage} 
                                title="Sample Product" 
                                product_price="$99.99" 
                                text="This is a great product."
                                text_on_btn="Buy Now"
                                onClick={() => alert('Buy Now clicked')}
                                textColor="#000" 
                            />                    
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex gap-2 mt-5'>
                <p className='opacity-40 hover:opacity-60'>#</p>
                <p className='component-preview-title'>Code</p>
            </div>
            <div>
                <CardCodes />
            </div>  
        </div>
    );
};

export default Page;
