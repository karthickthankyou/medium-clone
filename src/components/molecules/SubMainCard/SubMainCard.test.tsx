import React from 'react'
import { renderWithProviders } from 'src/utils/testUtils'
import SubMainCard from './SubMainCard'

describe('SubMainCard Component', () => {
  test('should render', () => {
    renderWithProviders(
      <SubMainCard title='Hello' src='https://via.placeholder.com/150' />
    )
  })
})
