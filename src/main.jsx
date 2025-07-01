import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/outfit'; // Defaults to 400 weight
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
