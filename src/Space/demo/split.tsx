/**
 * description: 相邻组件分隔符。
 */
import React from 'react';
import { Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space split={<div>@</div>}>
		<a>link1</a>
		<a>link2</a>
		<a>link3</a>
	</Space>
);

export default App;
