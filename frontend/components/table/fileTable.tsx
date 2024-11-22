'use client';

import React from "react";

export interface TableRowProps {
    fileName: string;
    fileType: 'Directory' | 'File';
    fileSize: string;
}

interface FileTableProps {
    tableHeader: string[];
    tableRows: TableRowProps[];
}

export const FileTable: React.FC<FileTableProps> = ({ tableHeader, tableRows }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {tableHeader.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row, index) => (
                        <tr
                            key={index}
                            className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.fileName}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.fileType}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.fileSize}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
