import styled, { css } from 'styled-components'

type SvgContainerProps = {
  color: 'primary' | 'secondary' | 'white'
  sizeRem?: string
}

export const SvgContainer = styled.div<SvgContainerProps>`
  ${({ theme, color, sizeRem }) => css`
    width: ${sizeRem ? sizeRem : theme.icons.sizes.onlyIcon};
    color: ${theme.colors[color]};
  `}
`
