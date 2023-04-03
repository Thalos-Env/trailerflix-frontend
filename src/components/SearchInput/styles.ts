import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: ${theme.border.size.small} solid ${theme.border.colors.whiteTransparent};
    border-radius: ${theme.border.radius.small};
    max-width: max-content;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0 ${theme.spacings.xxsmall};
    border: 0;

    &:focus {
      outline: none;
    }
  `}
`
