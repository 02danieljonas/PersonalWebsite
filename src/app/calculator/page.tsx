"use client";

import React, { useState } from "react";
import KeyPad from "./(KeyPad)";
import Display from "./(Display)";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValues, setInputValues] = useState<string[]>([""]);

    return (
        <div className="flex flex-col h-screen">
            <Display inputValues={inputValues} setInputValues={setInputValues} />
            <KeyPad />
        </div>
    );
}
