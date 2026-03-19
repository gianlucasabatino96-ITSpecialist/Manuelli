import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/privacy-policy.tsx'
import { CookiePolicy } from './pages/cookie-policy.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookie" element={<CookiePolicy />} />
    </Routes>
  )
}

export default App
