import React from "react";
import ButtonStyles from "../../../styles/Button.module.scss";

type ButtonProps = {
    value: string;
    onClick: ()=>void
};

export default function Button({ value, onClick }: ButtonProps) {
    return (
        <button type="button" onClick={onClick} className={ButtonStyles.pushable}>
            <span className={ButtonStyles.shadow} />
            <span className={ButtonStyles.edge} />
            <span className={ButtonStyles.front}>
                <span className={ButtonStyles.text}>
                    {value}
                </span>
            </span>
        </button>
    );
}
