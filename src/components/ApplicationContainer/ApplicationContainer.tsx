import { Rnd } from "react-rnd";
import ApplicationTop from "./ApplicationTop";
import ApplicationBottom from "./ApplicationBottom";

type ApplicationContainerProps = {
    appName: string;
    appIcon: string;
    appUrl: string;
    onClose: () => null;
};

export default function ApplicationContainer({
    appName,
    appIcon,
    appUrl,
    onClose
}: ApplicationContainerProps) {
    return (
        <Rnd
            className="w-[500] h-[300]"
            minWidth={100}
            minHeight={100}
            bounds="parent"
            cancel=".disable-drag"
        >
            <div className="w-full h-full bg-black gap-0 flex flex-col rounded-lg">
                <ApplicationTop
                    appIcon={appIcon}
                    appName={appName}
                    onClose={onClose}
                />
                <ApplicationBottom appName="Name" appUrl={appUrl} />
            </div>
        </Rnd>
    );
}
