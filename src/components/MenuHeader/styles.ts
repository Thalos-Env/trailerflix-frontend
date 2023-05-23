import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    position: fixed;
    background-color: ${theme.colors.mainBg};
    top: 0;
    left: 0;
    z-index: ${theme.layers.menu};
  `}
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
