/**
 * description: 带有搜索按钮的输入框。
 */
import React from 'react';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'ant-design-ywh';

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
);

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => (
	<Space direction="vertical">
		<Input placeholder="input Input text" addonAfter={<SearchOutlined />} onSearch={onSearch}  />
		<Input placeholder="input Input text" addonAfter={<SearchOutlined />} allowClear onSearch={onSearch} />
		<Input
			addonBefore="https://"
			placeholder="input Input text"
			allowClear
			addonAfter={<SearchOutlined />}
			onSearch={onSearch}
			style={{ width: 304 }}
		/>
		<Input placeholder="input Input text" search={<SearchOutlined />} onSearch={onSearch} />
		<Input
			placeholder="input Input text"
			allowClear
			size="large"
			search={"Search"}
			onSearch={onSearch}
		/>
		<Input
			placeholder="input Input text"
			size="large"
			suffix={suffix}
			search={"Search"}
			onSearch={onSearch}
		/>
	</Space>
);

export default App;
