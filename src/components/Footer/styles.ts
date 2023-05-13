import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.mainDarkBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.medium} 0;
    gap: ${theme.spacings.xsmall};
  `}
`

export const MenuFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`

export const AllRightsReserved = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
