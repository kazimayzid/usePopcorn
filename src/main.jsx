import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StarRating from './StarRating.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating maxRating={6} color='green' size="100" className="test" defaultRating={3}/>
  </StrictMode>,
)
