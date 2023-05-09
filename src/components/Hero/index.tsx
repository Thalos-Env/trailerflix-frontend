import * as S from './styles'
import Button from '../Button'
import Icon from '../Icon'

type HeroProps = {
  title: string
  description: string
  onClickPlay: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClickInfo: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClickAdd: (event: React.MouseEvent<HTMLButtonElement>) => void
  backgroundImageUrl: string
}

const Hero = ({
  title,
  description,
  onClickPlay,
  onClickInfo,
  onClickAdd,
  backgroundImageUrl,
}: HeroProps) => (
  <S.WrapperBg backgroundImageUrl={backgroundImageUrl}>
    <S.Wrapper>
      <S.MovieTitle>{title}</S.MovieTitle>
      <S.MovieDescription>{description}</S.MovieDescription>
      <S.ButtonGroup>
        <Button icon={<Icon icon='play' />} variant='white' onClick={() => onClickPlay}>
          Ver agora
        </Button>
        <Button icon={<Icon icon='info' />} variant='outline' onClick={() => onClickInfo}>
          Mais informações
        </Button>
        <Button icon={<Icon icon='add' />} onClick={() => onClickAdd} />
      </S.ButtonGroup>
    </S.Wrapper>
  </S.WrapperBg>
)

export default Hero
