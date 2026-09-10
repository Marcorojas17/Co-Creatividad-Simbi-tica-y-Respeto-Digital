cat > apps/web/src/pages/index.tsx <<'TSX'
import LegacySelector from './LegacySelector'

export default function Home() {
  return <LegacySelector />
}
TSX

# Si tu index está en App.tsx en vez de pages/index.tsx, haz esto también:
cat > apps/web/src/App.tsx <<'TSX'
import LegacySelector from './pages/LegacySelector'

export default function App() {
  return <LegacySelector />
}
TSX

# Y asegúrate que main.tsx apunte bien:
cat > apps/web/src/main.tsx <<'TSX'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
TSX

pnpm --filter @kronos/web run dev
# press o + enter
