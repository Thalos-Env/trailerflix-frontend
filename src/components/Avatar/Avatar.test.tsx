import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Avatar from '.'

describe('<Avatar />', () => {
  it('should render the image', () => {
    renderWithTheme(<Avatar src='image.jpg' alt='Imagem do usuário' />)

    expect(screen.getByRole('img', { name: /imagem do usuário/i })).toHaveAttribute(
      'src',
      'image.jpg',
    )
  })

  it('should render the image with cyan border by default', () => {
    renderWithTheme(<Avatar src='image.jpg' alt='Imagem do usuário' />)
    const avatarSelected = screen.getByRole('img', { name: /imagem do usuário/i })

    expect(avatarSelected).toHaveStyle({
      border: '0.2rem solid #14EBF9',
    })
  })
})
