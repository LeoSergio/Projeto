# 🚀 Leandro Sergio — Portfólio Pessoal

Site pessoal de **Leandro Sergio**, desenvolvido com React, Vite e Tailwind CSS. Reúne currículo, portfólio de projetos e informações pessoais em uma interface moderna, responsiva e com tema dark.

🔗 **Acesse online:** [portifolio-leosergio.vercel.app](https://portifolio-leosergio.vercel.app)

---

## 🛠️ Tecnologias

- **[React](https://react.dev/)** — biblioteca para construção da interface
- **[Vite](https://vitejs.dev/)** — bundler e servidor de desenvolvimento
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utilitária
- **[React Router](https://reactrouter.com/)** — navegação entre páginas (SPA)
- **[Lucide React](https://lucide.dev/)** — ícones
- **[Vercel](https://vercel.com/)** — hospedagem e deploy contínuo

---

## 📂 Estrutura do projeto

```
leo-portfolio/
├── public/                  # Imagens, PDFs e arquivos estáticos
│   ├── perfil-dark.png
│   └── certificate-rocketseat.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Menu de navegação (breadcrumb)
│   │   └── ScrollToTop.jsx  # Reseta o scroll ao trocar de página
│   ├── pages/
│   │   ├── Home.jsx         # Página inicial
│   │   ├── Curriculo.jsx    # Currículo profissional
│   │   ├── Portfolio.jsx    # Projetos com filtros
│   │   └── SobreMim.jsx     # Sobre mim / jornada pessoal
│   ├── App.jsx               # Rotas da aplicação
│   ├── main.jsx               # Ponto de entrada
│   └── index.css              # Estilos globais + Tailwind
├── vercel.json                # Configuração de rotas para SPA no Vercel
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ▶️ Como rodar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão **20 LTS** (recomendado)
- npm

### Passos

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:5173**

### Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build localmente em http://localhost:4173
```

---

## ☁️ Deploy

O projeto está configurado para deploy automático no **Vercel**:

1. Conecte o repositório do GitHub em [vercel.com](https://vercel.com)
2. O Vercel detecta o framework **Vite** automaticamente
3. Não é necessário configurar variáveis de ambiente
4. O arquivo `vercel.json` garante que todas as rotas do React Router funcionem corretamente em produção

Todo `push` para a branch principal gera um novo deploy automaticamente.

---

## 🐛 Correções recentes

- **Menu responsivo no mobile**: o menu de navegação agora rola horizontalmente em telas pequenas, evitando quebra de linha e sobreposição visual
- **Scroll automático ao topo**: ao navegar entre páginas, a tela agora sempre inicia do topo, em vez de manter a posição de rolagem da página anterior

---

## 📬 Contato

- **GitHub:** [github.com/LeoSergio](https://github.com/LeoSergio)
- **E-mail:** leosergio.583@gmail.com
- **Instagram:** [@leandro.sergio.583](https://www.instagram.com/leandro.sergio.583/)

---

*Desenvolvido por Leandro Sergio · Trilha Rocketseat*