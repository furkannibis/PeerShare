import { IconType } from "@react-icons/all-files/lib";
import React from "react";

interface ButtonCompProps {
    text: string;
    className?: string;
    icon: IconType;
}


const ButtonComp: React.FC<ButtonCompProps> = ({ text, className, icon: Icon }) => {
    return (
        <button type="button" className={`text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 flex flex-row items-center justify-center gap-x-1 ${className}`}>
            <Icon /> {text}
        </button>
    );
}
export default ButtonComp;