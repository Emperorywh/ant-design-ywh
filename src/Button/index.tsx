import React, { MouseEventHandler } from "react";
import "./index.less";
import { prefixRootCls } from "../common";

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: string;
    icon?: React.ReactNode;
    loading?: boolean | { delay: number };
    shape?: 'default' | 'circle' | 'round';
    size?: 'large' | 'middle' | 'small';
    target?: string;
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Button: React.FC<ButtonProps> = (props) => {

    const {
        block = false,
        danger = false,
        disabled = false,
        ghost = false,
        htmlType = 'button',
        loading = false,
        shape = 'default',
        size = 'middle',
        type = 'default'
    } = props;

    //当前组件的类名前缀
    const compClsName = 'button';
    //包名+组件类名的拼接
    const buttonPrefixCls = `${prefixRootCls}-${compClsName}`;
    const cn = `${buttonPrefixCls} ${buttonPrefixCls}-type-${type} `;

    return <button className={cn}>{props.icon}<span>{props.children}</span></button>
}

export default Button;