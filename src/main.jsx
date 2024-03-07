import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import ReactGA from "react-ga4"


ReactGA.initialize(import.meta.env.VITE_TRACK)
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>,
)
