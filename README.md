# Tilahun Tareke — Portfolio

A personal portfolio website built with **React** and **Vite**, showcasing my skills, projects, education, and experience as a full-stack web developer.

🔗 **Live site:** _[add your deployment URL here]_

---

## ✨ Features

- **Dark / Light mode** — persistent theme toggle stored in `localStorage`
- **Smooth scroll navigation** — active section highlighted in the navbar via `IntersectionObserver`
- **Responsive design** — works cleanly on mobile, tablet, and desktop
- **Contact form** — powered by [Web3Forms](https://web3forms.com/) with honeypot spam protection
- **Project cards** — unique themed gradient backgrounds per project, keyboard-accessible
- **Skill progress bars** — animated gradient bars in the About section
- **Downloadable résumé** — direct PDF link in the hero section

---

## 🗂️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with name, role, profile photo, and résumé link |
| **About Me** | Bio, skill progress bars, and stats (experience, projects, clients) |
| **Skills** | Four cards — Frontend, Backend, Databases, Tools & Technologies |
| **Education** | Academic degree and certifications |
| **Experience** | Work history with responsibilities |
| **Projects** | Five project cards with gradient backgrounds and GitHub links |
| **Contact** | Contact info panel + message form (Web3Forms) |
| **Footer** | Quick nav, contact details, social links |

---

## 🛠️ Tech Stack

**Frontend**
- React 19
- Vite 6
- CSS (custom properties, no CSS framework)
- React Icons

**Form**
- [Web3Forms](https://web3forms.com/) — serverless form handling

**Fonts**
- [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/Tilahun-git/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Get your free access key at [web3forms.com](https://web3forms.com/).

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── icon.jpg
│   └── Tilahun_Tareke_resume.pdf
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   ├── profile2.jpg
│   │   ├── logo.jpg
│   │   ├── project_data.js       # Project cards data
│   │   └── [icons …]
│   ├── components/
│   │   ├── common/
│   │   │   ├── Card.jsx           # Shared card component
│   │   │   └── Card.css
│   │   ├── navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── service/               # Projects section
│   │   ├── contact/
│   │   └── footer/
│   ├── context/
│   │   └── ThemeContext.jsx       # Dark/light mode context
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Global design tokens & base styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

All colours, spacing, and typography are defined as CSS custom properties in `src/index.css` and swap automatically between dark and light mode via `[data-theme="light"]`.

| Token | Dark | Light |
|-------|------|-------|
| `--bg` | `#0c0b09` | `#f5f5f1` |
| `--surface` | `#1c1c21` | `#ffffff` |
| `--text-main` | `#ececec` | `#111110` |
| `--text-body` | `#c8c8c8` | `#3a3a3a` |
| `--accent` | `#a259ff` | `#a259ff` |
| `--accent-2` | `#269ceb` | `#269ceb` |

---

## 📬 Adding New Projects

Edit `src/assets/project_data.js` and add a new entry:

```js
{
  id: 6,
  name: "Your Project Name",
  description: "Short description of what it does.",
  repo: "https://github.com/Tilahun-git/your-repo",
  gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
}
```

Choose a gradient that reflects the project's theme. The card handles everything else automatically.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🙋‍♂️ Contact

**Tilahun Tareke**
- Email: [tilahuntareke8@gmail.com](mailto:tilahuntareke8@gmail.com)
- GitHub: [@Tilahun-git](https://github.com/Tilahun-git)
- Location: Addis Ababa, Ethiopia
