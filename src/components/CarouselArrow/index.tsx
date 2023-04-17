import Icon from '../Icon'
import * as S from './styles'

type CarouselArrowProps = {
  arrowDirection: 'left' | 'right'
  handleScroll: () => void
}

const CarouselArrow = ({ arrowDirection, handleScroll }: CarouselArrowProps) => (
  <S.Wrapper position={arrowDirection} onClick={handleScroll}>
    <Icon icon={arrowDirection === 'left' ? 'arrowLeft' : 'arrowRight'} sizeRem='5rem' />
  </S.Wrapper>
)

export default CarouselArrow
