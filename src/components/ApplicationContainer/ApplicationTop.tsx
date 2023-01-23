import Image from "next/image";

type ApplicationTopProps = {
    appIcon: string;
    appName: string;
};

export default function ApplicationTop({ appIcon, appName }: ApplicationTopProps) {
    return (
        <div
            id="top"
            className="h-8 cancel bg-cyan-500 rounded-t flex justify-between px-2"
        >
            <div id="app-data" className="flex gap-1">
                <Image
                    className="m-auto"
                    src={appIcon}
                    alt="hi"
                    width={20}
                    height={20}
                />
                <div className="m-auto">{appName}</div>
            </div>
            <div id="title-bar-icon" className="">
                hello
            </div>
        </div>
    );
}
