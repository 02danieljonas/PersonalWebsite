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
        // <div className="h-full disable-drag bg-slate-500 flex-grow">
        <iframe
            className="flex-grow h-full rounded-b"
            // height={height}
            title={appName}
            src={appUrl}
        />
        // </div>
    );
}
