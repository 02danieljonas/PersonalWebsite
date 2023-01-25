"use client";

//TODO modify querry url instead of a useState

import React, { useState } from "react";

export default function index() {
    const [inputValues, setInputValues] = useState<string[]>([]);
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setInputValues([e.target.value])}
            />
            {inputValues}
            index
        </div>
    );
}
