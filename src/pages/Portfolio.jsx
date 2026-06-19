import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Globe, Download, GitFork, Clock } from 'lucide-react'

const projects = [
  {
    cat: ['web','mobile'],
    status: 'live',
    emoji: '📊',
    title: 'Controle Financeiro',
    desc: 'Aplicação completa para controle de receitas e despesas pessoais. Dashboard por categoria, gráfico de evolução, exportação para Google Sheets e funcionamento 100% offline como PWA.',
    tags: ['HTML','CSS','JavaScript','PWA','LocalStorage'],
    featured: true,
    links: { web: 'https://leosergio.github.io/mMyFinance/', apk: 'https://leosergio.github.io/mMyFinance/', github: 'https://github.com/LeoSergio/mMyFinance' },
  },
  {
    cat: ['web'],
    status: 'live',
    emoji: '🧑‍💻',
    title: 'Site Pessoal',
    desc: 'Portfólio pessoal com design moderno, tema claro/escuro, seção de currículo e links sociais. Totalmente responsivo e sem frameworks.',
    tags: ['HTML','CSS','JavaScript','Responsivo'],
    links: { web: 'https://leosergio.github.io/Projeto', github: 'https://github.com/LeoSergio' },
  },
  {
    cat: ['web','mobile','em-breve'],
    status: 'soon',
    emoji: '✅',
    title: 'Gestor de Tarefas',
    desc: 'App de produtividade com listas, prioridades, datas de vencimento e modo foco. Sincronização offline e notificações.',
    tags: ['JavaScript','PWA','IndexedDB'],
  },
  {
    cat: ['web','em-breve'],
    status: 'soon',
    emoji: '🌤️',
    title: 'App de Clima',
    desc: 'Previsão do tempo com geolocalização, animações por condição climática e histórico de cidades consultadas.',
    tags: ['API REST','Geolocation','CSS Animations'],
  },
  {
    cat: ['mobile','em-breve'],
    status: 'concept',
    emoji: '💡',
    title: 'Tem uma ideia?',
    desc: 'Aceito sugestões de projetos e colaborações. Se tiver uma ideia de app que resolve um problema real, entre em contato.',
    tags: ['Colaboração','Open Source'],
    links: { mail: 'mailto:leosergio.583@gmail.com' },
  },
]

const filters = [
  { key: 'todos', label: 'Todos' },
  { key: 'web', label: 'Web App' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'em-breve', label: 'Em breve' },
]

const statusBadge = {
  live: <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">● AO VIVO</span>,
  soon: <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">EM BREVE</span>,
  concept: <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">CONCEITO</span>,
}

export default function Portfolio() {
  const [active, setActive] = useState('todos')

  const visible = projects.filter(p =>
    active === 'todos' || p.cat.includes(active)
  )

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-5 pb-20">

        {/* Hero */}
        <section className="py-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/40 mb-6">
            🏪 App Store pessoal
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-4">
            Meus <em className="not-italic text-teal-400">projetos</em>,<br/>sua experiência.
          </h1>
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
            Aplicações web e mobile desenvolvidas com foco em usabilidade e design moderno. Todos de código aberto.
          </p>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[['2','APPS PUBLICADOS'],['3+','EM DESENVOLVIMENTO'],['100%','OPEN SOURCE'],['PWA','INSTALE NO CELULAR']].map(([n, l]) => (
            <div key={l} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold text-white mb-1">{n}</p>
              <p className="font-mono text-[10px] text-white/30 tracking-wider">{l}</p>
            </div>
          ))}
        </div>

        {/* Destaque APK */}
        <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/10 border border-blue-500/30 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-10">
          <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">📊</div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">Controle Financeiro</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-3">Gerencie receitas e despesas com gráficos, dashboard offline. Seus dados ficam apenas no seu dispositivo.</p>
            <div className="flex flex-wrap gap-2">
              {['Funciona offline','Dados locais','Android','PWA / TWA'].map(c => (
                <span key={c} className="text-[11px] bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a href="https://leosergio.github.io/mMyFinance/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors no-underline">
              <Download size={14}/> Baixar APK
            </a>
            <a href="https://leosergio.github.io/mMyFinance/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-white/20 text-white/70 text-sm font-semibold px-4 py-2 rounded-lg hover:border-white/40 hover:text-white transition-colors no-underline">
              <Globe size={14}/> Web
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-7">
          {filters.map(f => (
            <button key={f.key} onClick={() => setActive(f.key)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                active === f.key
                  ? 'bg-teal-400 text-[#0a0a0f] border-teal-400'
                  : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white'
              }`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map(p => (
            <div key={p.title}
              className={`bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all ${p.featured ? 'sm:col-span-2' : ''}`}>
              {/* Banner */}
              <div className="h-24 bg-gradient-to-br from-white/[0.06] to-white/[0.02] flex items-center justify-between px-5 border-b border-white/10">
                {statusBadge[p.status]}
                <span className="text-4xl">{p.emoji}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="font-semibold text-white text-base mb-2">{p.title}</p>
                <p className="text-sm text-white/40 leading-relaxed flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] bg-white/5 text-white/40 px-2.5 py-0.5 rounded-full border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {p.links?.web && (
                    <a href={p.links.web} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-teal-400 text-[#0a0a0f] text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-85 transition-opacity no-underline">
                      <Globe size={12}/> Abrir
                    </a>
                  )}
                  {p.links?.apk && (
                    <a href={p.links.apk} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-white/20 text-white/60 text-xs font-bold px-3 py-1.5 rounded-lg hover:border-white/40 hover:text-white transition-all no-underline">
                      <Download size={12}/> APK
                    </a>
                  )}
                  {p.links?.github && (
                    <a href={p.links.github} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-white/20 text-white/60 text-xs font-bold px-3 py-1.5 rounded-lg hover:border-white/40 hover:text-white transition-all no-underline">
                      <GitFork size={12}/>
                    </a>
                  )}
                  {p.links?.mail && (
                    <a href={p.links.mail}
                      className="inline-flex items-center gap-1.5 bg-teal-400 text-[#0a0a0f] text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-85 transition-opacity no-underline">
                      ✉️ Entrar em contato
                    </a>
                  )}
                  {!p.links && (
                    <span className="inline-flex items-center gap-1.5 border border-white/10 text-white/25 text-xs font-bold px-3 py-1.5 rounded-lg cursor-not-allowed">
                      <Clock size={12}/> Em desenvolvimento
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-white/25 font-mono">
          Feito com 🧡 por <a href="https://github.com/LeoSergio" target="_blank" rel="noreferrer" className="text-teal-400 no-underline">Leandro Sérgio</a> · Código aberto no GitHub
        </footer>
      </div>
    </div>
  )
}
