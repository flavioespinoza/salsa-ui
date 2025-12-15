# Theming Guide

Customize the look and feel of Salsa UI components.

## Color Tokens

Salsa UI uses CSS custom properties for theming:

```css
:root {
	--background: 0 0% 100%;
	--foreground: 222.2 84% 4.9%;
	--primary: 222.2 47.4% 11.2%;
	--primary-foreground: 210 40% 98%;
	--secondary: 210 40% 96.1%;
	--secondary-foreground: 222.2 47.4% 11.2%;
	--muted: 210 40% 96.1%;
	--muted-foreground: 215.4 16.3% 46.9%;
	--accent: 210 40% 96.1%;
	--accent-foreground: 222.2 47.4% 11.2%;
	--destructive: 0 84.2% 60.2%;
	--destructive-foreground: 210 40% 98%;
	--border: 214.3 31.8% 91.4%;
	--input: 214.3 31.8% 91.4%;
	--ring: 222.2 84% 4.9%;
}

.dark {
	--background: 222.2 84% 4.9%;
	--foreground: 210 40% 98%;
	/* ... */
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
