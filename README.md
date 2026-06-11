# Tilahun Tareke — Portfolio

> Personal portfolio website of **Tilahun Tareke**, Full-Stack Web Developer & Freelancer based in Addis Ababa, Ethiopia.

🔗 **Live:** _[add your deployment URL here]_
📄 **Resume:** available via the "View Resume" button in the hero section

---

## ✨ Features

- **Dark / Light mode** — theme toggle persisted in `localStorage`, adapts every colour automatically
- **Active section highlighting** — navbar link tracks the current section via `IntersectionObserver`
- **Responsive design** — fully functional on mobile, tablet, and desktop
- **Animated skill bars** — progress bars in the About section
- **Project cards** — 5 project cards with GitHub / live demo links
- **Working contact form** — powered by [Web3Forms](https://web3forms.com/) with honeypot spam protection
- **SVG favicon** — circular "T" logo matching the navbar brand
- **Open Graph tags** — correct preview cards when sharing on LinkedIn, WhatsApp, etc.
- **Downloadable résumé** — direct PDF link in the hero

---

## 🗂️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, role, profile photo, résumé link |
| 2 | **About Me** | Bio, animated skill bars, stats (experience / projects / clients) |
| 3 | **Skills** | Four cards — Frontend, Backend, Databases, Tools |
| 4 | **Education** | Degree and certifications |
| 5 | **Experience** | Work history with responsibilities |
| 6 | **Projects** | Five project cards with repo / live links |
| 7 | **Contact** | Contact info + message form |
| 8 | **Footer** | Quick nav, contact details, social links |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite 6 |
| Styling | Plain CSS with custom properties (no framework) |
| Icons | React Icons 5 |
| Font | [Outfit](https://fonts.google.com/specimen/Outfit) — Google Fonts |
| Form | [Web3Forms](https://web3forms.com/) |
| Deployment | _(add your platform — Vercel / Netlify / Render)_ |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg                  # Circular "T" SVG favicon
│   ├── apple-touch-icon.png         # iOS home screen icon
│   ├── site.webmanifest             # PWA manifest
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   └── Tilahun_Tareke_resume.pdf    # Résumé (linked from Hero)
├── src/
│   ├── assets/
│   │   ├── interactProfile.png      # Hero profile photo
│   │   ├── profile.png              # About section photo
│   │   └── project_data.js          # Project cards data
│   ├── components/
│   │   ├── common/Card.jsx          # Shared card component
│   │   ├── navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── projects/                # Projects section
│   │   ├── contact/
│   │   └── footer/
│   ├── context/
│   │   └── ThemeContext.jsx         # Dark / light mode context
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                    # Global design tokens & base styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/Tilahun-git/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Get your free key at [web3forms.com](https://web3forms.com/).

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

Output in `dist/`. Preview locally with:

```bash
npm run preview
```

---

## 🎨 Design System

All tokens live in `src/index.css` and flip automatically with `[data-theme="light"]`.

| Token | Dark | Light |
|-------|------|-------|
| `--bg` | `#0c0b09` | `#f5f5f1` |
| `--surface` | `#1c1c21` | `#ffffff` |
| `--text-main` | `#ececec` | `#111110` |
| `--text-body` | `#c8c8c8` | `#3a3a3a` |
| `--text-muted` | `#8a8a8a` | `#6b6b6b` |
| `--accent` | `#a259ff` | `#a259ff` |
| `--accent-2` | `#269ceb` | `#269ceb` |

---

## 📦 Adding a New Project

Edit `src/assets/project_data.js`:

```js
{
  id: 6,
  name: "Your Project Name",
  description: "Short description of what it does.",
  repo: "https://github.com/Tilahun-git/your-repo",
}
```

The card grid updates automatically — no other changes needed.

---

## 🌐 Skills Covered

**Frontend** — HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Next.js  
**Backend** — Node.js, Express.js, Spring Boot  
**Databases** — MongoDB, PostgreSQL  
**Tools** — Git & GitHub, Figma, Postman

---

## 📬 Contact

| | |
|--|--|
| Email | [tilahuntareke8@gmail.com](mailto:tilahuntareke8@gmail.com) |
| GitHub | [@Tilahun-git](https://github.com/Tilahun-git) |
| Location | Addis Ababa, Ethiopia |

---

## 📄 License

Open source under the [MIT License](LICENSE).
