import Link from "next/link";

interface FilesCompProps {
    tableCols: string[],
    tableRows: string[][],
}

const FilesComp: React.FC<FilesCompProps> = ({ tableRows, tableCols }) => {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {tableCols.map((col, index) => (
                        <th scope="col" className="px-6 py-3" key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableRows.map((rowItem, index) => (
                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rowItem[0]}</th>
                        {rowItem.slice(1, -1).map((row, rowIndex) => (
                            <td key={rowIndex} className="px-6 py-4">{row}</td>
                        ))}
                        <td key={rowItem.length - 1} className="px-6 py-4">
                            <Link href='/' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{rowItem[rowItem.length - 1]}</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FilesComp;
