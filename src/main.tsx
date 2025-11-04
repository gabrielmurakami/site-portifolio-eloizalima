import { createRoot } from 'react-dom/client'
import './index.css'

const rootEl = document.getElementById('root')!
rootEl.innerHTML = '<div style="color:#fff;padding:12px;font-family:Inter,system-ui,sans-serif">Carregando…</div>'

import('./App')
  .then(({ default: App }) => {
    console.log('App module loaded')
    createRoot(rootEl).render(<App />)
  })
  .catch((err) => {
    console.error('Failed to load App:', err)
    rootEl.innerHTML = `<pre style="white-space:pre-wrap;color:#fff;padding:16px">Erro ao carregar o app: ${String(err)}</pre>`
  })

