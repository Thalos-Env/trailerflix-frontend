import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render the primary color by default', () => {
    renderWithTheme(<Button>Continue</Button>)

    const buttonSelected = screen.getByRole('button', { name: /continue/i })

    expect(buttonSelected).toHaveStyle({
      background: '#1570EF',
    })
  })
})
