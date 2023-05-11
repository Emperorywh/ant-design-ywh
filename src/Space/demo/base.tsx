/**
 * description: 相邻组件水平间距。
 */
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space>
		Space
		<Button type="primary">Button</Button>
		<Button>
			<UploadOutlined /> Click to Upload
		</Button>
		<Button>Confirm</Button>
	</Space>
);

export default App;

