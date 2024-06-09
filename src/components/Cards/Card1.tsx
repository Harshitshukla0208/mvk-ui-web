import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    image?: string | StaticImageData;
    title: string;
    text: string;
    textColor?: string;
}

const Card1: React.FC<CardProps> = ({ image, title, text, textColor }) => {
    return (
        <div className="border bg-white border-gray-300 rounded-lg shadow-lg p-5 m-2 text-center w-[280px] inline-block">
            {image && (
                <div className="relative w-24 h-24 mx-auto mb-4">
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
            <p className="text-base mb-4" style={{ color: textColor }}>{text}</p>
            <button
                onClick={() => alert(`Contact ${title}`)}
                className="bg-blue-500 text-white border-none rounded-lg py-2 px-4 text-lg font-bold cursor-pointer transition-transform transform hover:bg-blue-700 hover:-translate-y-1 active:bg-blue-800 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Contact
            </button>
        </div>
    );
};

export { Card1 };
