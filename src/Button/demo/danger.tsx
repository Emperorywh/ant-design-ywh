/**
 * description: 在 4.0 之后，危险成为一种按钮属性而不是按钮类型。
 */
import React from 'react';
import { Button, Space } from 'ant-design-ywh';

const App: React.FC = () => (
	<Space wrap>
		<Button type="primary" danger>
			Primary
		</Button>
		<Button danger>Default</Button>
		<Button type="dashed" danger>
			Dashed
		</Button>
		<Button type="text" danger>
			Text
		</Button>
		<Button type="link" danger>
			Link
		</Button>
	</Space>
);

export default App;
