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

## 🎨 Styling & Theming

The Input component uses semantic color tokens that automatically adapt to light and dark modes.

### Default Styles

- `h-10 w-full rounded-md`
- `bg-input-background` - Uses theme-aware input background
- `border-input` - Uses theme-aware border color
- `text-base md:text-sm`
- `focus-visible:ring-2 ring-ring` - Focus ring from theme
- `disabled:opacity-50`

### Customizing via CSS Variables

Override the default colors by setting CSS variables:

```css
:root {
	--input-background: hsl(220 14% 96%);
	--input: hsl(220 13% 91%);
	--ring: hsl(221 83% 53%);
}
```

### Customizing via className

You can customize it using the `className` prop:

```tsx
<Input className="border-blue-500 focus-visible:ring-blue-500" />
```

### Light/Dark Mode

Inputs automatically adapt to light and dark modes. In dark mode, the background becomes darker for proper contrast.

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
