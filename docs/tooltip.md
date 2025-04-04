# Tooltip

A wrapper around `@radix-ui/react-tooltip` for displaying custom tooltips with consistent styling and delay.

## Usage

```tsx
'use client'

import { Tooltip } from '@flavioespinoza/salsa-ui'

<Tooltip content="This is a tooltip">
	<button className="px-4 py-2 bg-blue-500 text-white rounded">
		Hover me
	</button>
</Tooltip>
```

## Props

| Name      | Type              | Default | Description                          |
|-----------|-------------------|---------|--------------------------------------|
| `children` | `React.ReactNode` | –       | The element that triggers the tooltip. |
| `content`  | `string`          | –       | The text content shown inside the tooltip. |
| `delay`    | `number`          | 300     | Milliseconds to wait before showing the tooltip. |

## Styles

The tooltip has a black background with white text, rounded corners, padding, and a subtle shadow. The arrow is also styled to match the tooltip background.

You can customize the style by extending or overriding the `className` via Tailwind classes if needed.

## Dependencies

- [@radix-ui/react-tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip)

