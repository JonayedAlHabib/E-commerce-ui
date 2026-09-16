<div align="center">

# 🛍️ Ecommerce UI

A modern ecommerce storefront built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Project Workflow](#project-workflow)
- [Getting Started](#getting-started)
- [Scripts](#scripts)

## Features

- 🏠 Home page with featured banner and category-filterable product list
- 🔍 Product browsing with search and filters
- 🛒 Persistent shopping cart (survives page reloads)
- 🧾 Multi-step checkout — cart review, shipping, and payment
- ✅ Form validation powered by React Hook Form + Zod
- 📱 Fully responsive UI

## Tech Stack

| Category         | Technology                                        |
| ----------------- | -------------------------------------------------- |
| Framework          | [Next.js](https://nextjs.org) (App Router)        |
| Language           | [TypeScript](https://www.typescriptlang.org)      |
| UI Library         | [React](https://react.dev)                        |
| Styling            | [Tailwind CSS](https://tailwindcss.com)            |
| State Management   | [Zustand](https://zustand-demo.pmnd.rs)            |
| Forms & Validation | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Icons              | [Lucide React](https://lucide.dev)                 |

## Project Structure

```
client/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Routes (App Router)
│   │   ├── page.tsx           # Home page
│   │   ├── products/          # Product listing & detail pages
│   │   └── cart/               # Cart & checkout flow
│   ├── components/       # Reusable UI components
│   ├── stores/            # Zustand stores (e.g. cartStore)
│   └── types.ts            # Shared TypeScript types
└── package.json
```

## Project Workflow

1. **Home (`/`)** — featured banner + product list, optionally filtered by a `category` search param.
2. **Products (`/products`)** — browse all products with search and filter components.
3. **Product Detail (`/products/[id]`)** — choose a size/color and add the product to the cart.
4. **Cart (`/cart`)** — a 3-step checkout flow driven by a `step` search param:
   | Step | Name             | Description                          |
   | ---- | ---------------- | ------------------------------------- |
   | 1    | Shopping Cart    | Review and remove items               |
   | 2    | Shipping Address | Fill in the shipping form             |
   | 3    | Payment Method   | Fill in the payment form              |
5. **State Management** — cart items are managed by a Zustand store (`src/stores/cartStore.tsx`) and persisted to `localStorage`.

## Getting Started

**Prerequisites:** Node.js 18+ and [pnpm](https://pnpm.io)

1. Install dependencies
   ```bash
   pnpm install
   ```
2. Start the development server
   ```bash
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

| Command       | Description                       |
| -------------- | ---------------------------------- |
| `pnpm dev`      | Start the development server        |
| `pnpm build`    | Build the app for production        |
| `pnpm start`    | Run the production build            |
| `pnpm lint`     | Lint the codebase with ESLint       |
