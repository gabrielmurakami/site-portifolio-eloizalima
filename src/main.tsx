import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootEl = document.getElementById('root')!
console.log('Mounting React app (static import)')
createRoot(rootEl).render(<App />)
