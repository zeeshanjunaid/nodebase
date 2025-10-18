# NodeBase

A modern Next.js project with TypeScript, Tailwind CSS v4, and a comprehensive UI component library.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for modern styling
- **Authentication System** - NextAuth.js with login/signup and social providers
- **Database Integration** - Prisma ORM with PostgreSQL
- **API Layer** - tRPC for type-safe APIs
- **Comprehensive UI Components** - 60+ pre-built components
- **Responsive Design** - Mobile-first approach
- **Modern Tooling** - Biome for linting and formatting
- **Component Library** - Reusable UI components with shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM + PostgreSQL
- **API**: tRPC for type-safe APIs
- **Linting**: Biome
- **Package Manager**: pnpm

## 📦 Components Included

- **Form Components**: Input, Textarea, Select, Checkbox, Radio Group, Switch
- **Layout Components**: Card, Sheet, Dialog, Drawer, Sidebar
- **Navigation**: Navigation Menu, Breadcrumb, Pagination, Tabs
- **Data Display**: Table, Chart, Badge, Avatar, Progress
- **Feedback**: Alert, Toast, Spinner, Skeleton
- **Interactive**: Button, Toggle, Slider, Command
- **Authentication**: Login/Signup forms, Social login buttons, Auth layouts
- **And many more...**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone git@github.com:zeeshanjunaid/nodebase.git
cd nodebase
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your database URL and NextAuth secret
```

4. Set up the database:
```bash
pnpm prisma generate
pnpm prisma db push
```

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── (auth)/         # Authentication pages
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # Reusable components
│   └── ui/             # UI component library
├── features/           # Feature-based components
│   └── auth/           # Authentication components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── trpc/               # tRPC configuration
└── prisma/             # Database schema
```

## 🎨 Styling

This project uses Tailwind CSS v4 with a modern design system. All components are built with:

- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: Built-in dark mode support
- **Accessibility**: WCAG compliant components
- **Customizable**: Easy to theme and customize

## 🧩 Component Usage

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to NodeBase</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Works out of the box
- **Railway**: Easy deployment
- **Docker**: Containerized deployment available

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Prisma Documentation](https://www.prisma.io/docs)
- [tRPC Documentation](https://trpc.io/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Beautifully designed components
- [Vercel](https://vercel.com) - Deployment platform