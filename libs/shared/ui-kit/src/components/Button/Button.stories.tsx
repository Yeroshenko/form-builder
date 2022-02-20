import { Button, IButtonProps } from './Button'
import { ComponentMeta, Story } from '@storybook/react'

export default {
  title: 'UI kit/Button',
  component: Button,

  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      defaultValue: 'button'
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Click me'
    },
    onPress: { action: 'press' },
    onPressStart: { action: 'press start' },
    onPressEnd: { action: 'press end' },
    onPressUp: { action: 'press up' }
  }
} as ComponentMeta<typeof Button>

export const Default: Story<IButtonProps> = props => {
  return <Button {...props} />
}
