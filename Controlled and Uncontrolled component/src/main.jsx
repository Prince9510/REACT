import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Controlled from './Component/Controlled.jsx'
import UnControlled from './Component/UnControlled.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Controlled/>
    <UnControlled/>
  </StrictMode>,
)
