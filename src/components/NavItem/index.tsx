import * as S from './styles'
import Icon, { iconKeyType } from '../Icon'

export type NavItemProps = {
  children: string
  icon: iconKeyType
  onClick?: () => void
}

const NavItem = ({ children, icon, onClick }: NavItemProps) => (
  <S.Wrapper onClick={onClick}>
    <Icon icon={icon} />
    <span>{children}</span>
  </S.Wrapper>
)

export default NavItem
