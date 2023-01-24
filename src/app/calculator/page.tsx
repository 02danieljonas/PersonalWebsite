import React from "react";
import Button from "./Button";

function ButtonGrid() {
    return (
        <div className="">
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
        </div>
    );
}

export default function page() {
    return <ButtonGrid />;
}
