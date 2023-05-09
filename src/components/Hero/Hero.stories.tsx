import { Story, Meta } from '@storybook/react'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero,
} as Meta

export const Default: Story = () => (
  <Hero
    title='Movie Title'
    description={''}
    onClickPlay={() => console.log('Play')}
    onClickInfo={() => console.log('Info')}
    onClickAdd={() => console.log('Add')}
    backgroundImageUrl='/assets/images/cartaz.jpg'
  />
)
