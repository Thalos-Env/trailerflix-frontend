import styled, { css } from 'styled-components'

type WrapperProps = {
  scrollBg: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, scrollBg }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    position: fixed;
    transition: ${theme.transition.default};
    background-color: ${scrollBg ? theme.colors.mainBg : theme.colors.mainBgOpacity};
    top: 0;
    left: 0;
    z-index: ${theme.layers.menu};
  `}
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
