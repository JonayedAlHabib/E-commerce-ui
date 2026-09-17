<div align="center">

# 🛠️ Ecommerce Admin Dashboard

An admin panel for managing products, users, and orders, built with Next.js, TypeScript, and shadcn/ui.

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

- 📊 Dashboard with revenue, visitor, and order charts
- 👥 User management — list, view, add, and edit users
- 📦 Product management — list, add, and categorize products
- 💳 Payment/order tracking with a searchable, paginated data table
- ✅ To-do list widget for quick task tracking
- 🌗 Light/dark theme support
- ✅ Form validation powered by React Hook Form + Zod

## Tech Stack

| Category           | Technology                                                         |
| ------------------- | -------------------------------------------------------------------- |
| Framework            | [Next.js](https://nextjs.org) (App Router)                          |
| Language             | [TypeScript](https://www.typescriptlang.org)                        |
| UI Library            | [React](https://react.dev)                                          |
| Styling               | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives) |
| Charts                | [Recharts](https://recharts.org)                                    |
| Tables                | [TanStack Table](https://tanstack.com/table)                        |
| Theming               | [next-themes](https://github.com/pacocoursey/next-themes)           |
| Forms & Validation    | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Icons                 | [Lucide React](https://lucide.dev)                                  |

## Project Structure

```
admin/
├── public/                # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── page.tsx             # Dashboard (overview + charts)
│   │   ├── users/                # User list, detail, and management
│   │   ├── products/             # Product list and management
│   │   └── payments/              # Orders / transactions table
│   ├── components/
│   │   ├── App*Chart.tsx            # Dashboard chart widgets (area, bar, line, pie)
│   │   ├── Add*.tsx / Edit*.tsx      # Forms for creating/editing entities
│   │   ├── ui/                        # shadcn/ui components
│   │   └── providers/                  # Theme provider, etc.
│   └── lib/                # Utilities
└── package.json
```

## Project Workflow

1. **Dashboard (`/`)** — overview of key metrics: revenue/visitor charts, a to-do list, recent transactions, and popular products.
2. **Users (`/users`)** — paginated, searchable table of all users, with the option to add a new user.
   - **User Detail (`/users/[id]`)** — view profile info, badges, and per-user activity chart; edit user details.
3. **Products (`/products`)** — paginated table of all products, with the option to add products and categories.
4. **Payments (`/payments`)** — paginated table of orders/transactions, with the option to add a new order.

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
