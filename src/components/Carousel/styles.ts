import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const WrapperSlider = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
`

export const Slider = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: hidden;
`
