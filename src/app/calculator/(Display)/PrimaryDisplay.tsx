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
            PrimaryDisplay: {inputValues}
        </div>
    );
}
