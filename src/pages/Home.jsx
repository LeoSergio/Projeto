import { Link } from 'react-router-dom'
import { FileText, LayoutGrid, User, Rocket } from 'lucide-react'

const skills = ['HTML5','CSS3','JavaScript','Responsivo','Git','UI/UX']

const navCards = [
  { to: '/portfolio', title: 'Portfólio', desc: 'Projetos desenvolvidos e trabalhos realizados', icon: <LayoutGrid size={26} />, color: 'hover:border-teal-400/50', iconColor: 'text-teal-400' },
  { to: '/curriculo', title: 'Currículo', desc: 'Formação, experiências e habilidades técnicas', icon: <FileText size={26} />, color: 'hover:border-amber-400/50', iconColor: 'text-amber-400' },
  { to: '/sobre', title: 'Sobre Mim', desc: 'Minha história, interesses e objetivos', icon: <User size={26} />, color: 'hover:border-purple-400/50', iconColor: 'text-purple-400' },
  { to: 'https://www.rocketseat.com.br', title: 'Rocketseat', desc: 'Plataforma onde estou aprendendo programação', icon: <Rocket size={26} />, color: 'hover:border-orange-400/50', iconColor: 'text-orange-400', external: true },
]

const socials = [
  { href: 'https://github.com/LeoSergio', emoji: '🐙', label: 'GitHub' },
  { href: 'https://www.instagram.com/leandro.sergio.583/', emoji: '📸', label: 'Instagram' },
  { href: 'https://www.youtube.com/@leandrosergio6093/featured', emoji: '▶️', label: 'YouTube' },
  { href: 'https://linkedin.com', emoji: '💼', label: 'LinkedIn' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0] overflow-x-hidden">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed top-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-3xl pointer-events-none z-0 animate-float" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <header className="flex items-center justify-between pt-7 mb-16">
          <span className="font-mono text-sm text-teal-400 tracking-wide">&lt;LeoSergio /&gt;</span>
        </header>

        <section className="flex flex-col-reverse md:flex-row items-center gap-10 mb-14 animate-fade-up">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-teal-400/10 text-teal-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
              Disponível para projetos
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-none tracking-tight mb-3">
              Leandro<br /><span className="text-teal-400">Sergio</span>
            </h1>
            <p className="font-mono text-xs text-white/40 tracking-widest mb-4 uppercase">
              Desenvolvedor Web · Estudante Rocketseat
            </p>
            <p className="text-white/50 text-base leading-relaxed max-w-md mb-8">
              Apaixonado por criar interfaces modernas e funcionais. Focado em HTML, CSS e JavaScript, sempre aprendendo e evoluindo no ecossistema web.
            </p>
            <div className="flex gap-3 flex-wrap mb-8">
              <Link to="/curriculo" className="inline-flex items-center gap-2 bg-teal-400 text-[#0a0a0f] font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-85 transition-all hover:-translate-y-0.5">
                <FileText size={15} /> Ver Currículo
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 bg-transparent border border-white/15 text-white/80 font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-teal-400/60 hover:text-teal-400 transition-all hover:-translate-y-0.5">
                <LayoutGrid size={15} /> Portfólio
              </Link>
            </div>
            <div className="flex gap-1">
              {socials.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-white/40 border border-transparent hover:text-teal-400 hover:bg-white/5 hover:border-white/10 transition-all hover:-translate-y-0.5 text-lg">
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48">
              <div className="absolute inset-[-8px] rounded-full border-2 border-teal-400/40 animate-spin-slow" />
              <img src="/perfil-dark.png" alt="Leandro Sergio"
                className="w-48 h-48 rounded-full object-cover border-2 border-white/10 relative z-10" />
              <span className="absolute bottom-2 right-2 w-10 h-10 bg-[#0a0a0f] border border-white/10 rounded-full flex items-center justify-center text-xl z-20">💻</span>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-2.5 mb-16">
          {skills.map(s => (
            <span key={s} className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/50 hover:border-teal-400/50 hover:text-teal-400 hover:bg-teal-400/5 transition-all cursor-default">
              {s}
            </span>
          ))}
        </section>

        <section>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-5">Explore</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {navCards.map(card => {
              const Wrapper = card.external ? 'a' : Link
              const props = card.external ? { href: card.to, target: '_blank', rel: 'noreferrer' } : { to: card.to }
              return (
                <Wrapper key={card.title} {...props}
                  className={`flex items-center gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white no-underline transition-all hover:-translate-y-1 ${card.color}`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 flex-shrink-0 ${card.iconColor}`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-base">{card.title}</p>
                    <p className="text-sm text-white/40 leading-snug">{card.desc}</p>
                  </div>
                  <span className="text-white/30 text-lg">→</span>
                </Wrapper>
              )
            })}
          </div>
        </section>

        <footer className="mt-16 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-white/30 font-mono">
          <span>Desenvolvido por <strong className="text-white/60">Leandro Sergio</strong></span>
          <span className="text-white/10">·</span>
          <span>Trilha Rocketseat</span>
        </footer>
      </div>
    </div>
  )
}
