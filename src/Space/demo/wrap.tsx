/**
 * description: 自动换行。
 */
import React from 'react';
import { Button, Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space size={[8, 16]} wrap>
		{new Array(20).fill(null).map((_, index) => (
			<Button key={index}>Button</Button>
		))}
	</Space>
);

export default App;
