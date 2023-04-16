import * as S from './styles'

type MovieCardProps = {
  children?: React.ReactNode
  direction?: 'horizontal' | 'vertical'
}

const MovieCard = ({ children, direction = 'vertical' }: MovieCardProps) => (
  <S.Wrapper direction={direction}>{children}</S.Wrapper>
)

export default MovieCard
