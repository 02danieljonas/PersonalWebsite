import React from "react";

type SecondaryDisplayProps = {
    inputValues: string[];
};

export default function SecondaryDisplay({
    inputValues
}: SecondaryDisplayProps) {
    return <div>SecondaryDisplay: {inputValues}</div>;
}
