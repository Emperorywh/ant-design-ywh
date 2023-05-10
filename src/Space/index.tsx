import React from "react";
import { prefixRootCls } from "../common";
import "./index.less";
import SpaceItem from "./SpaceItem";

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export type SpaceSize = SizeType | number;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    prefixCls?: string,
    align?: 'start' | 'end' | 'center' | 'baseline',
    direction?: 'vertical' | 'horizontal',
    size?: SpaceSize | [SpaceSize, SpaceSize],
    split?: React.ReactNode,
    wrap?: boolean,
    style?: React.CSSProperties
}

const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
};


const getNumberSize = (size: SpaceSize) => {
    return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const formatGap = (gapStyle: SpaceSize | [SpaceSize, SpaceSize]) => {
    const isArray = Array.isArray(gapStyle);
    if (isArray) {
        let result = '';
        gapStyle.forEach(item => {
            result = result.concat(getNumberSize(item) + 'px ');
        });
        return result;
    } else {
        return getNumberSize(gapStyle) + 'px';
    }
}

const Space: React.FC<SpaceProps> = (props) => {

    //当前组件的类名前缀
    const compClsName = 'space';
    //包名+组件类名的拼接
    const spacePrefixCls = `${prefixRootCls}-${compClsName}`;

    const {
        direction = 'horizontal',
        size = 'small',
        wrap = false,
        align = 'center',
        style
    } = props;

    // 当前组件的className
    let cn = `${spacePrefixCls} ${spacePrefixCls}-${direction} ${spacePrefixCls}-align-${align} `;
    if (wrap) {
        cn = cn.concat(`${spacePrefixCls}-wrap`)
    }

    const childrenNodeArray = React.Children.toArray(props.children);
    console.log('childrenNodeArray', childrenNodeArray);
    const childrenNodeList = childrenNodeArray.map((child, index) => {
        return <SpaceItem key={index} childrenNode={child} index={index} lastIndex={childrenNodeArray.length - 1} split={props.split}></SpaceItem>
    });

    return <div className={cn} style={{ ...style, gap: formatGap(size) }}>
        {childrenNodeList}
    </div>
}

export default Space;