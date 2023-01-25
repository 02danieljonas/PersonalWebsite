import React from "react";

type ButtonProps = {
    value: string;
};

export default function Button({ value }: ButtonProps) {
    return (
        <div className="inline-block text-center m-2 child text-white rounded-lg bg-[#B1B0B0]">
            <div className="flex items-center justify-center h-full">
                {value}
            </div>
        </div>
    );
}
