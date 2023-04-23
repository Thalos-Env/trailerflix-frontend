import * as S from './styles'

type CarouselTitleProps = {
  children: string
}

const CarouselTitle = ({ children }: CarouselTitleProps) => <S.Wrapper>{children}</S.Wrapper>

export default CarouselTitle
