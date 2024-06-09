import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    image?: string | StaticImageData;
    title: string;
    product_price: string;
    text: string;
    text_on_btn: React.ReactNode;
    onClick?: () => void;
    textColor?: string;
}

const Card3: React.FC<CardProps> = ({ image, title, product_price, text, text_on_btn, onClick, textColor }) => {
    return (
        <div className="border bg-white border-gray-300 rounded-lg shadow-lg p-5 m-2 text-center w-[300px] md:w-[300px] inline-block">
        {image && (
            <div className="relative w-36 h-32 mx-auto mb-4">
            <Image 
                src={image} 
                alt="profile" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-md"
            />
            </div>
        )}
        <h2 className="text-lg font-bold mb-2" style={{ color: textColor }}>{title}</h2>
        <p className='text-base font-semibold mb-2' style={{ color: textColor }}>{product_price}</p>
        <p className="text-base mb-4" style={{ color: textColor }}>{text}</p>
        <button
            onClick={onClick}
            className="bg-blue-500 text-white border-none rounded-lg py-2 px-4 text-lg font-bold cursor-pointer transition-transform transform hover:bg-blue-700 hover:-translate-y-1 active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
            {text_on_btn}
        </button>
        </div>
    );
};

export { Card3 };
