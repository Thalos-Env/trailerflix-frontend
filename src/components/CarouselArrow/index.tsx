import Icon from '../Icon'
import * as S from './styles'

type CarouselArrowProps = {
  arrowDirection: 'left' | 'right'
}

const CarouselArrow = ({ arrowDirection }: CarouselArrowProps) => (
  <S.Wrapper>
    <Icon icon={arrowDirection === 'left' ? 'arrowLeft' : 'arrowRight'} sizeRem='5rem' />
  </S.Wrapper>
)

export default CarouselArrow
