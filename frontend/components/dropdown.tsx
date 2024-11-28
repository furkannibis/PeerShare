import React, { SyntheticEvent, useState } from "react";

interface DropDownCompProps {
    id: string;
    ddHeader: string;
    ddBody: string[];
    onSelect: (option: string) => void; // Burada onSelect tipini değiştirdik
}

export function DropDownComp({ id, ddHeader, ddBody, onSelect }: DropDownCompProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option); // Seçilen opsiyonu burada onSelect ile iletiyoruz
    };

    return (
        <div className="relative" id={id}>
            <button
                id="dropdownDelayButton"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                {selectedOption || ddHeader}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {isOpen && (
                <div
                    id="dropdownDelay"
                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    style={{ top: "100%", left: 0 }}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDelayButton"
                    >
                        {ddBody.map((key, colIndex) => (
                            <li key={colIndex}>
                                <p
                                    onClick={() => handleOptionSelect(key)}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                >
                                    {key}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
