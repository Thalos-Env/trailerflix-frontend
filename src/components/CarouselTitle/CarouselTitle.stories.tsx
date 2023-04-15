import { Story, Meta } from '@storybook/react'
import CarouselTitle from '.'

export default {
  title: 'CarouselTitle',
  component: CarouselTitle,
} as Meta

export const Default: Story<{ children: string }> = (args) => <CarouselTitle {...args} />
Default.args = {
  children: 'CarouselTitle',
}
