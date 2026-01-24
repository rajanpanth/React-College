import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home, { Greeting } from './Home.jsx'
import { Third } from './Home.jsx'
import EventHandling from './eventHandling/EventHandling.jsx'
import Profile from './pages/Profile.jsx'
import DaySix from './Day-6/DaySix.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home></Home>
      <Third /> */}
    <Profile name="rajan" age={20} address={"kathmandu"} />
    <EventHandling />
    <Greeting name="Rajan" last="Pantha"></Greeting>
    <DaySix />

  </StrictMode>,
)
