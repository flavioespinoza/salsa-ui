# Button

The `Button` component from `@flavioespinoza/salsa-ui` is a fully customizable button using Tailwind CSS and [class-variance-authority (CVA)](https://cva.style). It supports multiple variants and sizes and provides a consistent appearance across your app.

---

## ✨ Features

- Multiple visual variants: `default`, `outline`, `ghost`, `link`, `destructive`, `secondary`, `static`
- Multiple sizes: `sm`, `default`, `lg`, `icon`
- Tailwind CSS powered
- Built-in `asChild` prop to render with custom wrappers (e.g. `<Link>`)

---

## 📦 Import

```tsx
import { Button } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic

```tsx
<Button>Click Me</Button>
```

### Variant Examples

```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Delete</Button>
<Button variant="secondary">Secondary</Button>
```

### Size Examples

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

---

## 🧠 `asChild` Prop

Use `asChild` to render a different element (like `<Link>`) with button styles:

```tsx
import Link from 'next/link'

<Button asChild>
	<Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

---

## 🎨 Styling

The default button uses semantic theme tokens (`bg-primary`, `hover:bg-secondary/60`) that automatically adapt to light/dark modes. You can override or extend styles using the `className` prop:

```tsx
<Button className="bg-destructive hover:bg-destructive/90">Custom</Button>
```

### Theming

Customize button colors by overriding CSS variables:

```css
:root {
  --primary: hsl(95 9% 39%);          /* default button background */
  --primary-foreground: hsl(0 0% 98%); /* default button text */
  --secondary: hsl(350 99% 60%);       /* hover background */
}
.dark {
  --primary: hsl(0 0% 98%);
  --primary-foreground: hsl(0 0% 9%);
  --secondary: hsl(0 0% 14.9%);
}
```

---

## 📋 Props

Inherits all native `button` attributes, plus:

| Prop       | Type       | Description                                               |
|------------|------------|-----------------------------------------------------------|
| `variant`  | string     | One of: `default`, `outline`, `ghost`, `link`, `destructive`, `secondary`, `static` |
| `size`     | string     | One of: `sm`, `default`, `lg`, `icon`                     |
| `asChild`  | boolean    | If `true`, renders `Slot` instead of `button`             |
| `className`| string     | Tailwind utility classes to override or extend styles     |

---

## 🧪 Testing Tips

- Use `getByRole('button')` in tests
- Check `disabled` state visually and functionally
- Ensure accessibility via `aria-*` attributes if needed

---

## 🧱 Example With Icons

```tsx
import { ArrowRight } from 'lucide-react'
import { Button } from '@flavioespinoza/salsa-ui'

<Button>
	Next <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

---

## 🔗 Related

- [class-variance-authority](https://github.com/joe-bell/cva)
- [Tailwind CSS Button Styling](https://tailwindcss.com/docs)
