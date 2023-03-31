import * as S from './styles'

export type NavItemProps = {
  children: string
  icon: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const NavItem = ({ children, icon, onClick }: NavItemProps) => (
  <S.Wrapper onClick={onClick}>
    {!!icon && icon}
    <span>{children}</span>
  </S.Wrapper>
)

export default NavItem
