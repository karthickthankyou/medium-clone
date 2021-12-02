import React from 'react'
import { render } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar Component', () => {
  test('should render', () => {
    render(<Avatar size='sm' src='https://via.placeholder.com/150' />)
  })
})
