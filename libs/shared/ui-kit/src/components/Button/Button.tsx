import React, { FC, useRef } from 'react'
import { mergeProps, SharedButtonProps, useButton, useHover } from 'web-platform-alpha'

import { StyledButton } from './Button.styles'

enum IButtonTypes {
  primary = 'primary',
  secondary = 'secondary'
}

export type IButtonType = keyof typeof IButtonTypes
type IButtonHtmlType = 'submit' | 'reset' | 'button'

export type IButtonProps = SharedButtonProps<HTMLButtonElement> & {
  type?: IButtonType
  htmlType?: IButtonHtmlType
  disabled: boolean
}

export const Button: FC<IButtonProps> = ({
  children,
  type = IButtonTypes.primary,
  htmlType = 'button',
  ...props
}) => {
  const ref = useRef(null)
  const { isHovered, hoverProps } = useHover(props)
  const { isPressed, buttonProps } = useButton(props, ref)

  return (
    <StyledButton
      ref={ref}
      isHovered={isHovered}
      isPressed={isPressed}
      type={htmlType}
      buttonType={type}
      {...mergeProps(buttonProps, hoverProps)}
    >
      {children}
    </StyledButton>
  )
}
