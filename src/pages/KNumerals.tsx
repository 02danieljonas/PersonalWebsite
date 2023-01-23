import React from "react";
import KNumerals from "../components/KNumerals";

const test = () => {
    return (
        <div className="absolute bg-white h-full">
            <KNumerals value={9876543210} height={18} />
        </div>
    );
};

export default test;
