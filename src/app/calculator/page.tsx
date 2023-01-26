"use client";

import React, { useEffect, useState } from "react";
import KeyPad from "./(KeyPad)";
import Display from "./(Display)";

export default function Page() {
    const [formattedExpression, setFormattedExpression] = useState<string[]>(
        []
    );

    console.log(formattedExpression);
    

    const [expression, setExpression] = useState<string>("");

    // const [tempValue, setTempValue] = useState<string>("");
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
            //if its a number add it to the 
            setExpression((prev) => prev + e);
        } else if (validKeys.has(e)) {
            console.log(e);
        }
    };

    const handleAdd = (e: string) => {};

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            e.preventDefault();
            handleKeyPress(e.key);
        };
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Display
                expression={expression}
                inputValues={formattedExpression}
                setInputValues={setFormattedExpression}
            />
            <KeyPad handleKeyPress={handleKeyPress} />
        </div>
    );
}
