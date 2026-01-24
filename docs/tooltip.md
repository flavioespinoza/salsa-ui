# Tooltip

A simple, client-side tooltip component built on top of `@radix-ui/react-tooltip`. This version provides a high-level abstraction that accepts content, children, and an optional delay.

---

## 📦 Import

```tsx
import { Tooltip } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

```tsx
'use client'

import { Tooltip } from '@flavioespinoza/salsa-ui'

<Tooltip content="Hello there!" delay={300}>
	<button className="px-4 py-2 bg-primary text-primary-foreground rounded">
		Hover me
	</button>
</Tooltip>
```

---

## 📋 Props

| Name      | Type              | Default | Description                                                  |
|-----------|-------------------|---------|--------------------------------------------------------------|
| `children` | `React.ReactNode` | –       | The element that triggers the tooltip.                        |
| `content`  | `string`          | –       | The tooltip text to display.                                  |
| `delay`    | `number`          | `300`  | Delay in milliseconds before showing the tooltip on hover.    |
| ...props   | `TooltipPrimitive.Content` props | – | Additional props forwarded to the `Content` component.       |

---

## 🎨 Theming

The Tooltip component uses semantic color tokens that automatically adapt to light and dark modes:

- `bg-foreground` - Tooltip background (dark in light mode, light in dark mode)
- `text-background` - Tooltip text (light in light mode, dark in dark mode)
- `fill-foreground` - Arrow color matches tooltip background

### Customizing via CSS Variables

Override tooltip colors by setting CSS variables:

```css
:root {
	--foreground: hsl(0 0% 3.9%);
	--background: hsl(0 0% 100%);
}

.dark {
	--foreground: hsl(0 0% 98%);
	--background: hsl(0 0% 3.9%);
}
```

### Customizing via className

Custom styles can be applied by extending the `className` prop via `...props`:

```tsx
<Tooltip content="Custom styled" className="bg-primary text-primary-foreground">
	<button>Hover me</button>
</Tooltip>
```

### Light/Dark Mode

The tooltip automatically adapts to light and dark modes. In light mode, tooltips appear dark; in dark mode, tooltips appear light for proper contrast.

---

## 🧩 Dependencies

- [@radix-ui/react-tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip)

---

## 🔗 Related

- [Popover](popover.md) - For interactive content
- [HoverCard](hover-card.md) - For richer hover content
