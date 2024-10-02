type TableCompProps = {
    cols: string[];
    rows: string[][];
};

export default function TableComp({ cols, rows }: TableCompProps) {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {cols.map((col, index) => (
                        <th scope="col" key={index} className="px-6 py-3 text-2xl">{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        {row.map((item, itemIndex) => (
                            <td key={itemIndex} className="px-6 py-4 text-xl">{item}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
