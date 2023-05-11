/**
 * description: 使用 `type="vertical"` 设置为行内的垂直分割线。
 */
import React from 'react';
import { Divider } from 'ant-design-ywh';

const App: React.FC = () => (
	<>
		Text
		<Divider type="vertical" />
		<a href="#">Link</a>
		<Divider type="vertical" />
		<a href="#">Link</a>
	</>
);

export default App;
