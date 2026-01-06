import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyComponent /> */}
  </StrictMode>,
)
function MyComponent() {
  return (<div>
    <h1>This is my first component</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat aspernatur sed error vitae ullam, quibusdam a temporibus iste repudiandae ut earum beatae laborum quae voluptates pariatur, voluptate velit officia.</p>
  </div>)
}