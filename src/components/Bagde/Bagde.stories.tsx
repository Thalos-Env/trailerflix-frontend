import { Story, Meta } from '@storybook/react'
import Bagde from '.'

export default {
  title: 'Bagde',
  component: Bagde,
} as Meta

export const Bom: Story = () => <Bagde variant='good' />

export const EnganouBem: Story = () => <Bagde variant='bad' />

export const Novo: Story = () => <Bagde variant='new' />
