import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// importing global css, vite deals with it
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // strict mode activates the strict js mode on app
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
