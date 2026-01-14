import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import First from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home></Home>
    <First></First>
  </StrictMode>,
)
