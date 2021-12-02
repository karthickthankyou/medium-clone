import React from 'react'
import { render } from '@testing-library/react'
import CardFooter from './CardFooter'

describe('CardFooter Component', () => {
  test('should render', () => {
    render(<CardFooter publishDate='Hello' readDuration={12} />)
  })
})
