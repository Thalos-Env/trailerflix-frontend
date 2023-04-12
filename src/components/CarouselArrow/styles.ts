import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.hoverOutline};
    height: 13.6rem;
    width: 2.4rem;
    cursor: pointer;
    opacity: 0.5;
    transition: ${theme.transition.fast};

    &:hover {
      opacity: 1;
    }
  `}
`
