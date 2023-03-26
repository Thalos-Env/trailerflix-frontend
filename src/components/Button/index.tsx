import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  variant?: 'primary' | 'white' | 'outline'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    variant={variant}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    onlyIcon={!!icon && !children}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
