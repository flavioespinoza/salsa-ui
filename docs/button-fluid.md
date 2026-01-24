# ButtonFluid

A reusable button component built with Fluid-Tailwind – an npm module that dynamically generates fluid (responsive) CSS values using Tailwind’s utility classes. When applied to a component, it automatically creates clamp() CSS functions for smooth scaling between breakpoints.

## Props

| Name      | Type                         | Description                 |
| --------- | ---------------------------- | --------------------------- |
| children  | `React.ReactNode`            | Content inside the button   |
| className | `string`                     | Additional Tailwind classes |
| ...props  | `React.ButtonHTMLAttributes` | All native button props     |

## Usage

```tsx
import { ButtonFluid } from '@flavioespinoza/salsa-ui'

const handleClick = () => alert('Button Clicked!')

<ButtonFluid className="bg-primary text-primary-foreground" onClick={handleClick}>Click Me</ButtonFluid>
```

## Theming

The ButtonFluid component uses semantic color tokens that automatically adapt to light and dark modes:

- Default background uses `bg-muted`
- Override with semantic tokens like `bg-primary`, `bg-secondary`, etc.

### Customizing via CSS Variables

```css
:root {
  --muted: hsl(0 0% 96.1%);
}

.dark {
  --muted: hsl(0 0% 14.9%);
}
```

### Light/Dark Mode

The button automatically adapts to light and dark modes when using semantic tokens.
