import styled, { DefaultTheme, css } from 'styled-components'

type WrapperProps = {
  variant: 'good' | 'bad' | 'new'
}

const wrapperModifiers = {
  good: (theme: DefaultTheme) => css`
    color: ${theme.colors.badge.blueText};
    background-color: ${theme.colors.badge.blueBg};
  `,
  bad: (theme: DefaultTheme) => css`
    color: ${theme.colors.badge.yellowText};
    background-color: ${theme.colors.badge.yellowBg};
  `,
  new: (theme: DefaultTheme) => css`
    color: ${theme.colors.badge.greenText};
    background-color: ${theme.colors.badge.greenBg};
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};

    border-radius: ${theme.border.radius.small};
    padding: 0.2rem ${theme.spacings.xxsmall};
    width: fit-content;

    ${wrapperModifiers[variant](theme)}
  `}
`
