import React from "react";

export interface SpaceItemProps {
    childrenNode: React.ReactNode,
    index: number,
    lastIndex: number,
    split?: React.ReactNode
}

const SpaceItem: React.FC<SpaceItemProps> = (props) => {
    const {
        childrenNode,
        index,
        lastIndex,
        split
    } = props;
    return <>
        {childrenNode}
        {
            index < lastIndex && split
        }
    </>
}

export default SpaceItem;