/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import MoneyManager from './Components/MoneyManager'
import { store } from './Store/Store'

export default function App() {
    return (
        <Provider store={store}>  {/* Pass the store as a prop */}
            <MoneyManager />
        </Provider>
    )
}
