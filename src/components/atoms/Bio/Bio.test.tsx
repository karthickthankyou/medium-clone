import React from 'react'
import { renderWithProviders } from 'src/utils/testUtils'
import Bio from './Bio'

describe('Bio Component', () => {
  test('should render', () => {
    renderWithProviders(
      <Bio author='Karthick' src='https://via.placeholder.com/150' />
    )
  })
})
