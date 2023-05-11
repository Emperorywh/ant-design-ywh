/**
 * description: 按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 */
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Space } from 'ant-design-ywh';

const App: React.FC = () => {

	const [size, setSize] = useState<'large' | 'middle' | 'small'>("large");

	return (
		<>
			<Space style={{marginBottom: '10px'}}>
				<Button onClick={() => setSize("large")}>Large</Button>
				<Button onClick={() => setSize("middle")}>Default</Button>
				<Button onClick={() => setSize("small")}>small</Button>
			</Space>
			<Space direction="vertical">
				<Space wrap>
					<Button type="primary" size={size}>
						Primary
					</Button>
					<Button size={size}>Default</Button>
					<Button type="dashed" size={size}>
						Dashed
					</Button>
				</Space>
				<Button type="link" size={size}>
					Link
				</Button>
				<Space wrap>
					<Button type="primary" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
						Download
					</Button>
					<Button type="primary" icon={<DownloadOutlined />} size={size}>
						Download
					</Button>
				</Space>
			</Space>
		</>
	);
};

export default App;
