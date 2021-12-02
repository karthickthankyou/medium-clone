import React from 'react'
import { render } from '@testing-library/react'
import AuthorCard from './AuthorCard'

describe('AuthorCard Component', () => {
  test('should render', () => {
    render(
      <AuthorCard
        displayName='hello'
        about='hello'
        src='https://via.placeholder.com/150'
      />
    )
  })
})
