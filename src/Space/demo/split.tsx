/**
 * description: 相邻组件分隔符。
 */
import React from 'react';
import { Space, Button} from 'ant-design-ywh';

const App: React.FC = () => (
	<Space split="|">
		<Button type="link">link</Button>
		<Button type="link">link</Button>
		<Button type="link">link</Button>
	</Space>
);

export default App;
