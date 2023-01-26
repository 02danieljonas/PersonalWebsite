"use client";

import React from "react";
import PrimaryDisplay from "./PrimaryDisplay";
import SecondaryDisplay from "./SecondaryDisplay";

type DisplayProps = {
    inputValues: string[];
    setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Display({ inputValues, setInputValues }: DisplayProps) {
    return (
        <div>
            <PrimaryDisplay inputValues={inputValues} setInputValues={setInputValues} />
            <SecondaryDisplay inputValues={inputValues} />
        </div>
    );
}
