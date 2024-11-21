interface TableHeaderInterface {
    TableHeader: string[];
}

interface TableRowInterface {
    name: string;
    value: string | number | boolean | undefined;
    replaceable: boolean;
    saveble: boolean;
}

interface TableProps extends TableHeaderInterface {
    TableRows: TableRowInterface[];
}

export function Table({ TableHeader, TableRows }: TableProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const updatedValue = e.target.value;
        console.log(`${name} updated to ${updatedValue}`);
    };

    const handleSaveClick = (name: string) => {
        console.log(`${name} saved`);
    };
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
                    {TableRows.map((row, index) => (
                        <tr key={index} className="table-row text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.name}
                            </td>

                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.value}
                            </td>

                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.replaceable ? (
                                    <input
                                        type="text"
                                        placeholder="New value"
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                        onChange={(e) => handleInputChange(e, e.target.value)}
                                    />
                                ) : <p className="text-zinc-400 text-xs">N/A</p>}
                            </td>

                            <td className="px-6 py-4">
                                {row.saveble ? (
                                    <button
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => handleSaveClick(row.name)}
                                    >
                                        Change
                                    </button>
                                ) : <p className="text-zinc-400 text-xs">N/A</p>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
