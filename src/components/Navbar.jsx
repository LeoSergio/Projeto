import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: '🏠 Home' },
  { to: '/curriculo', label: '📄 Currículo' },
  { to: '/portfolio', label: '💼 Portfólio' },
  { to: '/sobre', label: '👤 Sobre Mim' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <nav className="sticky top-0 z-50 bg-[#0d0d15]/90 backdrop-blur border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-2 sm:px-6">
        <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar py-2.5">
          {links.map((link, i) => (
            <span key={link.to} className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
              {i > 0 && (
                <span className="text-white/20 text-base sm:text-lg select-none px-0.5 sm:px-1 flex-shrink-0">
                  ›
                </span>
              )}
              <Link
                to={link.to}
                className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  pathname === link.to
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}