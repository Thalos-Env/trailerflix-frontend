import { Story, Meta } from '@storybook/react'
import MovieCard from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
} as Meta

export const Horizontal: Story = () => <MovieCard direction='horizontal' />
export const Vertical: Story = () => <MovieCard direction='vertical' />
