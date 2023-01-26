import React from "react";

type SecondaryDisplayProps = {
    inputValues: string[];
    setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SecondaryDisplay({
    inputValues,
    setInputValues
}: SecondaryDisplayProps) {
    return <div>SecondaryDisplay: {inputValues}</div>;
}
