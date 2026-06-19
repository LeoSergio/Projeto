import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { GitFork,   Phone, Mail, FileText } from 'lucide-react'

const journey = [
  { icon: '🏫', year: 'Até 2022', title: 'Experiência em Atendimento', desc: 'Seis anos no Quiosque Jardim, acumulando responsabilidades em atendimento, operações e gestão. Uma escola prática de vida profissional.' },
  { icon: '🎓', year: '2023', title: 'Ingresso na UFRN — Sistemas de Informação', desc: 'Início da graduação, mergulhando em algoritmos, lógica de programação, banco de dados e engenharia de software.' },
  { icon: '🚀', year: '2023', title: 'Trilha Full Stack — Rocketseat', desc: 'Formação paralela focada em desenvolvimento web: HTML, CSS, JavaScript e projetos reais publicados no GitHub.' },
  { icon: '⚡', year: 'Hoje', title: 'Desenvolvendo projetos & buscando oportunidades', desc: 'Construindo portfólio, evoluindo em JavaScript e aberto à primeira oportunidade profissional em tecnologia.' },
]

const values = [
  { icon: '🎯', title: 'Foco em Qualidade', desc: 'Prefiro fazer menos e fazer bem. Código limpo, interfaces acessíveis e atenção aos detalhes.' },
  { icon: '📚', title: 'Aprendizado Contínuo', desc: 'Tecnologia evolui rápido. Me mantenho atualizado e encaro cada desafio como oportunidade de crescer.' },
  { icon: '🤝', title: 'Colaboração', desc: 'Acredito que os melhores resultados vêm do trabalho em equipe e da troca constante de conhecimento.' },
  { icon: '🚀', title: 'Ambição com Propósito', desc: 'Quero construir coisas que gerem valor real para pessoas — não apenas código que funciona, mas soluções que importam.' },
]

const hobbies = [
  { icon: '🎮', title: 'Games', sub: 'Estratégia e RPG' },
  { icon: '🎬', title: 'Filmes & Séries', sub: 'Ficção científica' },
  { icon: '🎵', title: 'Música', sub: 'Trilhas e eletrônica' },
  { icon: '⚽', title: 'Futebol', sub: 'Jogar e assistir' },
  { icon: '🚴', title: 'Ciclismo', sub: 'Pedaladas ao ar livre' },
  { icon: '💻', title: 'Open Source', sub: 'Explorar e contribuir' },
]

const goals = [
  'Dominar JavaScript moderno (ES6+)',
  'Aprender React e Node.js',
  'Primeira oportunidade profissional em tech',
  'Contribuir com projetos open source',
  'Alcançar nível sênior como dev Full Stack',
]

const contacts = [
  { href: 'https://bit.ly/45W4bCS', icon: <Phone size={14}/>, label: 'WhatsApp' },
  { href: 'mailto:leosergio.583@gmail.com', icon: <Mail size={14}/>, label: 'E-mail' },
  { href: 'https://github.com/LeoSergio', icon: <GitFork size={14}/>, label: 'GitHub' },
  { href: 'https://www.instagram.com/leandro.sergio.583/', icon: <Phone size={14}/>, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: <Mail size={14}/>, label: 'LinkedIn' },
]

const facts = [
  ['Idade', '24 anos'],
  ['Localização', 'Caicó, RN'],
  ['Graduação', 'UFRN — SI'],
  ['Foco atual', 'JavaScript'],
]

function Card({ icon, title, children }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 mb-5">
      <h2 className="flex items-center gap-3 font-display text-xl text-white mb-6">
        <span className="w-9 h-9 bg-blue-500/15 text-blue-400 rounded-xl flex items-center justify-center text-base flex-shrink-0">{icon}</span>
        {title}
        <span className="flex-1 h-px bg-white/10" />
      </h2>
      {children}
    </div>
  )
}

export default function SobreMim() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0]">
      <Navbar />

      {/* Hero banner */}
      <div className="relative bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-[-100px] right-[-100px] w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center">
          <img src="/perfil-dark.png" alt="Leandro Sergio"
            className="w-28 h-28 rounded-full border-2 border-blue-500 object-cover mx-auto mb-5" />
          <h1 className="font-display font-extrabold text-4xl text-white mb-2">Leandro Sérgio</h1>
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-blue-400 mb-5">Dev Web · UFRN</p>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Estudante apaixonado por tecnologia, construindo uma carreira sólida em desenvolvimento web e análise de dados — um projeto de cada vez.
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            <Link to="/curriculo" className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-400 transition-colors no-underline">
              <FileText size={14}/> Ver Currículo
            </Link>
            <a href="https://github.com/LeoSergio" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-white/40 hover:text-white transition-all no-underline">
              <GitFork size={14}/> GitHub
            </a>
            <a href="https://bit.ly/45W4bCS" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-white/40 hover:text-white transition-all no-underline">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">

        {/* Main */}
        <div>
          <Card icon="👤" title="Quem sou eu">
            <div className="space-y-4 text-[15px] text-white/50 leading-relaxed">
              <p>Olá! Sou <strong className="text-white">Leandro Sérgio da Silva</strong>, 24 anos, natural de Caicó/RN. Sou estudante de <strong className="text-white">Sistemas de Informação na UFRN</strong> e desenvolvedor web em formação, com foco em criar interfaces funcionais e com boa experiência para o usuário.</p>
              <p>Minha jornada na tecnologia começou por curiosidade e evoluiu para uma vocação. Hoje estudo ativamente <strong className="text-white">HTML, CSS e JavaScript</strong>, além de explorar Python e C em projetos acadêmicos. Estou na trilha Full Stack da <strong className="text-white">Rocketseat</strong>, onde consolido minha base técnica com projetos práticos.</p>
              <p>Antes de entrar na área de tecnologia, trabalhei por <strong className="text-white">6 anos no setor de atendimento</strong>, desenvolvendo habilidades em comunicação, liderança, gestão de tempo e resolução de problemas sob pressão.</p>
              <p>Meu objetivo é me tornar um desenvolvedor Full Stack, contribuir com projetos de impacto real e, futuramente, alcançar o nível sênior na área.</p>
            </div>
          </Card>

          <Card icon="💡" title="O que me move">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map(v => (
                <div key={v.title} className="border border-white/10 rounded-xl p-5 hover:border-blue-400/40 hover:bg-blue-500/5 transition-all">
                  <span className="text-2xl block mb-3">{v.icon}</span>
                  <h3 className="font-semibold text-white text-sm mb-2">{v.title}</h3>
                  <p className="text-[13px] text-white/40 leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card icon="🗺️" title="Minha Jornada">
            {journey.map((j, i) => (
              <div key={j.title} className={`flex gap-4 ${i < journey.length - 1 ? 'mb-6' : ''} relative`}>
                {i < journey.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-[-14px] w-0.5 bg-white/10" />
                )}
                <div className="w-10 h-10 bg-blue-500/15 border border-blue-500/30 rounded-full flex items-center justify-center text-base flex-shrink-0 z-10">{j.icon}</div>
                <div className="pt-1">
                  <p className="font-mono text-[11px] text-blue-400 font-bold mb-1">{j.year}</p>
                  <p className="text-white font-semibold text-sm mb-1">{j.title}</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">{j.desc}</p>
                </div>
              </div>
            ))}
          </Card>

          <Card icon="🎮" title="Interesses & Hobbies">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {hobbies.map(h => (
                <div key={h.title} className="border border-white/10 rounded-xl p-5 text-center hover:border-blue-400/40 hover:bg-blue-500/5 hover:-translate-y-1 transition-all cursor-default">
                  <span className="text-3xl block mb-2">{h.icon}</span>
                  <p className="font-semibold text-white text-sm mb-0.5">{h.title}</p>
                  <p className="text-[11px] text-white/30">{h.sub}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-20 space-y-4">

          {/* Contato */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">Entre em Contato</p>
            {contacts.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 p-3 border border-white/10 rounded-xl text-white/50 text-sm font-medium hover:border-blue-400/40 hover:text-blue-400 hover:bg-blue-500/5 transition-all no-underline mb-2 last:mb-0">
                <span className="w-8 h-8 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>

          {/* Dados rápidos */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">Dados Rápidos</p>
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between items-center py-2.5 border-b border-white/[0.06] last:border-0 last:pb-0 text-sm">
                <span className="text-white/30">{k}</span>
                <span className="text-white font-semibold">{v}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2.5 text-sm">
              <span className="text-white/30">Disponível</span>
              <span className="text-emerald-400 font-semibold">✔ Sim</span>
            </div>
          </div>

          {/* Metas */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">Próximos Objetivos</p>
            {goals.map((g, i) => (
              <div key={g} className="flex items-start gap-2.5 mb-3 last:mb-0 text-[13px] text-white/50">
                <span className="w-5 h-5 bg-blue-500/15 text-blue-400 text-[10px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                {g}
              </div>
            ))}
          </div>

        </div>
      </div>

      <footer className="border-t border-white/10 py-7 text-center text-sm text-white/25 font-mono">
        Desenvolvido por <a href="/" className="text-blue-400 no-underline">Leandro Sergio</a> · Trilha Rocketseat
      </footer>
    </div>
  )
}
