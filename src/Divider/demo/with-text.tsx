/**
 * description: 分割线中带有文字，可以用 `orientation` 指定文字位置。
 */
import React from 'react';
import { Divider } from 'ant-design-ywh';

const App: React.FC = () => (
	<>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
			probare, quae sunt a te dicta? Refert tamen, quo modo.
		</p>
		<Divider>Text</Divider>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
			probare, quae sunt a te dicta? Refert tamen, quo modo.
		</p>
		<Divider orientation="left">Left Text</Divider>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
			probare, quae sunt a te dicta? Refert tamen, quo modo.
		</p>
		<Divider orientation="right">Right Text</Divider>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
			probare, quae sunt a te dicta? Refert tamen, quo modo.
		</p>
		<Divider orientation="left" orientationMargin="0">
			Left Text with 0 orientationMargin
		</Divider>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
			probare, quae sunt a te dicta? Refert tamen, quo modo.
		</p>
		<Divider orientation="right" orientationMargin={50}>
			Right Text with 50px orientationMargin
		</Divider>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
			probare, quae sunt a te dicta? Refert tamen, quo modo.
		</p>
	</>
);

export default App;
