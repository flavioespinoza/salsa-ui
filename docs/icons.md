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
<SettingsIcon className="h-6 w-6 text-pink-600" />
```

Each icon defaults to 18×18 size unless otherwise specified. You can override size, color, margin, etc. via Tailwind.

---

## 💡 Props

| Prop        | Type     | Default | Description                           |
|-------------|----------|---------|---------------------------------------|
| `className` | `string` | `''`    | Custom Tailwind classes               |
| `onClick`   | `() => void` | optional | Only available on `MenuIcon`, `LogoIcon` |

---

## 🎨 Styling Tips

Use `currentColor` in SVG ensures the icon inherits its color from the parent. You can apply Tailwind like:

```tsx
<LogoutIcon className="text-red-500 hover:text-red-700" />
```

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
