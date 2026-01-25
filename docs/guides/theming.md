# Theming Guide

Customize the look and feel of Salsa UI components.

## Overview

Salsa UI uses a semantic token system based on CSS custom properties (CSS variables). All components use these tokens instead of hardcoded colors, allowing you to fully customize the theme by modifying CSS variables alone.

## Color Tokens

### Core Tokens

These are the foundational color tokens used throughout all components:

```css
:root {
	/* Background and text */
	--background: hsl(0 0% 98%);
	--foreground: hsl(0 0% 3.9%);

	/* Card surfaces */
	--card: hsl(0 0% 100%);
	--card-foreground: hsl(0 0% 3.9%);
	--card-outline: hsl(0 0% 9% / 0.05);

	/* Primary action colors */
	--primary: var(--sage-500);
	--primary-foreground: hsl(0 0% 98%);

	/* Secondary/accent colors */
	--secondary: var(--hotpink-500);
	--secondary-foreground: hsl(0 0% 100%);

	/* Muted/subtle elements */
	--muted: hsl(0 0% 96.1%);
	--muted-foreground: hsl(0 0% 45.1%);

	/* Accent highlights */
	--accent: hsl(0 0% 96.1%);
	--accent-foreground: hsl(0 0% 9%);

	/* Destructive actions */
	--destructive: var(--hotpink-700);
	--destructive-foreground: hsl(0 0% 98%);

	/* Borders and inputs */
	--border: hsl(0 0% 89.8%);
	--input: hsl(0 0% 89.8%);
	--input-background: var(--sage-200);
	--ring: var(--hotpink-500);

	/* Border radius */
	--radius: 0.5rem;
}
```

### State Tokens

Tokens for communicating status and feedback:

```css
:root {
	/* Success state */
	--success: hsl(142 71% 45%);
	--success-foreground: hsl(0 0% 100%);

	/* Warning state */
	--warning: hsl(45 93% 47%);
	--warning-foreground: hsl(0 0% 100%);
}
```

### UI Element Tokens

Specialized tokens for specific UI patterns:

```css
:root {
	/* Modal/dialog overlay */
	--overlay: hsl(0 0% 0% / 0.8);

	/* Tooltips */
	--tooltip: hsl(0 0% 0%);
	--tooltip-foreground: hsl(0 0% 100%);

	/* Side navigation */
	--sidenav: var(--sage-100);
	--sidenav-header: hsl(0 0% 83%);
	--sidenav-item-hover: hsl(350 99% 60% / 0.6);
	--sidenav-item-active: hsl(0 0% 100%);
	--sidenav-item-active-foreground: hsl(0 0% 0%);
	--sidenav-muted: hsl(240 4% 46%);
}
```

### Chart Tokens

Tokens for data visualization:

```css
:root {
	--chart-1: hsl(12 76% 61%);
	--chart-2: hsl(173 58% 39%);
	--chart-3: hsl(197 37% 24%);
	--chart-4: hsl(43 74% 66%);
	--chart-5: hsl(27 87% 67%);
}
```

### Brand Color Palettes

Salsa UI includes full color palettes for brand consistency:

```css
:root {
	/* Sage palette (green-gray) */
	--sage-50: hsl(120 5% 96%);
	--sage-100: hsl(84 10% 90%);
	--sage-200: hsl(82 8% 80%);
	--sage-300: hsl(92 8% 67%);
	--sage-400: hsl(93 7% 51%);
	--sage-500: hsl(95 9% 39%);
	--sage-600: hsl(99 11% 30%);
	--sage-700: hsl(100 10% 24%);
	--sage-800: hsl(100 9% 20%);
	--sage-900: hsl(97 10% 16%);
	--sage-950: hsl(105 9% 9%);

	/* Hotpink palette */
	--hotpink-50: hsl(351 100% 97%);
	--hotpink-100: hsl(350 100% 94%);
	--hotpink-200: hsl(350 100% 89%);
	--hotpink-300: hsl(350 100% 81%);
	--hotpink-400: hsl(350 100% 70%);
	--hotpink-500: hsl(350 99% 60%);
	--hotpink-600: hsl(350 85% 51%);
	--hotpink-700: hsl(350 87% 42%);
	--hotpink-800: hsl(350 82% 35%);
	--hotpink-900: hsl(350 74% 31%);
	--hotpink-950: hsl(350 88% 16%);
}
```

## Customizing Your Theme

Override CSS variables in your own stylesheet to customize the theme:

```css
:root {
	/* Change primary to a blue color */
	--primary: hsl(220 90% 50%);
	--primary-foreground: hsl(0 0% 100%);

	/* Adjust success color */
	--success: hsl(160 84% 39%);
}
```

## Dark Mode

### Configuration

Enable dark mode in your Tailwind config:

```ts
module.exports = {
	darkMode: 'class',
	// ...
}
```

### Dark Mode Tokens

All tokens have dark mode equivalents that are automatically applied when the `.dark` class is present:

```css
.dark {
	--background: hsl(0 0% 3.9%);
	--foreground: hsl(0 0% 98%);
	--card: hsl(0 0% 3.9%);
	--card-foreground: hsl(0 0% 98%);
	--primary: hsl(0 0% 98%);
	--primary-foreground: hsl(0 0% 9%);
	--secondary: hsl(0 0% 14.9%);
	--secondary-foreground: hsl(0 0% 98%);
	--muted: hsl(0 0% 14.9%);
	--muted-foreground: hsl(0 0% 63.9%);
	--accent: hsl(0 0% 14.9%);
	--accent-foreground: hsl(0 0% 98%);
	--destructive: hsl(0 62.8% 30.6%);
	--destructive-foreground: hsl(0 0% 98%);
	--border: hsl(0 0% 14.9%);
	--input: hsl(0 0% 14.9%);
	--input-background: hsl(0 0% 14.9%);
	--ring: hsl(0 0% 83.1%);

	/* Tooltips invert in dark mode */
	--tooltip: hsl(0 0% 98%);
	--tooltip-foreground: hsl(0 0% 9%);

	/* Sidenav dark mode */
	--sidenav: hsl(0 0% 9%);
	--sidenav-header: hsl(0 0% 14.9%);
	--sidenav-item-hover: hsl(0 0% 20%);
	--sidenav-item-active: hsl(0 0% 20%);
	--sidenav-item-active-foreground: hsl(0 0% 98%);
	--sidenav-muted: hsl(0 0% 63.9%);

	--card-outline: hsl(0 0% 98% / 0.05);
}
```

### Using ThemeToggle

Salsa UI includes a `ThemeToggle` component for switching between light and dark modes:

```tsx
import { ThemeToggle } from 'salsa-ui'

function Header() {
	return (
		<header>
			<h1>My App</h1>
			<ThemeToggle />
		</header>
	)
}
```

### Manual Toggle

You can also toggle dark mode programmatically:

```tsx
// Enable dark mode
document.documentElement.classList.add('dark')

// Disable dark mode
document.documentElement.classList.remove('dark')

// Toggle dark mode
document.documentElement.classList.toggle('dark')
```

## Component Variants

Many components support variants through CVA (Class Variance Authority):

```tsx
<Button variant="outline" size="lg">
	Large Outline Button
</Button>

<Badge variant="success">Completed</Badge>

<Alert variant="warning">Check your input</Alert>
```

## Token Reference

| Token | Purpose | Components |
|-------|---------|------------|
| `--primary` | Primary actions | Button, Checkbox, Switch |
| `--secondary` | Secondary actions | Button hover states |
| `--destructive` | Destructive actions | Button, Alert |
| `--success` | Success states | Badge, Alert |
| `--warning` | Warning states | Badge, Alert |
| `--muted` | Subtle backgrounds | Card, Input |
| `--accent` | Highlights | Dropdown, Menu |
| `--overlay` | Modal backdrops | Dialog, Drawer, Sheet |
| `--tooltip` | Tooltip backgrounds | Tooltip |
| `--sidenav-*` | Side navigation | SideNav |
| `--input-background` | Input backgrounds | Input, Checkbox |
| `--card-outline` | Card borders | Card |
