"use client";

import React, { useEffect, useState } from "react";
import KeyPad from "./(KeyPad)";
import Display from "./(Display)";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValues, setInputValues] = useState<string[]>([]);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [tempValue, setTempValue] = useState<string>("");

    const validKeys = new Set([
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
        "|",
        "Enter",
        "C",
        "c",
        "Delete",
        "Backspace",
    ]);

    const handleKeyPress = (e: string) => {
        if (validKeys.has(e)) {
            console.log(`${e} is in ${Array.from(validKeys)}`);
        }
    };
    const handleKeydown= (e: KeyboardEvent)=>{
        handleKeyPress(e.key)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Display
                inputValues={inputValues}
                setInputValues={setInputValues}
            />
            <KeyPad handleKeyPress={handleKeyPress}  />
        </div>
    );
}
