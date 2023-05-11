---
category: Components
group: 布局
subtitle: 间距
title: Space
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*37T2R6O9oi0AAAAAAAAAAAAADrJ8AQ/original
---

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。
- 需要表单组件之间紧凑连接且合并边框时，使用 Space.Compact（自 `antd@4.24.0` 版本开始提供该组件）。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/base.tsx">基本用法</code>
<code src="./demo/split.tsx">分隔符</code>
<code src="./demo/wrap.tsx">自动换行</code>

<!-- <code src="./demo/vertical.tsx">垂直间距</code>
<code src="./demo/size.tsx">间距大小</code>
<code src="./demo/align.tsx">对齐</code>
<code src="./demo/customize.tsx">自定义尺寸</code>
<code src="./demo/compact.tsx">紧凑布局组合</code>
<code src="./demo/compact-buttons.tsx">Button 紧凑布局</code>
<code src="./demo/compact-button-vertical.tsx">垂直方向紧凑布局</code>
<code src="./demo/compact-debug.tsx" debug>调试 Input 前置/后置标签</code>
<code src="./demo/compact-nested.tsx" debug>紧凑布局嵌套</code>
<code src="./demo/debug.tsx" debug>多样的 Child</code>
<code src="./demo/gap-in-line.tsx" debug>Flex gap 样式</code> -->

## API

### Space

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | 间距大小 | [Size](#size) \| [Size\[\]](#size) | `small` | 4.1.0 \| Array: 4.9.0 |
| split | 设置拆分 | ReactNode | - | 4.7.0 |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |

### Size

`'small' | 'middle' | 'large' | number`

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false | 4.24.0 |
| direction | 指定排列方向 | `vertical` \| `horizontal` | `horizontal` | 4.24.0 |
| size | 子组件大小 | `large` \| `middle` \| `small` | `middle` | 4.24.0 |

