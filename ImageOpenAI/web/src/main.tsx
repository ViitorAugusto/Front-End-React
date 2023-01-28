import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter}  from'react-router-dom'
import  from './App.styles';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
   
    <App />
    
    </BrowserRouter>
  </React.StrictMode>,
)
