import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.mainBg};
  `}
`
