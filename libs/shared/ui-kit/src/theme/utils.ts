import { IColorValue } from './types'
import { rgba as polishedRgba } from 'polished'

const rgba = (color: IColorValue, alpha: number) => {
  if (alpha < 0 || alpha > 1)
    throw new Error('Alpha in rgba. Expected from 0 to 1, current = ' + alpha)

  return polishedRgba(color, alpha)
}

export const utils = { rgba }
