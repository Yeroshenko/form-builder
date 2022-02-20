import { FC } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { colors } from './colors'
import { utils } from './utils'
import { decorations } from './decorations'
import { GlobalStyle } from './GlobalStyle'

export const theme = { colors, decorations, utils }

export const ThemeProvider: FC = ({ children }) => (
  <SCThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </SCThemeProvider>
)
