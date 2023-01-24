import Image from "next/image";
import type { Property } from "csstype";

type ApplicationTopProps = {
    appIcon: string;
    appName: string;
    onClose: () => null;
    titleBarColor?: Property.BackgroundColor;
};

export default function ApplicationTop({
    appIcon,
    appName,
    onClose,
    titleBarColor = "gray"
}: ApplicationTopProps) {
    return (
        <div
            id="top"
            className="h-8 cancel rounded-t flex justify-between px-2"
            style={{ backgroundColor: titleBarColor }}
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
            <div
                id="title-bar-icon"
                className="flex gap-3 disable-drag cursor-auto"
            >
                <Image
                    alt="minimize icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    src="/static/title_bar_icons/minimize.svg"
                />
                <Image
                    alt="maximize icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    src="/static/title_bar_icons/maximize.svg"
                />
                <Image
                    alt="close icon"
                    width={30}
                    height={30}
                    onClick={onClose}
                    className="cursor-pointer"
                    src="/static/title_bar_icons/close.svg"
                />
            </div>
        </div>
    );
}
