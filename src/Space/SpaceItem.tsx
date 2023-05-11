import React from "react";
import { prefixRootCls } from "../common";

export interface SpaceItemProps {
    childrenNode: React.ReactNode,
    index: number,
    lastIndex: number,
    split?: React.ReactNode
}

const SpaceItem: React.FC<SpaceItemProps> = (props) => {

    const compClsName = 'space-item';
    const prefixCls = `${prefixRootCls}-${compClsName}`;

    const {
        childrenNode,
        index,
        lastIndex,
        split
    } = props;

    return <>
        <div className={`${prefixCls}-node`}>
            {childrenNode}
        </div>
        {
            index < lastIndex && split && <span className={`${prefixCls}-split`}>{split}</span>
        }
    </>
}

export default SpaceItem;