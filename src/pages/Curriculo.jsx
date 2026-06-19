import Navbar from '../components/Navbar'
import { GitFork, Mail, Phone,   MapPin, ExternalLink } from 'lucide-react'

const skills = [
  { name: 'HTML5', pct: 85 },
  { name: 'CSS3', pct: 80 },
  { name: 'JavaScript', pct: 65 },
  { name: 'Excel / Dados', pct: 75 },
  { name: 'Git', pct: 60 },
]

const softSkills = ['Proatividade','Trabalho em Equipe','Comunicação','Produtividade','Resolução de Problemas','Adaptabilidade']

const education = [
  {
    date: '2023 → atual',
    role: 'Bacharelado em Sistemas de Informação',
    org: 'UFRN',
    desc: 'Cursando graduação com foco em desenvolvimento de software, banco de dados e análise de sistemas.',
    tags: ['Algoritmos','Banco de Dados','Engenharia de Software'],
  },
  {
    date: '2023 → atual',
    role: 'Trilha Full Stack',
    org: 'Rocketseat',
    desc: 'Formação prática em desenvolvimento web moderno: HTML, CSS, JavaScript e projetos reais no GitHub.',
    tags: ['HTML5','CSS3','JavaScript','Git'],
  },
]

const experience = [
  {
    date: '2017 → 2023',
    role: 'Atendimento ao Cliente & Vendas',
    org: 'Quiosque Jardim — Caicó, RN',
    desc: 'Seis anos de atuação com atendimento, gestão de caixa, estoque e trabalho em equipe. Desenvolvimento de resiliência, gestão de conflitos e comunicação.',
    tags: ['Atendimento','Gestão de Equipe','Organização'],
  },
]

const techs = [
  { icon: '🌐', name: 'HTML5', level: 'Intermediário' },
  { icon: '🎨', name: 'CSS3', level: 'Intermediário' },
  { icon: '⚡', name: 'JavaScript', level: 'Básico-Interm.' },
  { icon: '📊', name: 'Excel', level: 'Avançado' },
  { icon: '🐙', name: 'Git/GitHub', level: 'Básico' },
  { icon: '📱', name: 'Responsivo', level: 'Intermediário' },
]

const projects = [
  { emoji: '🔐', title: 'Tela de Login', desc: 'Interface de autenticação responsiva com HTML e CSS.', href: 'https://leosergio.github.io/projeto-login/' },
  { emoji: '💰', title: 'Controle Financeiro', desc: 'Sistema web para gestão de finanças pessoais com receitas e despesas.', href: 'https://leosergio.github.io/mMyFinance/' },
  { emoji: '🔗', title: 'Site Pessoal', desc: 'Portfólio com tema dark/light, cards de navegação e layout responsivo.', href: 'https://leosergio.github.io/Projeto' },
]

function Section({ icon, title, children }) {
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

function TimelineItem({ date, role, org, desc, tags }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-5 mb-6 last:mb-0">
      <p className="font-mono text-[11px] text-white/30 pt-1 text-right leading-tight">{date}</p>
      <div className="pl-5 border-l-2 border-white/10 relative">
        <span className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-blue-500 border-2 border-[#0a0a0f] ring-2 ring-white/10" />
        <p className="text-white font-semibold mb-1">{role}</p>
        <p className="text-blue-400 text-sm font-medium mb-2">{org}</p>
        <p className="text-white/50 text-sm leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => <span key={t} className="text-[11px] bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 items-start">

        {/* Sidebar */}
        <aside className="bg-[#1a1a2e] rounded-2xl overflow-hidden lg:sticky lg:top-20">
          {/* Top */}
          <div className="bg-gradient-to-br from-[#1e2d5a] to-[#1a1a2e] px-7 py-8 text-center border-b border-white/[0.06]">
            <img src="/perfil-dark.png" alt="Leandro" className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover mx-auto mb-4" />
            <h2 className="font-display text-lg text-white mb-1">Leandro Sergio</h2>
            <p className="text-[11px] font-bold tracking-widest uppercase text-blue-400">Dev Web</p>
          </div>
          {/* Contact */}
          <div className="px-7 py-5 border-b border-white/[0.06]">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-3">Contato</p>
            {[
              { href: 'https://bit.ly/45W4bCS', icon: <Phone size={13}/>, label: '(84) 9 9619-7364' },
              { href: 'mailto:leosergio.583@gmail.com', icon: <Mail size={13}/>, label: 'leosergio.583@gmail.com' },
              { href: 'https://github.com/LeoSergio', icon: <GitFork size={13}/>, label: 'github.com/LeoSergio' },
              { href: 'https://www.instagram.com/leandro.sergio.583/', icon: <Phone size={13}/>, label: '@leandro.sergio.583' },
              { href: 'https://linkedin.com', icon: <Mail size={13}/>, label: 'LinkedIn' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-[13px] mb-2.5 transition-colors no-underline">
                <span className="w-7 h-7 bg-blue-500/15 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">{c.icon}</span>
                {c.label}
              </a>
            ))}
            <div className="flex items-center gap-2.5 text-white/30 text-[13px]">
              <span className="w-7 h-7 bg-blue-500/15 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin size={13}/></span>
              Caicó / RN
            </div>
          </div>
          {/* Skills bars */}
          <div className="px-7 py-5 border-b border-white/[0.06]">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">Habilidades</p>
            {skills.map(s => (
              <div key={s.name} className="mb-3.5">
                <div className="flex justify-between text-[12px] mb-1.5">
                  <span className="text-white/60">{s.name}</span>
                  <span className="text-white/25 font-mono">{s.pct}%</span>
                </div>
                <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full skill-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          {/* Soft skills */}
          <div className="px-7 py-5">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-3">Soft Skills</p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(s => (
                <span key={s} className="text-[11px] border border-blue-500/30 text-white/50 bg-blue-500/10 px-2.5 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main */}
        <main>
          {/* Hero card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-purple-500 rounded-t-2xl" />
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">Desenvolvedor Web</p>
            <h1 className="font-display text-4xl font-extrabold text-white mb-4">Leandro S. da Silva</h1>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-xl">
              Estudante de Sistemas de Informação na UFRN, com foco em desenvolvimento web e análise de dados.
              Busco minha primeira oportunidade para aplicar conhecimentos em projetos práticos e crescer profissionalmente.
            </p>
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-white/10">
              {[
                { icon: '📍', label: 'Caicó, RN' },
                { icon: '✉️', label: 'leosergio.583@gmail.com' },
                { icon: '🔗', label: 'github.com/LeoSergio' },
                { icon: '🎓', label: 'UFRN — Sistemas de Informação' },
              ].map(m => (
                <div key={m.label} className="flex items-center gap-2 text-[13px] text-white/40">
                  <span className="w-7 h-7 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center text-xs">{m.icon}</span>
                  {m.label}
                </div>
              ))}
            </div>
          </div>

          <Section icon="🎯" title="Objetivo Profissional">
            <p className="text-white/50 text-[15px] leading-relaxed">
              Atuar como Desenvolvedor Web em uma equipe dinâmica, onde possa aplicar e expandir
              meus conhecimentos em HTML, CSS, JavaScript e ferramentas de análise. Tenho interesse especial em projetos
              que combinem design funcional com dados para gerar impacto real.
            </p>
          </Section>

          <Section icon="🎓" title="Educação">
            {education.map(e => <TimelineItem key={e.role} {...e} />)}
          </Section>

          <Section icon="💼" title="Experiência Profissional">
            {experience.map(e => <TimelineItem key={e.role} {...e} />)}
          </Section>

          <Section icon="⚙️" title="Tecnologias">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techs.map(t => (
                <div key={t.name} className="border border-white/10 rounded-xl p-4 text-center hover:border-blue-400/40 hover:bg-blue-500/5 transition-all cursor-default">
                  <span className="text-2xl block mb-2">{t.icon}</span>
                  <p className="font-semibold text-sm text-white mb-0.5">{t.name}</p>
                  <p className="text-[11px] text-white/30">{t.level}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon="🚀" title="Projetos">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map(p => (
                <a key={p.title} href={p.href} target="_blank" rel="noreferrer"
                  className="border border-white/10 rounded-xl p-5 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all no-underline block">
                  <p className="font-semibold text-white mb-1.5 flex items-center gap-2">{p.emoji} {p.title}</p>
                  <p className="text-[13px] text-white/40 leading-snug mb-3">{p.desc}</p>
                  <span className="text-[12px] text-blue-400 font-semibold flex items-center gap-1">Ver projeto <ExternalLink size={11}/></span>
                </a>
              ))}
            </div>
          </Section>

          <Section icon="🏆" title="Certificações">
            <a href="/certificate-rocketseat.pdf" target="_blank"
              className="flex items-center gap-4 p-4 border border-white/10 rounded-xl hover:border-blue-400/40 hover:bg-blue-500/5 transition-all no-underline mb-3">
              <span className="w-11 h-11 bg-blue-500/10 text-2xl rounded-xl flex items-center justify-center flex-shrink-0">🚀</span>
              <div>
                <p className="text-white font-semibold text-sm">Certificado — Trilha Full Stack</p>
                <p className="text-white/30 text-xs">Rocketseat · 2023</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl">
              <span className="w-11 h-11 bg-blue-500/10 text-2xl rounded-xl flex items-center justify-center flex-shrink-0">📊</span>
              <div>
                <p className="text-white font-semibold text-sm">Excel Básico e Avançado</p>
                <p className="text-white/30 text-xs">SENAI</p>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  )
}
