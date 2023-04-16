import CarouselArrow from '../CarouselArrow'
import CarouselTitle from '../CarouselTitle'
import MovieCard from '../MovieCard'
import * as S from './styles'

const Carousel = () => {
  return (
    <S.Wrapper>
      <CarouselTitle>Carousel</CarouselTitle>
      <S.WrapperSlider>
        <CarouselArrow arrowDirection='left' />
        <S.Slider>
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
        <CarouselArrow arrowDirection='right' />
      </S.WrapperSlider>
    </S.Wrapper>
  )
}

export default Carousel
