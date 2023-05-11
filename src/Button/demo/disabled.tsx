/**
 * description: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */
import React from 'react';
import { Button, Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space direction="vertical">
		<Space>
			<Button type="primary">Primary</Button>
			<Button type="primary" disabled>
				Primary(disabled)
			</Button>
		</Space>
		<Space>
			<Button>Default</Button>
			<Button disabled>Default(disabled)</Button>
		</Space>
		<Space>
			<Button type="dashed">Dashed</Button>
			<Button type="dashed" disabled>
				Dashed(disabled)
			</Button>
		</Space>
		<Space>
			<Button type="text">Text</Button>
			<Button type="text" disabled>
				Text(disabled)
			</Button>
		</Space>
		<Space>
			<Button type="link">Link</Button>
			<Button type="link" disabled>
				Link(disabled)
			</Button>
		</Space>
		<Space>
			<Button type="primary" href='https://ant.design/index-cn'>
				Href Primary
			</Button>
			<Button type="primary" href='https://ant.design/index-cn' disabled>
				Href Primary(disabled)
			</Button>
		</Space>
		<Space>
			<Button danger>Danger Default</Button>
			<Button danger disabled>
				Danger Default(disabled)
			</Button>
		</Space>
		<Space>
			<Button danger type="text">
				Danger Text
			</Button>
			<Button danger type="text" disabled>
				Danger Text(disabled)
			</Button>
		</Space>
		<Space>
			<Button type="link" danger>
				Danger Link
			</Button>
			<Button type="link" danger disabled>
				Danger Link(disabled)
			</Button>
		</Space>
	</Space>
);

export default App;
