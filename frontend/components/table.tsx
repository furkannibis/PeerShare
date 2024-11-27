interface tableCompProps {
    tableHeader: string[]
    tableBody: any
}

export function TableComp({ tableHeader, tableBody }: tableCompProps) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="table-header">
                        {tableHeader.map((tabhead: string, index: number) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {tabhead}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableBody.map((row: any, rowIndex: number) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {tableHeader.map((key, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {row[key] || '-'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}