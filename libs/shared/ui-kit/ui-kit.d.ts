import 'styled-components'
import { IColors, IDecorations, IUtils } from './src/theme/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
    decorations: IDecorations
    utils: IUtils
  }
}
