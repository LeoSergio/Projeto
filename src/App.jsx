import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Curriculo from './pages/Curriculo'
import Portfolio from './pages/Portfolio'
import SobreMim from './pages/SobreMim'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<SobreMim />} />
      </Routes>
    </>
  )
}