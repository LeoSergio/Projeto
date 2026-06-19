import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Garante que toda navegação entre páginas (via React Router)
 * comece sempre do topo, evitando que a página abra "no meio"
 * com a posição de rolagem da página anterior.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}