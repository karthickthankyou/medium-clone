import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { EnhancedStore } from '@reduxjs/toolkit'
import { RootState, store as actualStore, useAppDispatch } from '../store'

export const renderWithProviders = (
  children: ReactElement,
  store: EnhancedStore<RootState> = actualStore,
  options = {}
) => render(<Provider store={store}>{children}</Provider>)

// export const getDispatch = () => {
//   const dispatch = useAppDispatch()
//   return dispatch
// }
