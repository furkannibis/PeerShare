'use client';

import React, { useState } from "react";

interface TableHeaderInterface {
    TableHeader: string[];
}

interface TableRowInterface {
    name: string;
    value: string | number | boolean | undefined;
}

interface TableProps extends TableHeaderInterface {
    TableRows: TableRowInterface[];
}

export function Table({ TableHeader, TableRows }: TableProps) {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="table-header">
                        {TableHeader.map((tabhead, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {tabhead}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TableRows.map((row) => (
                        <tr
                            key={row.name}
                            className="table-row text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {row.name}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
