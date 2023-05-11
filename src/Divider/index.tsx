import React from "react";
import "./index.less";
import { prefixRootCls } from "../common";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    className?: string,
    dashed?: boolean,
    orientation?: 'left' | 'right' | 'center',
    orientationMargin?: string | number,
    plain?: boolean,
    style?: React.CSSProperties,
    type?: 'horizontal' | 'vertical'
}

const Divider: React.FC<DividerProps> = (props) => {

    const {
        dashed = false,
        orientation = 'center',
        plain = false,
        type = 'horizontal'
    } = props;

    //当前组件的类名前缀
    const compClsName = 'divider';
    //包名+组件类名的拼接
    const dividerPrefixCls = `${prefixRootCls}-${compClsName}`;
    let cn = `${dividerPrefixCls} ${dividerPrefixCls}-type-${type}`;

    if (dashed) {
        cn = cn.concat(` ${dividerPrefixCls}-dashed`);
    }

    if (props.children && type === 'horizontal') {
        cn = cn.concat(` ${dividerPrefixCls}-children`);
        if (orientation === 'left') {
            cn = cn.concat(` ${dividerPrefixCls}-orientation-left`);
        }
        if (orientation === 'right') {
            cn = cn.concat(` ${dividerPrefixCls}-orientation-right`);
        }
        return <div className={cn} style={props.style}>
            {
                props.children && <span className={`${dividerPrefixCls}-innter-text`}>{props.children}</span>
            }
        </div>
    }
    cn = cn.concat(` ${dividerPrefixCls}-not-child`);
    return <span className={cn} style={props.style}></span>
}


export default Divider;