import { colors } from './colors'
import { decorations } from './decorations'
import { utils } from './utils'

export type IColors = typeof colors
export type IDecorations = typeof decorations
export type IUtils = typeof utils

export type IColorKeys = keyof typeof colors
export type IColorValue = typeof colors[IColorKeys]
