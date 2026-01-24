# Input

The `Input` component from `@flavioespinoza/salsa-ui` is a styled wrapper around the native HTML `<input>` element. It provides consistent design, accessibility, and responsive behavior across forms using Tailwind CSS.

---

## ✨ Features

- Full width, responsive input
- Rounded corners and consistent padding
- Focus ring and disabled state styling
- Compatible with all native input props
- Uses Tailwind CSS utility classes

---

## 📦 Import

```tsx
import { Input } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Example

```tsx
<Input type="text" placeholder="Enter your name" />
```

---

## 🧠 Controlled Usage

```tsx
import { useState } from 'react'
import { Input } from '@flavioespinoza/salsa-ui'

export default function ControlledInput() {
	const [email, setEmail] = useState('')

	return (
		<Input
			type="email"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
			placeholder="you@example.com"
		/>
	)
}
```

---

## 🎨 Styling

The input uses semantic theme tokens for automatic light/dark mode support:

- `h-10 w-full rounded-md`
- `bg-input-background` — background via `--input-background` CSS variable
- `border-input` — border via `--input` CSS variable
- `text-base md:text-sm`
- `focus-visible:ring-2 ring-ring` — focus ring via `--ring` CSS variable
- `disabled:opacity-50`

You can customize it using the `className` prop:

```tsx
<Input className="border-destructive focus-visible:ring-destructive" />
```

### Theming

Override CSS variables to customize input appearance:

```css
:root {
  --input-background: hsl(82 8% 80%); /* input background */
  --input: hsl(0 0% 89.8%);           /* input border */
  --ring: hsl(350 99% 60%);           /* focus ring */
}
.dark {
  --input-background: hsl(0 0% 14.9%);
  --input: hsl(0 0% 14.9%);
  --ring: hsl(0 0% 83.1%);
}
```

---

## 📋 Props

All native `<input>` props are supported:

| Prop        | Type     | Description                         |
|-------------|----------|-------------------------------------|
| `type`      | string   | Input type (e.g., `text`, `email`)  |
| `value`     | string   | Controlled value                    |
| `onChange`  | function | Input change handler                |
| `placeholder` | string | Placeholder text                    |
| `disabled`  | boolean  | Disables the input                  |
| `className` | string   | Tailwind utility class overrides    |

---

## 🧪 Testing Tips

- Use `getByPlaceholderText()` or `getByRole('textbox')`
- Test `disabled`, `focus`, and validation states

---

## 🧱 Example in Forms

```tsx
<form className="space-y-4">
	<label className="block text-sm font-medium">Email</label>
	<Input type="email" placeholder="you@example.com" required />
</form>
```

---

## 🔗 Related

- [MDN Input Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [Tailwind CSS Forms](https://tailwindcss.com/docs/width#forms)
