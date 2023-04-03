import { Story, Meta } from '@storybook/react'
import NavBar from '.'
import NavItem from '../NavItem'
import Icon from '../Icon'

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta

export const Default: Story = () => (
  <NavBar>
    <NavItem icon={<Icon icon='home' />}>Home</NavItem>
    <NavItem icon={<Icon icon='star' />}>Novos</NavItem>
    <NavItem icon={<Icon icon='userGroup' />}>Colaborar</NavItem>
  </NavBar>
)
