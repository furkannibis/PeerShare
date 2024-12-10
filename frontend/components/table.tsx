interface TableCompProps {
    tableHeader: string[];
    tableBody: Array<Array<any>>;
}

export function TableComp({ tableHeader, tableBody }: TableCompProps) {
    return (
        <div className="relative text-center overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-md text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="table-header">
                        {tableHeader.map((tabhead: string, index: number) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {tabhead}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableBody.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 font-medium">
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {cell || '-'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
