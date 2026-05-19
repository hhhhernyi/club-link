import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import AppWithTheme from './AppWithTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithTheme />
  </StrictMode>,
)