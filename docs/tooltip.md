# Tooltip

A simple, client-side tooltip component built on top of `@radix-ui/react-tooltip`. This version provides a high-level abstraction that accepts content, children, and an optional delay.

## Usage

```tsx
'use client'

import { Tooltip } from '@flavioespinoza/salsa-ui'

<Tooltip content="Hello there!" delay={300}>
	<button className="px-4 py-2 bg-blue-500 text-white rounded">
		Hover me
	</button>
</Tooltip>
```

## Props

| Name      | Type              | Default | Description                                                  |
|-----------|-------------------|---------|--------------------------------------------------------------|
| `children` | `React.ReactNode` | –       | The element that triggers the tooltip.                        |
| `content`  | `string`          | –       | The tooltip text to display.                                  |
| `delay`    | `number`          | `300`  | Delay in milliseconds before showing the tooltip on hover.    |
| ...props   | `TooltipPrimitive.Content` props | – | Additional props forwarded to the `Content` component.       |

## Styles

- Background: black
- Text: white
- Size: small, with padding and a subtle shadow
- Arrow: points to trigger and matches the tooltip color

Custom styles can be applied by extending the `className` prop via `...props`.

## Dependencies

- [@radix-ui/react-tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip)

