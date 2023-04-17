import Icon from '../Icon'
import * as S from './styles'

type CarouselArrowProps = {
  arrowDirection: 'left' | 'right'
  handleScroll: () => void
}

const CarouselArrow = ({ arrowDirection, handleScroll }: CarouselArrowProps) => (
  <S.Wrapper position={arrowDirection}>
    <Icon
      icon={arrowDirection === 'left' ? 'arrowLeft' : 'arrowRight'}
      sizeRem='5rem'
      onClick={handleScroll}
    />
  </S.Wrapper>
)

export default CarouselArrow
