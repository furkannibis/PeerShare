import ButtonComp from "./button";
import { BiServer } from "@react-icons/all-files/bi/BiServer";

const ConnectComp = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3">
                <p className="text-3xl uppercase font-bold">Server IP</p>
                <input type="text" className="px-3 col-span-2 border border-gray" placeholder="Server IP Address" />
            </div>
            <div className="grid grid-cols-3">
                <p className="text-3xl uppercase font-bold">Server Port</p>
                <input type="text" className="px-3 col-span-2 border border-gray" placeholder="Server Port Number" />

            </div>
            <ButtonComp text="Connect Server" icon={BiServer} className="w-full justify-self-center" />
        </div>
    );
}

export default ConnectComp;