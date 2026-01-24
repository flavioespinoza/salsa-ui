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
<SettingsIcon className="h-6 w-6 text-secondary" />
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

All SVG icons use `currentColor` for fills and strokes, so they inherit their color from the parent text color. Apply Tailwind color utilities:

```tsx
<LogoutIcon className="text-destructive hover:text-destructive/80" />
```

To animate or add interactivity:

```tsx
<MenuIcon className="transition-transform hover:scale-110" />
```

---

## 🎨 Theming

Icons use `currentColor` throughout — they inherit color from whatever semantic token is applied to the parent or directly via `className`. This means icons automatically adapt to light/dark mode themes:

- **Default icons**: Styled with `text-muted-foreground` in navigation contexts
- **Active icons**: Styled with `text-foreground` when the route is active
- **Logo icon**: Uses `currentColor` for all SVG paths, adapting to the parent's text color

The relevant CSS variables:

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

Icons adapt automatically — no component-level overrides needed:

- **Light mode**: Icons render in dark tones (`--foreground`) or muted gray (`--muted-foreground`)
- **Dark mode**: Icons render in light tones, ensuring visibility on dark backgrounds

```tsx
{/* Adapts to both modes */}
<HomeIcon className="text-muted-foreground" />

{/* Active state in both modes */}
<HomeIcon className="text-foreground" />

{/* Semantic color */}
<SettingsIcon className="text-secondary" />
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
