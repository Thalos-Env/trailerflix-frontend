import * as S from './styles'
import Button from '../Button'
import Icon from '../Icon'

const Hero = () => (
  <S.Wrapper>
    <S.MovieTitle>Movie Title</S.MovieTitle>
    <S.MovieDescription>Description</S.MovieDescription>
    <S.ButtonGroup>
      <Button icon={<Icon icon='play' />} variant='white'>
        Ver agora
      </Button>
      <Button icon={<Icon icon='info' />} variant='outline'>
        Mais informações
      </Button>
      <Button icon={<Icon icon='add' />} />
    </S.ButtonGroup>
  </S.Wrapper>
)

export default Hero
