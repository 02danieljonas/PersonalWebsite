import React from "react";
import ButtonStyles from "../../../styles/Button.module.scss";

type ButtonProps = {
    face: string;
    onClick: () => void;
    value: string
};

export default function Button({ face, onClick, value }: ButtonProps) {
    return (
        <button
            type="button"
            id={value}
            onClick={onClick}
            className={ButtonStyles.pushable}
        >
            <span className={ButtonStyles.shadow} />
            <span className={ButtonStyles.edge} />
            <span className={ButtonStyles.front}>
                <span className={ButtonStyles.text}>{face}</span>
            </span>
        </button>
    );
}
