import React from "react";
import ApplicationContainer from "../components/ApplicationContainer";

const test = () => {
    
    return (
        <div className=" test bg-slate-500 w-full h-screen">
            <ApplicationContainer appName="Test" appUrl="https://danieljonas.dev/" appIcon="/static/icons/test.svg" />
        </div>
    );
};

export default test;
