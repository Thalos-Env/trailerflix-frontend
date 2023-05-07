import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const MovieTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const MovieDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
