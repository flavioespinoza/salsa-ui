# Button

A fully styled and extensible button component built with Tailwind CSS, Radix Slot, and class-variance-authority (). It supports multiple variants and sizes for flexible usage across your UI.

## Usage

```tsx
import { Button } from '@flavioespinoza/salsa-ui'

<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

## Props

| Name      | Type                                               | Default   | Description                                      |
|-----------|----------------------------------------------------|-----------|--------------------------------------------------|
| `variant` | `"default" | "destructive" | "outline" | "secondary" | "ghost" | "static" | "link"` | `"default"` | Visual style of the button.                    |
| `size`    | `"default" | "sm" | "lg" | "icon"`                     | `"default"` | Size of the button.                            |
| `asChild` | `boolean`                                       | `false`  | Render a custom element instead of `<button>`. |
| ...props   | `React.ButtonHTMLAttributes<HTMLButtonElement>` | –         | Standard button props.                          |

## Variants

- **default**: Primary button with brand styling.
- **destructive**: Red styling for delete or destructive actions.
- **outline**: Bordered button with hover background.
- **secondary**: Alternate button style for secondary actions.
- **ghost**: Bare button with hover state.
- **static**: No style — useful for special layouts.
- **link**: Styled like a text link.

## Sizes

- **default**: Standard height with padding.
- **sm**: Smaller height, text, and padding.
- **lg**: Larger height with extended horizontal padding.
- **icon**: Square button for icon-only buttons.

## Custom Styling

Use the exported `buttonVariants` function to generate custom class names:

```tsx
import { buttonVariants } from '@flavioespinoza/salsa-ui'

const customClass = buttonVariants({ variant: 'ghost', size: 'lg' })
```

## Dependencies

- [@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot)
- [class-variance-authority](https://cva.style)

