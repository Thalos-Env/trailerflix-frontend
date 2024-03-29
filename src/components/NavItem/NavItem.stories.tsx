import { Story, Meta } from '@storybook/react'
import NavItem, { NavItemProps } from '.'

export default {
  title: 'NavItem',
  component: NavItem,
  argTypes: {
    icon: {
      control: {
        type: 'disable',
      },
    },
  },
} as Meta

export const Default: Story<NavItemProps> = (args) => <NavItem {...args} />
Default.args = {
  children: 'Home',
  icon: 'home',
}
