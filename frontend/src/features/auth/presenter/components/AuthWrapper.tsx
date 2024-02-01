'use client'

import { Provider } from 'react-redux'
import { store } from '../../frameworks/redux'

export default function AuthWrapper({ children }: { children: React.ReactNode }) {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
