"use client";

import React from "react";

type IndexProps = {
    inputValues: string[];
    setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Index({ inputValues, setInputValues }: IndexProps) {
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setInputValues([e.target.value])}
                value={inputValues[0]}
            />
            {inputValues}
            index
        </div>
    );
}
