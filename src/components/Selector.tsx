import * as React from 'react';
import { FC, useState } from 'react';

interface DropdownOption {
    label: string;
    value: string;
}

interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    onSelect: (value: string) => void;
}

const Selector: FC<DropdownProps> = ({
    options,
    placeholder = 'Select...',
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<DropdownOption | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: DropdownOption) => {
        setSelected(option);
        onSelect(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative w-48">
        <div
            className="bg-[#fff] flex items-center justify-between px-4 py-2 border-[3px] border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-300"
            onClick={toggleDropdown}
        >
            <span>{selected ? selected.label : placeholder}</span>
            <span
            className={`transition-transform duration-300 ${
                isOpen ? 'rotate-25' : '-rotate-90'
            }`}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                />
            </svg>
            </span>
        </div>
        <ul
            className={`absolute z-10 left-0 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            {options.map((option, index) => (
            <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                onClick={() => handleSelect(option)}
            >
                {option.label}
            </li>
            ))}
        </ul>
        </div>
    );
};

export { Selector };