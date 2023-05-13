import Logo from '../Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo />
    <S.MenuFooter>
      <S.Link href='#'>Home</S.Link>
      <S.Link href='#'>Sobre</S.Link>
      <S.Link href='#'>Políticas de Privacidade</S.Link>
    </S.MenuFooter>
    <S.AllRightsReserved>@ Generics - Todos os direitos reservados</S.AllRightsReserved>
  </S.Wrapper>
)

export default Footer
