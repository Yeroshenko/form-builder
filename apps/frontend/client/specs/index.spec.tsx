import React from 'react'
import { testingUtils } from '@utils'

import IndexPage from '../pages/index'

describe('Index page', () => {
  it('should render successfully', () => {
    const { baseElement } = testingUtils.render(<IndexPage />)
    expect(baseElement).toBeTruthy()
  })
})
