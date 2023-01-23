import React from "react";
import ApplicationContainer from "../components/ApplicationContainer";

const test = () => {
    return (
        <div className="test bg-slate-500 w-screen h-screen">
            <ApplicationContainer appName="Test" appIcon="/static/icons/test.svg" />
        </div>
    );
};

export default test;
