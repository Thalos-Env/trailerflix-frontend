import styled, { css } from 'styled-components'

type WrapperProps = {
  direction?: 'horizontal' | 'vertical'
}

const wrapperModifiers = {
  horizontal: () => css`
    width: 24rem;
    height: 14rem;
  `,
  vertical: () => css`
    width: 14rem;
    height: 24rem;
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, direction }) => css`
    background: ${theme.colors.cardBg};
    border-radius: ${theme.border.radius.medium};
    border: ${theme.border.size.small} solid ${theme.border.colors.whiteTransparent};

    ${!!direction && wrapperModifiers[direction]()}
  `}
`
