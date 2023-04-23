import { useRef } from 'react'
import CarouselArrow from '../CarouselArrow'
import CarouselTitle from '../CarouselTitle'
import * as S from './styles'

type CarouselProps = {
  title: string
  children: React.ReactNode
}

const Carousel = ({ title, children }: CarouselProps) => {
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
      <CarouselTitle>{title}</CarouselTitle>
      <S.WrapperSlider>
        <CarouselArrow arrowDirection='left' handleScroll={() => handleScroll('left')} />
        <S.Slider ref={containerRef}>{children}</S.Slider>
        <CarouselArrow arrowDirection='right' handleScroll={() => handleScroll('right')} />
      </S.WrapperSlider>
    </S.Wrapper>
  )
}

export default Carousel
