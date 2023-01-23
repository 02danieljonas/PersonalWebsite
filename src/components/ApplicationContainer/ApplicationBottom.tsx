type ApplicationBottomProps = {
    appName: string;
    appUrl: string;
    // height: string;
};

export default function ApplicationBottom({
    appName,
    appUrl,
    // height
}: 
ApplicationBottomProps) {
    return (
        <div className=" relative w-full disable-drag bg-slate-500 flex-grow">
            <iframe
                className="rounded-b"
                width="100%"
                // height={height}
                title={appName}
                src={appUrl}
            />
        </div>
    );
}
