const theme = require('../src/app/chakraTheme')

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: "Small mobile"
  },/* ,
  chakra: {
    theme no clue warum das nicht geht.... keine theme colors in storybook also
  } */
}