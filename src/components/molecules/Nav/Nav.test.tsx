import React from 'react'
import { renderWithProviders } from 'src/utils/testUtils'
import Nav from './Nav'

describe('Nav Component', () => {
  test('should render', () => {
    renderWithProviders(<Nav />)
  })
})
