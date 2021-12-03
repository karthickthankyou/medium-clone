import React from 'react'
import Badge from './Badge'
import { renderWithProviders } from 'src/utils/testUtils'

describe('Badge Component', () => {
  test('should render', () => {
    renderWithProviders(<Badge displayText='Hello' />)
  })
})
