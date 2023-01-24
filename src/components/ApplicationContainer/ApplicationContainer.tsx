import { Rnd } from "react-rnd";
import ApplicationTop from "./ApplicationTop";
import ApplicationBottom from "./ApplicationBottom";

type ApplicationContainerProps = {
    appName: string;
    appIcon: string;
    appUrl: string;
};

export default function ApplicationContainer({
    appName,
    appIcon,
    appUrl
}: ApplicationContainerProps) {
    return (
        <Rnd
            className="w-96 h-96 min-h-[400] min-w-[300]"
            minWidth={100}
            minHeight={100}
            bounds="parent"
            cancel=".disable-drag"
        >
            <div className="w-full h-full bg-gray-800 flex flex-col rounded-lg">
                <ApplicationTop appIcon={appIcon} appName={appName} />
                <ApplicationBottom appName="Name" appUrl={appUrl} />
            </div>
        </Rnd>
    );
}
