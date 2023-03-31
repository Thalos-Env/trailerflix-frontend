import styled, { css } from 'styled-components'

type SvgContainerProps = {
  color: 'primary' | 'secondary' | 'white' | 'black'
  sizeRem?: string
}

export const SvgContainer = styled.div<SvgContainerProps>`
  ${({ theme, color, sizeRem }) => css`
    display: flex;
    align-items: center;
    width: ${sizeRem ? sizeRem : theme.icons.sizes.widthDefault};
    height: ${sizeRem ? sizeRem : theme.icons.sizes.widthDefault};
    color: ${theme.colors[color]};
  `}
`
