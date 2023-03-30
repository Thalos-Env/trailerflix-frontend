import { Story, Meta } from '@storybook/react'
import Avatar from '.'

const imgSrc = '../../assets/images/user.jpg'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

export const Default: Story = () => <Avatar src={imgSrc} alt='Imagem do usuário' />
