import styled, { DefaultTheme } from 'styled-components'
import { IButtonType } from './Button'

interface IStyledButtonProps {
  isHovered: boolean
  isPressed: boolean
  buttonType: IButtonType
}

interface IButtonColorSet {
  isPressed: string
  isHovered: string
  default: string
}

interface IButtonState {
  isPressed: boolean
  isHovered: boolean
}

type IGetColorFromTypeParams = IButtonState & {
  type: IButtonType
  theme: DefaultTheme
}

const getColorFromSet = (colorSet: IButtonColorSet, { isPressed, isHovered }: IButtonState) => {
  if (isPressed) return colorSet.isPressed
  if (isHovered) return colorSet.isHovered
  return colorSet.default
}

const getPrimaryBgColorSet = (theme: DefaultTheme): IButtonColorSet => ({
  default: theme.colors.yellow,
  isHovered: theme.colors.hoverYellow,
  isPressed: theme.colors.activeYellow
})

const getSecondaryBgColorSet = (theme: DefaultTheme): IButtonColorSet => ({
  default: theme.colors.gray,
  isHovered: theme.colors.hoverGray,
  isPressed: theme.colors.activeGray
})

const bgColorsMap = {
  primary: getPrimaryBgColorSet,
  secondary: getSecondaryBgColorSet
}

const getBgColorFromType = ({ type, theme, isHovered, isPressed }: IGetColorFromTypeParams) =>
  getColorFromSet(bgColorsMap[type](theme), { isHovered, isPressed })

export const StyledButton = styled.button<IStyledButtonProps>`
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  cursor: pointer;
  text-align: center;
  justify-content: center;

  font-size: 14px;
  line-height: 16px;

  color: ${({ theme, disabled }) => getButtonColor({ disabled, theme })};
  background-color: ${({ theme, isHovered, isPressed, buttonType }) =>
    getButtonBackground({ isHovered, isPressed, buttonType, theme })};
  border-radius: ${({ theme }) => theme.decorations.borderRadius.l}px;
  transition: ${({ theme }) => theme.decorations.transition.base};

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

const getButtonBackground = ({
  isHovered,
  isPressed,
  buttonType,
  theme
}: IStyledButtonProps & { theme: DefaultTheme }) =>
  getBgColorFromType({
    theme,
    type: buttonType,
    isHovered,
    isPressed
  })

const getButtonColor = ({ disabled, theme }: { disabled?: boolean; theme: DefaultTheme }) => {
  if (disabled) return theme.utils.rgba(theme.colors.base, 0.5)
  return theme.colors.base
}
