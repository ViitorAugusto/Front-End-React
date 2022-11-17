import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Cardapio } from './pages/Cardapio'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
)
