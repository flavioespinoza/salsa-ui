# Checkbox

A simple, accessible checkbox component built with [@radix-ui/react-checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox) and styled using Tailwind CSS. Includes an animated checkmark icon from `lucide-react`.

---

## ✅ Features

- Fully accessible and keyboard-navigable
- Styled with Tailwind and supports dark/light modes (if enabled)
- Uses Radix’s state-based styling with `data-[state=checked]`
- Custom checkmark icon via `lucide-react`

---

## 📦 Installation

This component is part of the `@flavioespinoza/salsa-ui` package.

```tsx
import { Checkbox } from '@flavioespinoza/salsa-ui'
```

---

## 🧱 Usage

### Basic Checkbox

```tsx
'use client'

import { Checkbox } from '@flavioespinoza/salsa-ui'

export default function Example() {
	return (
		<label className="flex items-center gap-2">
			<Checkbox />
			<span>Accept terms and conditions</span>
		</label>
	)
}
```

---

## 🛠️ Props

All native props from `@radix-ui/react-checkbox` are supported.

| Prop     | Type    | Description                              |
|----------|---------|------------------------------------------|
| `checked`  | `boolean` | Controls the checkbox state manually     |
| `defaultChecked` | `boolean` | Set the initial checked state       |
| `disabled` | `boolean` | Disables the checkbox                    |
| `onCheckedChange` | `(checked: boolean) => void` | Callback when checked state changes |

---

## 🎨 Styling

This checkbox uses Tailwind classes with support for theming via `border-primary` and `bg-primary`.

### Customization

You can add additional styles via the `className` prop:

```tsx
<Checkbox className="border-red-500 data-[state=checked]:bg-red-500" />
```

---

## 🧪 Example With Form

```tsx
import { useState } from 'react'
import { Checkbox } from '@flavioespinoza/salsa-ui'

export default function FormExample() {
	const [checked, setChecked] = useState(false)

	return (
		<form className="space-x-2">
			<Checkbox checked={checked} onCheckedChange={setChecked} />
			<label>Subscribe to newsletter</label>
		</form>
	)
}
```

---

## 📚 Related

- [Radix Docs – Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox)
- [Lucide React Icons](https://lucide.dev/icons/check)