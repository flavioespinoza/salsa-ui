# Tooltip

A flexible, composable tooltip system built on top of `@radix-ui/react-tooltip`. This version exposes each primitive — `Tooltip`, `TooltipTrigger`, `TooltipContent`, and `TooltipProvider` — allowing full control over layout and styling.

## Usage

```tsx
'use client'

import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider
} from '@flavioespinoza/salsa-ui'

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger asChild>
			<button className="px-4 py-2 bg-blue-500 text-white rounded">
				Hover me
			</button>
		</TooltipTrigger>
		<TooltipContent>
			Advanced tooltip content
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
```

## Exports

| Component         | Description                                                             |
|------------------|-------------------------------------------------------------------------|
| `TooltipProvider` | Context provider to wrap tooltips and set defaults like delay.         |
| `Tooltip`          | Root wrapper for each tooltip instance.                               |
| `TooltipTrigger`   | Element that activates the tooltip on hover/focus.                    |
| `TooltipContent`   | The visible tooltip box. Accepts custom positioning and styling props. |

## TooltipContent Props

| Prop        | Type      | Default | Description                                                      |
|-------------|-----------|---------|------------------------------------------------------------------|
| `className` | `string` | –       | Custom classes to override styles.                              |
| `sideOffset` | `number` | `4`     | Distance between the trigger and tooltip.                        |
| ...props    | All other props from `@radix-ui/react-tooltip`'s `Content` component are supported. |

## Styles

Tooltip content includes:
- Animations on open/close
- Smooth fade/zoom transitions
- Customizable positioning via data attributes
- Theme-based styling using Tailwind classes

You can extend or override styles using Tailwind and the `className` prop.

## Dependencies

- [@radix-ui/react-tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip)

