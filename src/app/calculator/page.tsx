import React from "react";
import Bottom from "./(Bottom)";
import Top from "./(Top)";

export default function page() {
    return (
        <div className="flex flex-col h-screen">
            <Top />
            <Bottom />
        </div>
    );
}
