import * as S from './styles'

type NavBarProps = {
  children: React.ReactNode
}

const NavBar = ({ children }: NavBarProps) => <S.Wrapper>{children}</S.Wrapper>

export default NavBar
