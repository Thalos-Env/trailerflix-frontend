import * as S from './styles'

type BagdeProps = {
  variant: 'good' | 'bad' | 'new'
}

const bagdeText = (variant: string) => {
  switch (variant) {
    case 'bad':
      return 'Enganou bem'
    case 'new':
      return 'Novo'
    default:
      return '10/10'
  }
}

const Bagde = ({ variant }: BagdeProps) => (
  <S.Wrapper variant={variant}>{bagdeText(variant)}</S.Wrapper>
)

export default Bagde
