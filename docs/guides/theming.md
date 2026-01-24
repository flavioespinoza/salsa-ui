# Theming Guide

Customize the look and feel of Salsa UI components.

## Color Tokens

Salsa UI uses CSS custom properties for theming. All components use semantic tokens that automatically adapt to light and dark modes.

### Core Semantic Tokens

```css
:root {
	/* Base colors */
	--background: hsl(0 0% 98%);
	--foreground: hsl(0 0% 3.9%);
	--card: hsl(0 0% 100%);
	--card-foreground: hsl(0 0% 3.9%);

	/* Primary/Secondary actions */
	--primary: var(--sage-500);
	--primary-foreground: hsl(0 0% 98%);
	--secondary: var(--hotpink-500);
	--secondary-foreground: hsl(0 0% 100%);

	/* Feedback states */
	--destructive: var(--hotpink-700);
	--destructive-foreground: hsl(0 0% 98%);
	--success: hsl(142 76% 36%);
	--success-foreground: hsl(0 0% 100%);
	--warning: hsl(45 93% 47%);
	--warning-foreground: hsl(0 0% 100%);

	/* UI elements */
	--muted: hsl(0 0% 96.1%);
	--muted-foreground: hsl(0 0% 45.1%);
	--accent: hsl(0 0% 96.1%);
	--accent-foreground: hsl(0 0% 9%);
	--border: hsl(0 0% 89.8%);
	--input: hsl(0 0% 89.8%);
	--input-background: var(--sage-200);
	--ring: var(--hotpink-500);

	/* Component-specific tokens */
	--sidenav-background: var(--sage-100);
	--sidenav-header: hsl(0 0% 83%);
	--sidenav-text: hsl(240 4% 46%);
	--sidenav-item-hover: var(--hotpink-500);
	--card-border: hsl(0 0% 4% / 0.05);
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
	--success: hsl(142 69% 58%);
	--success-foreground: hsl(0 0% 9%);
	--warning: hsl(48 96% 53%);
	--warning-foreground: hsl(0 0% 9%);
	--destructive: hsl(0 62.8% 30.6%);
	--destructive-foreground: hsl(0 0% 98%);
	--input-background: hsl(0 0% 14.9%);
	--sidenav-background: hsl(0 0% 7%);
	--sidenav-header: hsl(0 0% 10%);
	--sidenav-text: hsl(240 5% 65%);
	--card-border: hsl(0 0% 100% / 0.05);
	/* ... */
}
```

## Custom Theme Example

Override the default theme by setting CSS variables in your app:

```css
:root {
	/* Change primary to blue */
	--primary: hsl(221 83% 53%);
	--primary-foreground: hsl(0 0% 100%);

	/* Change secondary to purple */
	--secondary: hsl(262 83% 58%);
	--secondary-foreground: hsl(0 0% 100%);
}
```

All components will automatically use your custom colors without any additional configuration.

## Component Variants

Many components support variants through CVA:

```tsx
<Button variant="outline" size="lg">
	Large Outline Button
</Button>

<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>

<Alert variant="destructive">
	<AlertTitle>Error</AlertTitle>
</Alert>
```

## Dark Mode

Enable dark mode in your Tailwind config:

```ts
module.exports = {
	darkMode: 'class',
	// ...
}
```

Toggle dark mode by adding the `dark` class to your HTML element:

```tsx
<html className="dark">
```

### Dark Mode Example

```tsx
// Toggle dark mode programmatically
function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark)
	}, [isDark])

	return (
		<Button onClick={() => setIsDark(!isDark)}>
			Toggle Theme
		</Button>
	)
}
```

## Available Semantic Classes

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `bg-background` | Light gray | Dark | Page backgrounds |
| `bg-card` | White | Dark | Card backgrounds |
| `bg-primary` | Sage green | Light | Primary buttons |
| `bg-secondary` | Hot pink | Dark gray | Secondary buttons |
| `bg-success` | Green | Lighter green | Success states |
| `bg-warning` | Yellow | Lighter yellow | Warning states |
| `bg-destructive` | Red | Dark red | Error states |
| `text-foreground` | Dark | Light | Primary text |
| `text-muted-foreground` | Gray | Light gray | Secondary text |
