// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Provider } from 'react-redux'
import ReduxThunk from './Components/ReduxThunk'
import { store } from './Store/store'


export default function App() {
  return (
  <>
  <Provider store={store}>
    <ReduxThunk/>
  </Provider>
  </>
  )
}
