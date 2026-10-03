# 🛍️ LUXE: Premium E-Commerce Frontend

![LUXE E-Commerce Banner](https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop)

> A production-ready, ultra-premium e-commerce frontend web application featuring a cinematic, luxury landing page and seamless shopping experience. Built for speed, aesthetics, and high conversion.

---

## 🌟 Features

- **Cinematic Luxury Hero Section:** Awwwards-quality landing experience with stacked typography, 3D floating products, glassmorphism callout cards, ambient lighting, and smooth micro-interactions.
- **Modern Tech Stack:** Powered by **React 19**, **Vite**, and **TypeScript** for an exceptional developer experience and optimized production builds.
- **Global State Management:** Persistent shopping cart and wishlist functionality implemented with **Zustand**.
- **Real-time Data Fetching:** Seamless API integration utilizing **TanStack Query (React Query)** and Axios for fetching products, categories, and search results via DummyJSON.
- **Beautiful UI & Animations:** Fully custom UI built with **Tailwind CSS**, enhanced with fluid page transitions, hover effects, and spring animations via **Framer Motion**.
- **Responsive & Accessible:** Pixel-perfect mobile-first design scaling flawlessly up to ultrawide monitors. Semantic HTML and accessible contrasting color palettes.
- **Complete Shopping Flow:** Includes product discovery (filtering, pagination), detailed product pages (image galleries, reviews), cart management, mock checkout validation (Zod), and user profile mockups.

---

## 🛠️ Tech Stack

- **Core:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) (with `persist` middleware)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

---

## 📂 Project Structure

```text
src/
├── assets/          # Static assets and global CSS
├── components/      # Reusable UI components
│   ├── home/        # Landing page specific components (Hero, Features, etc.)
│   ├── layout/      # Navbar, Footer, and Page Layout wrappers
│   └── ui/          # Generic UI elements (Buttons, Inputs, Skeletons)
├── lib/             # Utility functions (e.g., tailwind merge)
├── pages/           # Route-level components (Shop, Cart, Checkout, etc.)
├── services/        # API configurations and network requests
├── store/           # Zustand global state slices (useCartStore, useWishlistStore)
├── types/           # Global TypeScript interfaces (Product, CartItem, etc.)
└── main.tsx         # Application entry point
```

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/saibhure/E-Commerce-Frontend.git
cd E-Commerce-Frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
The optimized static output will be generated in the `dist/` directory.

---

## 🎨 Design Philosophy

This project was built with a "Premium-First" mindset. The design takes heavy inspiration from top-tier brands like Apple, Nike, and Zara, alongside modern SaaS aesthetics (Vercel, Linear). 
It leverages deep #050505 backgrounds, luxurious gold (#D4AF37) accents, meticulous typography pairing (Inter Black & Playfair Display), and atmospheric glassmorphism to create a sense of exclusivity and high quality.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
