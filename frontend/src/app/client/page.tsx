import FilesComp from "../components/files";
import TableComp from "../components/table";
import ConnectComp from "../components/connect"

export default function Client() {
    const clientCols = ['Settings', 'Value'];
    const clientRows = [
        ['Client IP', '127.0.0.1'],
        ['Client Port', '9182'],
        ['Connected Server IP', '---'],
        ['Connected Server Port', '---']
    ];

    const requestCols = ['Server IP', 'Requested File', 'Request Time', 'Delete'];
    const requestRows = [
        ['127.0.0.1', 'Windows XP ISO', '03.04.2025 14:53', 'Delete'],
        ['127.0.0.1', 'Some Folder', '03.03.2025 14:54', 'Delete']
    ];

    const fileCols = ['Server IP', 'File Name', 'File Size', 'File Type', 'Download'];
    const fileRows = [
        ['127.0.0.1', 'Windows XP ISO', '453MB', 'ISO', 'Download']
    ]

    return (
        <div className="w-8/12 mx-auto grid grid-rows-2 items-center justify-items-center gap-5">
            <div className="w-8/12 p-5">
                <ConnectComp />
            </div>
            <div className="w-8/12">
                <FilesComp tableCols={fileCols} tableRows={fileRows} />
            </div>
            <div className="w-10/12 grid grid-cols-2 w-full content-between justify-items-center gap-7">
                <FilesComp tableCols={requestCols} tableRows={requestRows} />
                <TableComp cols={clientCols} rows={clientRows} />

            </div>

            <div className="w-10/12">
            </div>
        </div>
    );
}