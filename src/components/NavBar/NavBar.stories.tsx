import { Story, Meta } from '@storybook/react'
import NavBar from '.'
import NavItem from '../NavItem'

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta

export const Default: Story = () => (
  <NavBar>
    <NavItem icon={'home'}>Home</NavItem>
    <NavItem icon={'star'}>Novos</NavItem>
    <NavItem icon={'userGroup'}>Colaborar</NavItem>
  </NavBar>
)
