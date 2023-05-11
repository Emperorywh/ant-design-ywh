import React, { MouseEventHandler } from "react";
import "./index.less";
import { prefixRootCls } from "../common";
import { LoadingOutlined } from "@ant-design/icons";

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: "button" | "submit" | "reset";
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
        type = 'default',
    } = props;

    //当前组件的类名前缀
    const compClsName = 'button';
    //包名+组件类名的拼接
    const buttonPrefixCls = `${prefixRootCls}-${compClsName}`;
    let cn = `${buttonPrefixCls} ${buttonPrefixCls}-type-${type} ${buttonPrefixCls}-shape-${shape} ${buttonPrefixCls}-size-${size}`;

    if (block) {
        cn = cn.concat(` ${buttonPrefixCls}-block`)
    }

    if (disabled) {
        cn = cn.concat(` ${buttonPrefixCls}-disabled`)
    }

    if (danger) {
        cn = cn.concat(` ${buttonPrefixCls}-danger`)
    }

    if (loading) {
        cn = cn.concat(` ${buttonPrefixCls}-loading`)
    }

    const handleClick = (e: React.MouseEvent) => {
        const { onClick } = props;
        if (loading || disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler)?.(e);
    }

    return <button
        type={htmlType}
        className={cn}
        onClick={handleClick}
    >
        {!loading && props.icon}
        {
            loading && <LoadingOutlined />
        }
        {
            props.children && <span>{props.children}</span>
        }
    </button>
}

export default Button;