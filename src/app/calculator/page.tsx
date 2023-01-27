"use client";

import React, { useState } from "react";
import KeyPad from "./(KeyPad)";
import Display from "./(Display)";

export default function Page() {
    const [formattedExpression, setFormattedExpression] = useState<string[]>(
        []
    );

    const [tempValue, setTempValue] = useState<string>("");

    const validValues = new Set([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "!",
        "%",
        "^",
        "*",
        "(",
        ")",
        "-",
        "=",
        "+",
        ".",
        "/",
        "|"
    ]);

    const validKeys = new Set(["C", "c", "Delete", "Backspace", "Enter"]);

    const handleKeyPress = (e: string) => {
        if (validValues.has(e)) {
            if (/\d/.test(e)) {
                setTempValue((prev) => prev + e);
            } else {
                console.log(tempValue);
                
                setFormattedExpression((prev) => [...prev, tempValue, e]);
                setTempValue("");
            }
            // setExpression((prev) => prev + e);
        } else if (validKeys.has(e)) {
            console.log(e);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            tempValue: {tempValue} <br />
            formattedExpression: {formattedExpression.toString()}
            <Display
                inputValues={formattedExpression}
                setInputValues={setFormattedExpression}
            />
            <KeyPad handleKeyPress={handleKeyPress} />
        </div>
    );
}
