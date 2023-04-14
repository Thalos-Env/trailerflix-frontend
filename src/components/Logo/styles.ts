import styled, { css } from 'styled-components'
import { LogoProps } from '.'

// TODO: adjust the size of the logo and props
const wrapperModifiers = {
  normal: () => css`
    width: 20rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    cursor: pointer;
    ${!!size && wrapperModifiers[size]}
  `}
`
