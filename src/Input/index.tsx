import React, { ChangeEventHandler, KeyboardEventHandler, ReactNode } from "react";
import { prefixRootCls } from "../common";
import "./index.less";

export interface InputProps {
    addonAfter?: ReactNode,
    addonBefore?: ReactNode,
    allowClear?: boolean | { clearIcon: ReactNode },
    bordered?: boolean,
    classNames?: string,
    defaultValue?: string,
    disabled?: boolean,
    id?: string,
    maxLength?: number,
    showCount?: boolean,
    status?: 'error' | 'warning',
    styles?: React.CSSProperties,
    prefix?: ReactNode,
    placeholder?: string,
    size?: 'large' | 'middle' | 'small',
    suffix?: ReactNode,
    type?: string,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
}

//当前组件的类名前缀
const compClsName = 'input';
//包名+组件类名的拼接
const dividerPrefixCls = `${prefixRootCls}-${compClsName}`;

/**
 * 普通输入框
 * @param props 
 * @returns 
 */
const InputFC: React.FC<InputProps> = React.memo((props) => {
    const {
        type = 'text',
        size = 'middle',
    } = props;

    let cn = `${dividerPrefixCls} ${dividerPrefixCls}-size-${size}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.disabled) return;
        props.onChange?.(event);
    }
    return <input value={props.value} defaultValue={props.defaultValue} onChange={handleChange} className={cn} type={type} placeholder={props.placeholder}></input>;
})

/**
 * 带有图标的输入框
 * @param props 
 * @returns 
 */
const InputWrapper: React.FC<InputProps> = React.memo((props) => {
    const {
        size = 'middle',
    } = props;
    return <span className={`${dividerPrefixCls}-group ${dividerPrefixCls}-group-size-${size}`}>
        {
            props.addonBefore && <span className={`${dividerPrefixCls}-addon ${dividerPrefixCls}-addon-before`}>{props.addonBefore}</span>
        }
        <span className={`${dividerPrefixCls}-wrapper`}>
            {
                props.prefix && <span className={`${dividerPrefixCls}-prefix`}>{props.prefix}</span>
            }
            <InputFC {...props}></InputFC>
            {
                props.suffix && <span className={`${dividerPrefixCls}-suffix`}>{props.suffix}</span>
            }
        </span>
        {
            props.addonAfter && <span className={`${dividerPrefixCls}-addon ${dividerPrefixCls}-addon-after`}>{props.addonAfter}</span>
        }
    </span>
});

/**
 * 最终返回的输入框组件
 * @param props 
 * @returns 
 */
const Input: React.FC<InputProps> = React.memo((props) => {
    const {
        prefix,
        suffix,
        addonBefore,
        addonAfter
    } = props;

    if (prefix || suffix || addonBefore || addonAfter) {
        return <InputWrapper {...props}></InputWrapper>
    }

    return <InputFC {...props}></InputFC>
})

export default Input;