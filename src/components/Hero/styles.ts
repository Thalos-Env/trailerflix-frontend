import styled, { css } from 'styled-components'

type WrapperBgProps = {
  backgroundImageUrl: string
}

export const WrapperBg = styled.div<WrapperBgProps>`
  ${({ backgroundImageUrl }) => css`
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${backgroundImageUrl});
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: ${theme.spacings.large};
    padding-right: 50%;

    background: linear-gradient(to right, ${theme.colors.mainBg} 40%, transparent 70%);
    width: inherit;
    height: inherit;
  `}
`

export const MovieTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const MovieDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`
