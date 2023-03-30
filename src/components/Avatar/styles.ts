import styled, { css } from 'styled-components'

export const Wrapper = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.xxlarge};
    border-radius: ${theme.border.radius.circle};
    border: ${theme.border.size.medium} solid ${theme.colors.avatar.cyan};
  `}
`
