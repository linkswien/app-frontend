import { theme } from '@chakra-ui/react';

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		brand: {
			200: '#FA7F16',
			900: '#5C0AA3',
			700: '#8533D1',
		},
	},
};

export default customTheme;
