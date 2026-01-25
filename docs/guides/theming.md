# Theming Guide

Customize the look and feel of Salsa UI components.

## Color Tokens

Salsa UI uses CSS custom properties for theming. All components use semantic tokens that automatically adapt to light and dark modes:

```css
:root {
	/* Core */
	--background: hsl(0 0% 98%);
	--foreground: hsl(0 0% 3.9%);

	/* Cards & Popovers */
	--card: hsl(0 0% 100%);
	--card-foreground: hsl(0 0% 3.9%);

	/* Primary & Secondary */
	--primary: var(--sage-500);
	--primary-foreground: hsl(0 0% 98%);
	--secondary: var(--hotpink-500);
	--secondary-foreground: hsl(0 0% 100%);

	/* Muted & Accent */
	--muted: hsl(0 0% 96.1%);
	--muted-foreground: hsl(0 0% 45.1%);
	--accent: hsl(0 0% 96.1%);
	--accent-foreground: hsl(0 0% 9%);

	/* Semantic States */
	--destructive: var(--hotpink-700);
	--destructive-foreground: hsl(0 0% 98%);
	--success: hsl(142 71% 45%);
	--success-foreground: hsl(0 0% 100%);
	--warning: hsl(45 93% 47%);
	--warning-foreground: hsl(0 0% 0%);

	/* UI Elements */
	--border: hsl(0 0% 89.8%);
	--input: hsl(0 0% 89.8%);
	--ring: var(--hotpink-500);
	--overlay: hsla(0 0% 0% / 0.8);

	/* Sidenav */
	--sidenav: var(--sage-100);
	--sidenav-header: hsl(0 0% 83%);
}

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
	--sidenav: hsl(0 0% 14.9%);
	--sidenav-header: hsl(0 0% 20%);
	/* success, warning, overlay remain the same */
}
```

## Custom Colors

Override default colors in your Tailwind config:

```ts
theme: {
	extend: {
		colors: {
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))',
			},
		},
	},
}
```

## Component Variants

Many components support variants through CVA:

```tsx
<Button variant="outline" size="lg">
	Large Outline Button
</Button>
```

## Dark Mode

Enable dark mode in your Tailwind config:

```ts
module.exports = {
	darkMode: 'class',
	// ...
}
```

Toggle dark mode:

```tsx
<html className="dark">
```
