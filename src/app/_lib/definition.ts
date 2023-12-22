import React from "react";

export type ButtonPropsType = {
    label?: string,
    icon?: React.ReactNode
    isLink: boolean,
    to?: string,
    type: "primary" | "secondary" | "outlined"
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
    style?: string

}

