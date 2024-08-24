import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './Providers/Router.tsx'
import './Layouts/Root.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
