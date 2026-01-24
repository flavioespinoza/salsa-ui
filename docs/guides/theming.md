# Theming Guide

Customize the look and feel of Salsa UI components using CSS custom properties (variables). All components use semantic tokens, so changing a variable updates every component that references it—no component-level overrides needed.

## Color Tokens

Salsa UI uses CSS custom properties for theming. Override these in your own stylesheet to customize all components at once:

```css
:root {
  /* Core palette variables */
  --sage-50: hsl(120 5% 96%);
  --sage-100: hsl(84 10% 90%);
  --sage-200: hsl(82 8% 80%);
  --sage-500: hsl(95 9% 39%);
  --hotpink-500: hsl(350 99% 60%);
  --hotpink-700: hsl(350 87% 42%);

  /* Semantic tokens – Light mode */
  --background: hsl(0 0% 98%);
  --foreground: hsl(0 0% 3.9%);
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(0 0% 3.9%);
  --primary: var(--sage-500);
  --primary-foreground: hsl(0 0% 98%);
  --secondary: var(--hotpink-500);
  --secondary-foreground: hsl(0 0% 100%);
  --muted: hsl(0 0% 96.1%);
  --muted-foreground: hsl(0 0% 45.1%);
  --accent: hsl(0 0% 96.1%);
  --accent-foreground: hsl(0 0% 9%);
  --destructive: var(--hotpink-700);
  --destructive-foreground: hsl(0 0% 98%);
  --success: hsl(142 71% 45%);
  --success-foreground: hsl(0 0% 100%);
  --warning: hsl(48 96% 53%);
  --warning-foreground: hsl(0 0% 100%);
  --border: hsl(0 0% 89.8%);
  --input: hsl(0 0% 89.8%);
  --input-background: var(--sage-200);
  --ring: var(--hotpink-500);
  --background-sidenav: var(--sage-100);
  --sidenav-header: hsl(0 0% 82%);
  --radius: 0.5rem;
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
  --accent: hsl(0 0% 14.9%);
  --accent-foreground: hsl(0 0% 98%);
  --destructive: hsl(0 62.8% 30.6%);
  --destructive-foreground: hsl(0 0% 98%);
  --success: hsl(142 71% 45%);
  --success-foreground: hsl(0 0% 100%);
  --warning: hsl(48 96% 53%);
  --warning-foreground: hsl(0 0% 100%);
  --border: hsl(0 0% 14.9%);
  --input: hsl(0 0% 14.9%);
  --input-background: hsl(0 0% 14.9%);
  --ring: hsl(0 0% 83.1%);
  --background-sidenav: hsl(0 0% 9%);
  --sidenav-header: hsl(0 0% 14.9%);
}
```

## Token Usage by Component

| Token | Used by |
|---|---|
| `--primary` / `--primary-foreground` | Button (default), Badge (default), Checkbox border |
| `--secondary` / `--secondary-foreground` | Button (hover), Badge, Checkbox (checked), SideNav hover |
| `--destructive` / `--destructive-foreground` | Button, Badge, Alert, Toast |
| `--success` / `--success-foreground` | Alert (success), Badge (success) |
| `--warning` / `--warning-foreground` | Alert (warning), Badge (warning) |
| `--input-background` | Input, Checkbox (unchecked) |
| `--background-sidenav` | SideNav body |
| `--sidenav-header` | SideNav header |
| `--card` / `--card-foreground` | Card |

## Custom Theme Example

To create a custom blue theme, override the CSS variables:

```css
:root {
  --primary: hsl(220 70% 50%);
  --primary-foreground: hsl(0 0% 100%);
  --secondary: hsl(200 80% 50%);
  --secondary-foreground: hsl(0 0% 100%);
  --input-background: hsl(210 40% 96%);
  --background-sidenav: hsl(210 40% 96%);
  --sidenav-header: hsl(210 30% 90%);
}
```

No changes to component code or Tailwind config are needed—all components automatically pick up the new values.

## Component Variants

Many components support variants through CVA:

```tsx
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

<Alert variant="success">
  <AlertTitle>Saved</AlertTitle>
</Alert>

<Badge variant="warning">Pending</Badge>
```

## Dark Mode

Dark mode is enabled via the `class` strategy in the Tailwind config:

```ts
module.exports = {
  darkMode: 'class',
  // ...
}
```

Toggle dark mode by adding the `dark` class to your root element:

```tsx
<html className="dark">
```

All components automatically switch to their dark mode colors when the `dark` class is present. No component-level dark mode overrides are needed.
