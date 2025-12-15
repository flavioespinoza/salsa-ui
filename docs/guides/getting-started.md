# Getting Started

Quick guide to get started with Salsa UI.

## Installation

```bash
npm install @flavioespinoza/salsa-ui
# or
pnpm add @flavioespinoza/salsa-ui
# or
yarn add @flavioespinoza/salsa-ui
```

## Setup

1. Install Tailwind CSS in your project
2. Add the Salsa UI preset to your Tailwind config
3. Import the CSS in your app

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@flavioespinoza/salsa-ui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

export default config
```

## Basic Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@flavioespinoza/salsa-ui'

export default function MyComponent() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Welcome</CardTitle>
			</CardHeader>
			<CardContent>
				<Button>Click me</Button>
			</CardContent>
		</Card>
	)
}
```

## Next Steps

- Explore the [component documentation](/docs)
- Check out [examples](/examples)
- Read the [theming guide](/docs/guides/theming)
