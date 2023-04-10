import * as S from './styles'

type MovieCardProps = {
  children?: React.ReactNode
  direction?: 'horizontal' | 'vertical'
}

const MovieCard = ({ children, direction = 'horizontal' }: MovieCardProps) => (
  <S.Wrapper direction={direction}>{children}</S.Wrapper>
)

export default MovieCard
