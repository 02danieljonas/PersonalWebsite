import { Rnd } from "react-rnd";
import ApplicationTop from "./ApplicationTop";
import ApplicationBottom from "./ApplicationBottom";

type ApplicationContainerProps = {
    appName: string;
    appIcon: string;
};

export default function ApplicationContainer({
    appName,
    appIcon
}: ApplicationContainerProps) {
    return (
        <div className="w-3/4 h-3/4 bg-gray-800">
            <Rnd
                bounds="parent"
                className="application bg-gray-900 rounded flex grow flex-col"
                cancel=".disable-drag"
                minWidth="300px"
                minHeight="400px"
            >
                <ApplicationTop appIcon={appIcon} appName={appName} />
                <ApplicationBottom appName="Name" appUrl="/KNumerals" />
            </Rnd>
        </div>
    );
}
