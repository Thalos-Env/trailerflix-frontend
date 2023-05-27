import styled, { css } from 'styled-components'

type WrapperProps = {
  position: 'left' | 'right'
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, position }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.hoverOutline};
    height: 26rem;
    width: 2.4rem;
    cursor: pointer;
    opacity: 0.5;
    transition: ${theme.transition.fast};
    position: absolute;

    ${position === 'left' ? 'left: 0;' : 'right: 0;'}

    &:hover {
      opacity: 1;
    }
  `}
`
