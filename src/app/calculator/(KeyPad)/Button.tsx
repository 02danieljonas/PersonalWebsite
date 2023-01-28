import React from "react";
import ButtonStyles from "../../../styles/Button.module.scss";

type ButtonProps = {
    child: string;
};

export default function Button({ child }: ButtonProps) {
    return (
        <button type="button" className={ButtonStyles.pushable}>
            <span className={ButtonStyles.shadow} />
            <span className={ButtonStyles.edge} />
            <span className={ButtonStyles.front}>
                <span className={ButtonStyles.text}>{child}</span>
            </span>
        </button>
    );
}
