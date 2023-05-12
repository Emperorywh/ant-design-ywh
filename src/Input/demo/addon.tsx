/**
 * description: 用于配置一些固定组合。
 */
import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Input, Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space direction="vertical">
		<Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
		<Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
		<Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
	</Space>
);

export default App;
