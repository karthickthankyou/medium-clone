import React from 'react'
import { renderWithProviders } from 'src/utils/testUtils'
import Logo from './Logo'

describe('Logo Component', () => {
  test('should render', () => {
    renderWithProviders(<Logo />)
  })
})
