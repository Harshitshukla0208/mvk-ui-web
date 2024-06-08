"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const components = [
    { name: 'Button', path: '/components/buttons' },
    { name: 'Input', path: '/input' },
    { name: 'SearchBar', path: '/searchbar' },
    { name: 'Textarea', path: '/textarea' },
    { name: 'Avatar', path: '/avatar' },
    { name: 'Navbar', path: '/navbar' },
    { name: 'Footer', path: '/footer' },
    { name: 'Selector', path: '/components/selector' }
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
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Components</h2>
                    <button onClick={toggleDrawer}>
                        <FaTimes size={24} />
                    </button>
                </div>
                <ul className="p-4">
                    {components.map(component => (
                        <li key={component.name} className="p-2 hover:bg-gray-700 cursor-pointer">
                            <Link href={component.path} onClick={toggleDrawer}>
                                {component.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Drawer */}
            <div className="hidden md:block md:w-64 bg-gray-800 text-white">
                <div className="p-4">
                    <h2 className="text-lg font-bold">Components</h2>
                </div>
                <ul className="p-4">
                    {components.map(component => (
                        <li key={component.name} className="p-2 hover:bg-gray-700 cursor-pointer">
                            <Link href={component.path}>
                                {component.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 p-4 md:p-0">
                {/* Hamburger Button */}
                <button className="md:hidden text-black bg-gray-100 p-2 rounded m-0" onClick={toggleDrawer}>
                    ☰
                </button>
            </div>
        </div>
    );
};

export default SideDrawer;
