# Textarea

A styled `<textarea>` component built with Tailwind CSS. It supports all native textarea props and includes focus ring, disabled state styling, and full width behavior by default.

## Usage

```tsx
import { Textarea } from '@flavioespinoza/salsa-ui'

<Textarea placeholder="Type your message here..." />
```

## Props

| Name      | Type                                       | Default | Description                          |
|-----------|--------------------------------------------|---------|--------------------------------------|
| `className` | `string`                                  | –       | Custom class names for styling.      |
| ...props  | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` | –       | All native textarea props are supported. |

## Styles

- `min-h-[80px]`: Ensures minimum height.
- `w-full`: Expands to fill container width.
- Rounded borders, background, and padding.
- Focus ring on active/focus.
- Disabled state styling with muted appearance and blocked interaction.

You can customize it further by passing additional Tailwind classes via `className`.

## Example with Custom Height

```tsx
<Textarea className="min-h-[120px]" placeholder="Longer message..." />
```

