# Salsa UI

Reusable UI components for React 18 apps using Tailwind CSS.

> 📦 This is the documentation for the **@flavioespinoza/salsa-ui** NPM module.

---

## ✨ Installation

### With Yarn

```bash
yarn add @flavioespinoza/salsa-ui
```

### With NPM

```bash
npm install @flavioespinoza/salsa-ui
```

---

## 🎨 Tailwind Setup

Make sure your Tailwind config includes the module in `content`:

```js
// tailwind.config.js
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

## 📚 Usage Example

```tsx
import { Button } from '@flavioespinoza/salsa-ui'

export default function Example() {
	return <Button className="bg-blue-600 text-white">Click Me</Button>
}
```

---

## 📖 Explore Components

Use the sidebar to browse documentation for all components.
