import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.xxsmall} ${theme.spacings.small};
    background-color: transparent;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    transition: ${theme.transition.fast};
    text-transform: capitalize;
    border: 0;
    cursor: pointer;

    div {
      color: ${theme.colors.white};
      transition: ${theme.transition.fast};
      width: ${theme.spacings.small};
      height: ${theme.spacings.small};
    }

    // TODO: variable to padding-top
    span {
      padding-top: 0.6rem;
    }

    div + span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:hover {
      color: ${theme.colors.secondary};

      div {
        color: ${theme.colors.secondary};
      }
    }
  `}
`
