# Welcome to Chieri Abe's Portfollio

Personal portfolio of **Chieri Abe** — community designer, program operator, and entrepreneur working at the intersection of systems design and human-centered strategy.

**Live site → [chieriabe.vercel.app](https://chieriabe.vercel.app/)**

---

## About

This site is the long-form companion to my résumé. It walks through the projects, organizations, and programs I've built or helped run — with the context that doesn't fit on a one-pager: the problem, the approach, the outcome, and what I learned.

The featured case studies include:

- **chetz** — a student-led nonprofit I founded in 2020 connecting Japanese students with peers around the world. Still running 5+ years later.
- **NEC X** — Silicon Valley venture studio where I ran social media marketing, event operations, and program coordination across multiple accelerator cohorts.
- **University Innovation Fellowship (UIF)** — Stanford d.school program where my cohort designed and launched the STEAMhouse makerspace at Menlo College.

## Tech stack

- **Framework:** React 18 + Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, react-parallax-tilt, react-type-animation
- **UI:** react-vertical-timeline-component, react-slick
- **3D / graphics:** react-three-fiber, drei, three.js
- **Hosting & analytics:** Vercel + Vercel Analytics / Speed Insights

## Run locally

```bash
git clone https://github.com/chieri518/portfolio.git
cd portfolio
npm install
npm run dev
```

Dev server runs on `http://localhost:5173`.

Other scripts:

- `npm run build` — production build
- `npm run preview` — preview the built bundle
- `npm run lint` — ESLint

## Project structure

```
src/
├── App.jsx           # Route definitions + layout
├── pages/            # Top-level route pages (experience, projects, uif, chetz, necx, ...)
├── components/       # Landing-page sections (About, Highlights, LinkedIn, Feedbacks, Footer)
├── constants/        # Data: experiences, projects, organizations, image lists
├── assets/           # Images and icons
├── hoc/              # Higher-order components (SectionWrapper)
├── utils/motion.js   # Framer Motion variants
└── styles.js         # Shared Tailwind class strings
```

## Contact

- 📧 [chieriabe518@gmail.com](mailto:chieriabe518@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/chieriabe/)
- 🌐 [chieriabe.vercel.app](https://chieriabe.vercel.app/)
