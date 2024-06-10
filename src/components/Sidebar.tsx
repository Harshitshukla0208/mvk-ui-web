"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaTimes, FaHome } from 'react-icons/fa';

const components = [
    { name: 'Button', path: '/components/buttons' },
    { name: 'Login form', path: '/components/login-form' },
    { name: 'File selector', path: '/components/file-selector' },
    { name: 'Cards', path: '/components/cards' },
    { name: 'Navbar', path: '/components/navbar' },
    { name: 'Footer', path: '/components/footer' },
    { name: 'Selector', path: '/components/selector' },
    { name: 'Text area', path: '/components/text-area' },
    { name: 'Search bar', path: '/components/search-bar' },
    { name: 'Input', path: '/components/input' },
    { name: 'Avatar', path: '/components/avatar' },
];

const SideDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Mobile Drawer */}
            <div className={`fixed z-40 top-0 left-0 h-full bg-gray-800 text-white transition-transform md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 flex gap-4 justify-between items-center">
                    <Link href={'/'}>
                        <h2 className="text-lg font-bold">Components</h2>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleDrawer}>
                            <FaTimes size={18} />
                        </button>
                    </div>
                </div>
                <ul className="p-4">
                    {components.map(component => (
                        <li key={component.name} className="p-2 hover:bg-gray-700 cursor-pointer">
                            <Link href={component.path} onClick={toggleDrawer}>
                                <div>
                                    {component.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Drawer */}
            <div className="hidden md:block md:w-64 bg-gray-800 text-white">
                <div className="p-4 flex justify-between items-center">
                    <Link href={'/'}>
                        <h2 className="text-lg font-bold">Components</h2>
                    </Link>
                    <Link href={'/'}>
                        <FaHome size={18} />
                    </Link>
                </div>
                <ul className="p-4">
                    {components.map(component => (
                        <li key={component.name} className="p-2 hover:bg-gray-700 cursor-pointer">
                            <Link href={component.path}>
                                <div>
                                    {component.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 p-4 md:p-0">
                {/* Hamburger Button */}
                <button className="flex gap-2 md:hidden text-black bg-gray-100 p-2 rounded m-0" onClick={toggleDrawer}>
                    ☰ <p className='text-xs mt-1'>explore more...</p>
                </button>
            </div>
        </div>
    );
};

export default SideDrawer;
