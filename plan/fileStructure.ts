// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebsiteObject = {
    name: string;
    admin: boolean;
    icon: string; // pathToIcon
};

type WebsiteFile = {
    name: string;
    admin: boolean;
    location?: string;
    icon: string | "fileIcon";
    content: string;
};

type WebsiteApp = {
    name: string;
    admin: boolean;
    icon: string | "fileIcon";
    id: string;
};

type WebsiteFolder = {
    name: string;
    admin: boolean;
    icon: string | "folderIcon"; // pathToIcon
    contents: (WebsiteFolder | WebsiteFile | WebsiteApp)[] | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const C: WebsiteFolder = {
    name: "C:",
    admin: true,
    icon: "folderIcon",
    contents: [
        {
            name: "hi",
            icon: "fileIcon",
            admin: true,
            content: ""
        },
        {
            name: "Desktop",
            icon: "desktopIcon",
            admin: true,
            contents: [
                {
                    name: "Calculator",
                    id: "",
                    admin: false,
                    icon: ""
                },
                {
                    name: "My Files",
                    id: "",
                    admin: false,
                    icon: "folderIcon"
                }
            ]
        },
        {
            name: "Documents",
            icon: "documentIcon",
            admin: true,
            contents: undefined
        },
        {
            name: "Downloads",
            icon: "downloadIcon",
            admin: true,
            contents: undefined
        }
    ]
};

export {};
