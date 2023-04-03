import styled, { css, DefaultTheme } from 'styled-components'
import { IconProps } from '.'

type SvgContainerProps = {
  cursorPointer?: boolean
} & Pick<IconProps, 'color' | 'sizeRem'>

const iconModifiers = {
  cursorOn: (theme: DefaultTheme) => css`
    cursor: pointer;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `,
}

export const SvgContainer = styled.div<SvgContainerProps>`
  ${({ theme, color = 'white', sizeRem, cursorPointer }) => css`
    display: flex;
    align-items: center;
    width: ${sizeRem ? sizeRem : theme.icons.sizes.widthDefault};
    height: ${sizeRem ? sizeRem : theme.icons.sizes.widthDefault};
    color: ${theme.colors[color]};
    transition: ${theme.transition.default};

    ${cursorPointer && iconModifiers.cursorOn(theme)}
  `}
`
