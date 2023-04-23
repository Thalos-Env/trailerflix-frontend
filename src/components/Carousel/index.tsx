import { useRef } from 'react'
import CarouselArrow from '../CarouselArrow'
import CarouselTitle from '../CarouselTitle'
import MovieCard from '../MovieCard'
import * as S from './styles'

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (side: string) => {
    const container = containerRef.current
    const multiplier = side === 'left' ? -1 : 1
    if (container) {
      const scrollX = Math.round(container?.offsetWidth / 4) * multiplier
      container.scrollBy({ left: scrollX, behavior: 'smooth' })
    }
  }

  return (
    <S.Wrapper>
      <CarouselTitle>Carousel</CarouselTitle>
      <S.WrapperSlider>
        <CarouselArrow arrowDirection='left' handleScroll={() => handleScroll('left')} />
        <S.Slider ref={containerRef}>
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
        </S.Slider>
        <CarouselArrow arrowDirection='right' handleScroll={() => handleScroll('right')} />
      </S.WrapperSlider>
    </S.Wrapper>
  )
}

export default Carousel
