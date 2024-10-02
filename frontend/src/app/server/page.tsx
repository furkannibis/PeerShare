import TableComp from "../components/table";
import ButtonComp from "../components/button";
import FilesComp from "../components/files"
import { BiServer } from "@react-icons/all-files/bi/BiServer";
import { AiFillFileAdd } from "@react-icons/all-files/ai/AiFillFileAdd"

export default function Server() {
    const serverCols = ['Settings', 'Value'];
    const serverRows = [
        ['Server IP', '127.0.0.1'],
        ['Server Port', '9182'],
        ['Server Status', 'Inactive']
    ];

    const userCols = ['Settings', 'Value'];
    const userRows = [
        ['Current User Count', '12'],
        ['Current Total File Size', '15.5GB'],
        ['Total Request Time', '123']
    ];

    const fileCols = ['File Name', 'File Size', 'File Type', 'Delete'];
    const fileRows = [
        ['Some Folder', '14.56GB', 'Folder', 'Delete'],
        ['Windows XP ISO', '456MB', 'ISO', 'Delete']
    ];

    const requestCols = ['Request File', 'Request IP', 'Request Time', 'Delete'];
    const requestRows = [
        ['Some Folder', '127.0.0.1', '02.10.2024 12:34', 'Delete'],
        ['Windows XP ISO', '127.0.0.1', '02.10.2024 14:37', 'Delete'],
    ];
    return (
        <div className="w-8/12 mx-auto grid grid-rows-2 items-center justify-items-center gap-5">
            <div className="grid grid-cols-2 gap-5">
                <TableComp cols={serverCols} rows={serverRows} />
                <TableComp cols={userCols} rows={userRows} />
            </div>
            <div className="grid grid-cols-1 w-6/12 content-between justify-items-center gap-5">
                <ButtonComp text="Start Server" icon={BiServer} className="w-4/12" />
                <ButtonComp text="Add File" icon={AiFillFileAdd} className="w-4/12" />
            </div>
            <div className="grid grid-cols-2 w-full content-between justify-items-center gap-7">
                <FilesComp tableCols={fileCols} tableRows={fileRows} />
                <FilesComp tableCols={requestCols} tableRows={requestRows} />
            </div>
        </div>
    );
}
