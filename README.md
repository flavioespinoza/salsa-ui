# salsa-ui

Reusable component library for React 18 + Tailwind CSS, designed for internal and public use across Salsa Network web projects.

> 📦 Published as [@flavioespinoza/salsa-ui](https://www.npmjs.com/package/@flavioespinoza/salsa-ui)

---

## 🚀 Overview

**salsa-ui** is a modern, accessible, and theme-ready React UI library built with Tailwind CSS.

It includes:

- 🧱 Components like Button, Input, Card, Popover, and more
- 🎨 Icons designed to match the Salsa design system
- ⚛️ Compatible with React 18+ and frameworks like Next.js
- 📦 Distributed as an ES6 module for modern bundlers

---

## 📚 Documentation

📖 Full documentation and usage examples:  
➡️ [https://flavioespinoza.github.io/salsa-ui](https://flavioespinoza.github.io/salsa-ui)

---

## ▶️ Run Locally

Install dependencies:

```bash
yarn install
```

Start the project:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

![/public/Macbook-Pro-16-1727.998046875x1116.9921875.png](/public/Macbook-Pro-16-1727.998046875x1116.9921875.png)

---

## 🧩 Main Layout, Side Nav, and Menu Items

This is the layout system used by most pages in the project. The `MainLayout` component wraps every `page.tsx` and includes the `SideNav` and `Header`. These layout components are not exported from the NPM module and are expected to be copied into your project directly.

### 📁 Example structure:

- `src/components/main-layout.tsx`
- `src/constants/menu-items.tsx`

You will need two sets of menu items: `menuItems` (top section) and `menuItemsFooter` (bottom section).

> **Note**: Here's the relevant import in `main-layout.tsx`:

```ts
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
```

### 🔧 MainLayout example:

**`src/components/main-layout.tsx`**

```ts
'use client'

import React from 'react'
import { Header } from '@/components/ui/header'
import SideNav from '@/components/ui/side-nav'
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import useSidenav from '@/hooks/useSidenav'
import { useSideNavStore } from '@/state/use-side-nav-store'

const HEADER_HEIGHT = 'h-[74px]'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	useSidenav()
	const { width } = useSideNavStore()

	return (
		<div id="mainLayoutWrapper" className="flex min-h-screen w-full">
			<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
			<div
				id="mainLayoutContent"
				className="flex flex-1 flex-col transition-all duration-300"
			>
				<Header height={HEADER_HEIGHT} />
				<main className="flex-1 p-4">{children}</main>
			</div>
		</div>
	)
}

export { MainLayout }
export default MainLayout
```

### 📄 Page example:

**`src/app/<route-folder>/page.tsx`**

```tsx
import React from 'react'
import { MainLayout } from '@/components/main-layout'

export default function Page() {
	return (
		<MainLayout>
			<h1 className="text-lg font-bold">Page</h1>
			<p>This is the page content.</p>
		</MainLayout>
	)
}
```

---

# Using @flavioespinoza/salsa-ui in your project

## 📦 Installation

### Yarn

```bash
yarn add @flavioespinoza/salsa-ui
```

### NPM

```bash
npm install @flavioespinoza/salsa-ui
```

---

## 🎨 Tailwind Configuration

Update your `tailwind.config.js`:

```js
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@flavioespinoza/salsa-ui/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
```

---

## 🛠️ Development

- UI components live in `src/components/ui`
- Docs are stored in `docs/` and powered by [Docsify](https://docsify.js.org)
- To preview docs locally:

```bash
npx docsify-cli serve docs
```

---

## 🚀 NPM Publishing

Publishing is automated via GitHub Actions when the `main` branch is updated.

To publish manually:

```bash
# Patch bump (1.0.8 → 1.0.9)
npm version patch

# Or use:
# npm version minor   # 1.1.0
# npm version major   # 2.0.0

git push && git push --tags

# npm publish --access public --otp=<six-digit-code-from-your-2FA-authenticator-app>

npm publish --access public --otp=
```

---

## 🔒 License

MIT © [Flavio Espinoza](https://flavioespinoza.com)
