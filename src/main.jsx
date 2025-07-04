import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import './index.css'


createRoot(document.getElementById('root')).render(
  <>
  
    <CssBaseline />
    <App />
  </>
)