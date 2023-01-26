import React from "react";

type PrimaryProps = {
    inputValues: string[];
    setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PrimaryDisplay({
    inputValues,
    setInputValues
}: PrimaryProps) {
    return (
        <div>
            PrimaryDisplay:
            <input
                type="text"
                onChange={(e) => {
                    console.log(e);
                    
                    setInputValues([e.target.value]);
                }}
                value={inputValues[0]}
            />
        </div>
    );
}
