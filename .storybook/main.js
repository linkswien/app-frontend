module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-controls',
		'@storybook/addon-viewport',
		'@storybook/preset-create-react-app',
		'@snek-at/storybook-addon-chakra-ui',
		'@storybook/addon-storysource',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
