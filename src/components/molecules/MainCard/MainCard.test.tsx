import React from 'react'
import { render } from '@testing-library/react'
import { renderWithProviders } from 'src/utils/testUtils'
import MainCard from './MainCard'

describe('MainCard Component', () => {
  test('should render', () => {
    renderWithProviders(
      <MainCard title='' desc='' src='https://via.placeholder.com/150' />
    )
  })
})
