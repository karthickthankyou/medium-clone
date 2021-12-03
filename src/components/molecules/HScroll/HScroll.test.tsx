import React from 'react'
import { render } from '@testing-library/react'
import HScroll from './HScroll'

describe('HScroll Component', () => {
  test('should render', () => {
    render(<HScroll>{[]}</HScroll>)
  })
})
