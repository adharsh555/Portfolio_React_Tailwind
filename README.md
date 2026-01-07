# 🌌 Astral Pathfinder | Portfolio v2.0

A high-performance, recruiter-centric developer portfolio built with a focus on **AI-driven industry impact**, **environmental physics**, and **technical transparency**. This isn't just a site; it's a technical demonstration of modern frontend engineering.

---

## 🚀 The Recruiter Advantage

This portfolio is engineered to solve the "7-Second Recruiter Scan" problem:
- **Narrative-First Hero**: Clearly defines role, focus, and career intermediate status.
- **Mini Case-Study Logic**: Project cards disclose **Challenges** and **Architectural** decisions on hover.
- **High-Density Skill Matrix**: Grouped by competency (AI, Backend, Frontend) for immediate assessment.
- **Immediate Call-to-Action**: Resume and Contact links are verified for 100% hierarchy prominence.

---

## 🛠️ Tech Stack

- **Core**: React 18 + Vite (Zero-lag HMR)
- **Styling**: Tailwind CSS v4 (Modern utility-first architecture)
- **Icons**: Lucide React (Pixel-perfect vector set)
- **Deployment**: Optimized for Vercel/Netlify/Vite-Static
- **Interactions**: Framer Motion & CSS keyframe physics

---

## ❄️ The Environment Engine (`EnvironmentContext`)

One of the project's unique features is its persistent environment engine, which manages:
- **Persistent Night Mode**: Defaults to a high-contrast dark theme, accessible via a custom context provider.
- **Seasonal UI Physics**:
  - `Winter`: High-density, fluid snowfall with custom keyframe easing.
  - `Monsoon`: Low-latency rain-streaks.
  - `Spring`: Swaying petal physics.
- **Performance First**: Animations are powered by hardware-accelerated CSS transforms to ensure 60FPS even on mobile devices.

---

## 📂 Project Structure

```text
src/
├── components/        # Isolated UI pieces (Case Study Cards, Nav, Contact)
├── context/           # Environmental & Theme state management
├── lib/               # Utility functions (cn, tailwind-merge)
├── Pages/             # High-level route views
├── assets/            # Static media resources
└── index.css          # Global design system & custom keyframes
```

---

## ⚙️ Setup & Configuration

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```

### 3. Contact Form Configuration
The contact form uses **Web3Forms**. To receive emails, update the access key in `src/components/ContactSection.jsx`:

```javascript
// file: src/components/ContactSection.jsx
formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
```

---

## 📄 License

MIT. Feel free to fork and adapt it for your own professional journey.

---
*Built with ❤️ to demonstrate that intermediate engineers are the most trainable and high-impact hires.*
