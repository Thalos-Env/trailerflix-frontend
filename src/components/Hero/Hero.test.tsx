import { render, screen } from '@testing-library/react'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { name: /Hero/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
