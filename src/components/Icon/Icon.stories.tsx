import { Story, Meta } from '@storybook/react'
import Icon from '.'

export default {
  title: 'Icon',
  component: Icon,
  icon: {
    control: {
      type: 'disable',
    },
  },
} as Meta

export const Default: Story = (args) => <Icon icon={args.icon} />
Default.args = {
  icon: 'add',
}
