import { Story, Meta } from '@storybook/react'
import CarouselArrow from '.'

export default {
  title: 'CarouselArrow',
  component: CarouselArrow,
} as Meta

export const ArrowLeft: Story = () => <CarouselArrow arrowDirection='left' />
export const ArrowRight: Story = () => <CarouselArrow arrowDirection='right' />
