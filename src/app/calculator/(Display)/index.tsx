"use client";

import React from "react";
import PrimaryDisplay from "./PrimaryDisplay";
import SecondaryDisplay from "./SecondaryDisplay";

type DisplayProps = {
    inputValues: string[];
    setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
    expression: string;
};

export default function Display({ inputValues, setInputValues, expression }: DisplayProps) {
    return (
        <div>
            expression: {expression}
            <PrimaryDisplay
                inputValues={inputValues}
                setInputValues={setInputValues}
            />
            <SecondaryDisplay inputValues={inputValues} />
        </div>
    );
}
