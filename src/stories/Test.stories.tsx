// Button.stories.ts|tsx

import Test from '../components/Test';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Test',
	component: Test,
};

export const Test1 = () => <Test name="Test1"></Test>;
