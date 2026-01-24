# Header

Top navigation bar component for desktop layouts. Displays a logo and status indicator.

---

## 📦 Import

```tsx
import { Header } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

```tsx
<Header height="h-[74px]" />
```

---

## 📋 Props

| Prop     | Type   | Required | Description                          |
|----------|--------|----------|--------------------------------------|
| `height` | string | Yes      | Tailwind height class (e.g., `h-16`) |

---

## 🎨 Theming

The Header component uses semantic color tokens that automatically adapt to light and dark modes:

- `text-foreground` - Text color for logo and status

### Customizing via CSS Variables

Override header colors by setting CSS variables:

```css
:root {
	--foreground: hsl(0 0% 3.9%);
}

.dark {
	--foreground: hsl(0 0% 98%);
}
```

### Light/Dark Mode

The header automatically adapts to light and dark modes. Text colors invert appropriately for proper contrast.

---

## 🔗 Related

- [HeaderMobile](header-mobile.md) - Mobile variant
- [SideNav](side-nav.md) - Sidebar navigation
