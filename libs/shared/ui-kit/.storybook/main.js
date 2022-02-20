const rootMain = require('../../../../.storybook/main')

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }

    // add your own webpack tweaks if needed

    return config
  }
}

// import { addDecorator } from '@storybook/react'
// import { ThemeProvider } from '../theme'
//
// // Styled Components theme provider wraps app
// addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
