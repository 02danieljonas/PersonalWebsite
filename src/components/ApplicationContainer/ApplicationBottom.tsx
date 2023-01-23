type ApplicationBottomProps = {
    appName: string;
    appUrl: string;
    // height: string;
};

export default function ApplicationBottom({
    appName,
    appUrl
}: // height
ApplicationBottomProps) {
    return (
        <div className=" bg-slate-300 flex-grow flex rounded-b">
            {/* // flex-grow */}
            {/* // h-[100%-32px] */}
            <iframe
                className=" w-full flex-grow top-0 bottom-0-0 rounded-b"
                // height="100%-32px"
                title={appName}
                src={appUrl}
            />
        </div>
    );
}
