import { Story, Meta } from '@storybook/react'
import Carousel from '.'
import MovieCard from '../MovieCard'

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta

export const Default: Story = () => (
  <Carousel title='Carousel Component'>
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
  </Carousel>
)
