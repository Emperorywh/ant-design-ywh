/**
 * description: 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
 */

import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space direction="vertical">
		<Space wrap>
			<Button type="primary" shape="circle" icon={<SearchOutlined />} />
			<Button type="primary" shape="circle">
				A
			</Button>
			<Button type="primary" icon={<SearchOutlined />}>
				Search
			</Button>
			<Button shape="circle" icon={<SearchOutlined />} />
			<Button icon={<SearchOutlined />}>Search</Button>
		</Space>
		<Space wrap>
			<Button shape="circle" icon={<SearchOutlined />} />
			<Button icon={<SearchOutlined />}>Search</Button>
			<Button type="dashed" shape="circle" icon={<SearchOutlined />} />
			<Button type="dashed" icon={<SearchOutlined />}>
				Search
			</Button>
			<Button icon={<SearchOutlined />} href="https://www.google.com" />
		</Space>
	</Space>
);

export default App;
