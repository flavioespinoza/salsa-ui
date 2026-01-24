# Custom Icon Components

This module provides custom SVG icon components used throughout the `@flavioespinoza/salsa-ui` design system. Each icon is a reusable React component styled via `currentColor` and accepts an optional `className` prop for Tailwind styling.

---

## ✅ Available Icons

| Component Name           | Description              |
|--------------------------|--------------------------|
| `HomeIcon`               | Navigation home icon     |
| `MyNodesIcon`            | Nodes or network icon    |
| `StakingIcon`            | Staking-related icon     |
| `AirdropsIcon`           | Airdrops symbol          |
| `OrchestrationNodeIcon`  | Complex node structure   |
| `SettingsIcon`           | Settings gear icon       |
| `ReferralsIcon`          | Referral or share icon   |
| `DocumentationIcon`      | Docs/search/magnify icon |
| `LogoutIcon`             | Log out arrow icon       |
| `MenuIcon`               | Expand/collapse sidebar  |
| `LogoIcon`               | Custom brand logo icon   |

---

## 📦 Import

```tsx
import { HomeIcon, SettingsIcon } from '@flavioespinoza/salsa-ui'
```

---

## 🧠 Usage Example

```tsx
<HomeIcon className="h-5 w-5 text-muted-foreground" />
<SettingsIcon className="h-6 w-6 text-primary" />
```

Each icon defaults to 18×18 size unless otherwise specified. You can override size, color, margin, etc. via Tailwind.

---

## 💡 Props

| Prop        | Type     | Default | Description                           |
|-------------|----------|---------|---------------------------------------|
| `className` | `string` | `''`    | Custom Tailwind classes               |
| `onClick`   | `() => void` | optional | Only available on `MenuIcon`, `LogoIcon` |

---

## 🎨 Theming

All icons use `currentColor` for their fill/stroke, meaning they automatically inherit the text color from their parent element. This makes them fully compatible with semantic color tokens.

### Using Semantic Tokens

```tsx
<HomeIcon className="text-foreground" />
<SettingsIcon className="text-muted-foreground" />
<LogoutIcon className="text-destructive hover:text-destructive/80" />
```

### Customizing via CSS Variables

Icons inherit from the parent's color, so customize by setting text color variables:

```css
:root {
	--foreground: hsl(0 0% 3.9%);
	--muted-foreground: hsl(0 0% 45.1%);
}

.dark {
	--foreground: hsl(0 0% 98%);
	--muted-foreground: hsl(0 0% 63.9%);
}
```

### Light/Dark Mode

Icons automatically adapt to light and dark modes when using semantic color tokens like `text-foreground` or `text-muted-foreground`.

### Styling Tips

To animate or add interactivity:

```tsx
<MenuIcon className="transition-transform hover:scale-110" />
```

---

## 🧪 Testing

To test if an icon renders correctly:

```tsx
import { render } from '@testing-library/react'
import { LogoutIcon } from '@flavioespinoza/salsa-ui'

test('renders logout icon', () => {
	const { container } = render(<LogoutIcon className="text-black" />)
	expect(container.querySelector('svg')).toBeInTheDocument()
})
```

---

## 🔗 Related

- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS Sizing](https://tailwindcss.com/docs/width)
