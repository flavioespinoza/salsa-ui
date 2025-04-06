# Checkbox

The `Checkbox` component from `@flavioespinoza/salsa-ui` is a custom-styled wrapper around [@radix-ui/react-checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox) that provides consistent appearance, accessibility, and visual feedback across your UI.

It uses TailwindCSS for styling and includes a custom checkmark icon using `lucide-react`.

---

## ✨ Features

- Based on Radix UI primitives
- Fully accessible with keyboard support
- Styled with Tailwind CSS utility classes
- Custom animated checkmark
- Custom `hotpink` + `sage` theme by default

---

## 📦 Import

```tsx
import { Checkbox } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic

```tsx
'use client'

import { Checkbox } from '@flavioespinoza/salsa-ui'

export default function Example() {
	return (
		<label className="flex items-center gap-2">
			<Checkbox />
			<span className="text-sm">Accept terms and conditions</span>
		</label>
	)
}
```

---

## 🧠 Controlled Usage

```tsx
'use client'

import { useState } from 'react'
import { Checkbox } from '@flavioespinoza/salsa-ui'

export default function ControlledCheckbox() {
	const [checked, setChecked] = useState(false)

	return (
		<div className="flex items-center space-x-2">
			<Checkbox checked={checked} onCheckedChange={setChecked} />
			<span className="text-sm">Subscribe to newsletter</span>
		</div>
	)
}
```

---

## 🎨 Styling

The checkbox uses Tailwind utility classes with a default theme:

- `border-primary`
- `bg-sage-200`
- `data-[state=checked]:bg-hotpink-500`
- `data-[state=checked]:text-white`

You can override these with the `className` prop:

```tsx
<Checkbox className="border-red-500 data-[state=checked]:bg-red-500" />
```

---

## 📋 Props

This component passes all props to `@radix-ui/react-checkbox`.

| Prop               | Type                                 | Description                                |
|--------------------|--------------------------------------|--------------------------------------------|
| `checked`          | `boolean`                            | Manually control the checkbox state        |
| `defaultChecked`   | `boolean`                            | Initial checked state                      |
| `onCheckedChange`  | `(checked: boolean) => void`         | Triggered when the state changes           |
| `disabled`         | `boolean`                            | Disables the checkbox                      |
| `className`        | `string`                             | Tailwind class overrides                   |

---

## 🧩 Dependencies

- [@radix-ui/react-checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox)
- [lucide-react](https://www.npmjs.com/package/lucide-react)

---

## 🧪 Testing Tips

- Use `getByRole('checkbox')` in your tests
- Test both checked and unchecked visual states
- Ensure keyboard toggling works via `space` key

---

## 🧱 Example in Forms

```tsx
<form>
	<label className="flex items-center gap-2">
		<Checkbox required />
		<span className="text-sm">I agree to the terms</span>
	</label>
</form>
```

---

## 📝 Notes

- This checkbox is styled to match the Salsa UI theme (`hotpink`, `sage`)
- Fully customizable using utility classes or by extending in your own component
