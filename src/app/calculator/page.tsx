"use client";

import React from "react";
import KeyPad from "./(KeyPad)";
import Display from "./(Display)";

export default function Page() {
    return (
        <div className="flex flex-col h-screen">
            <Display />
            <KeyPad />
        </div>
    );
}
