# 🏦 Banker Theme - React Learning & Practice

A modern, responsive banking website template built with **React** and **Vite**. This repository is designed as a hands-on sandbox for learning, implementing, and mastering core React and modern JavaScript concepts in a real-world web application.

---

## 🎯 Purpose & Learning Goals

This project bridges the gap between learning theory and building production-grade user interfaces. By developing and refactoring individual sections of a financial/banking platform, the following key concepts are actively practiced:

- **Component Architecture**: Breaking down complex UIs into modular, reusable components (`Navbar`, `Hero`, `Services`, `Pricing`, `Customer Reviews`, `Blog`, `FAQ`, `Contact Us`).
- **Props & Component Reusability**: Passing dynamic data and callback props to template components (`Pricingcard`, `Servicetemp`, `Questiontemp`, `Blogcard`, `Button`).
- **Responsive Web Design**: Building mobile-first and laptop-optimized layouts using fluid typography (`clamp()`), Bootstrap grid utilities, and CSS flexbox.
- **Modern JavaScript (ES6+)**: Array transformations (`.map()`), object destructuring, spread operators, and modular exports/imports.
- **Third-Party Library Integration**: Configuring interactive carousels and sliders using [Swiper](https://swiperjs.com/).
- **Styling & Design System**: Implementing clean typography (Plus Jakarta Sans) and corporate styling inspired by top-tier banking websites (e.g., JPMorgan Chase).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Bootstrap 5, Scoped CSS / CSS Modules
- **Icons & Typography**: Google Fonts (*Plus Jakarta Sans*), Unicode/Emoji icons
- **Slider/Carousel**: Swiper.js

---

## 📁 Project Structure

```text
├── Banker_theme/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Button/
│   │   ├── Section-0-Navbar/
│   │   ├── Section-1-Hero/
│   │   ├── Section-2-email/
│   │   ├── Section-3-aboutus/
│   │   ├── Section-4-team/
│   │   ├── Section-5-gallery/
│   │   ├── Section-6-how-it-works/
│   │   ├── section-7-services/
│   │   ├── Section-8-customer-review/
│   │   │   └── section-9-pricing/
│   │   ├── Section-10-frequently-asked-questions/
│   │   ├── Section-11-our-blog/
│   │   ├── Section-12-contact-us/
│   │   ├── Section-13-Footer/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or newer recommended) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Muazislam/Minor-Project-React-lang----Banker-theme-website.git
   cd Minor-Project-React-lang----Banker-theme-website/Banker_theme
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 💡 Upcoming Implementations & Roadmap

- [ ] Add React State (`useState`) for interactive calculators and dynamic form controls
- [ ] Implement custom hooks (`useEffect`, custom window resize / theme hooks)
- [ ] Client-side routing with React Router for multi-page experiences
- [ ] Dark / Light mode toggle with CSS variables and React Context API

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
