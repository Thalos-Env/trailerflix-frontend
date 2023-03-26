import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
  onlyIcon?: boolean
} & Pick<ButtonProps, 'variant' | 'fullWidth'>

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.hoverPrimary};
    }
  `,
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    &:hover {
      background: ${theme.colors.hoverWhite};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.white};
    border: ${theme.border.size.medium} solid ${theme.colors.white};
    padding: calc(${theme.spacings.xsmall} - ${theme.border.size.small})
      calc(${theme.spacings.small} - ${theme.border.size.small});

    &:hover {
      background: ${theme.colors.hoverOutline};
    }
  `,
  fullWidth: () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-items: center;

    svg {
      width: ${theme.icons.sizes.widthDefault};

      & + span {
        margin-left: ${theme.spacings.xsmall};
      }
    }
  `,
  onlyIcon: (theme: DefaultTheme) => css`
    width: ${theme.icons.sizes.onlyIcon};
    height: ${theme.icons.sizes.onlyIcon};
    padding: ${theme.icons.sizes.paddingIcon};
    border-radius: ${theme.border.radius.circle};
  `,
  onlyIconOutline: (theme: DefaultTheme) => css`
    width: ${theme.icons.sizes.onlyIcon};
    height: ${theme.icons.sizes.onlyIcon};
    padding: calc(${theme.icons.sizes.paddingIcon} - ${theme.border.size.small});
    border-radius: ${theme.border.radius.circle};
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, hasIcon, fullWidth, onlyIcon }) => css`
    display: inline-flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius.small};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    letter-spacing: ${theme.font.letterSpacing};
    transition: ${theme.transition.default};
    text-transform: uppercase;
    cursor: pointer;
    border: 0;

    ${!!variant && wrapperModifiers[variant](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${hasIcon && !onlyIcon && wrapperModifiers.withIcon(theme)}
    ${onlyIcon && wrapperModifiers.onlyIcon(theme)}
    ${onlyIcon && variant === 'outline' && wrapperModifiers.onlyIconOutline(theme)}
  `}
`
