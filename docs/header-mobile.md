# HeaderMobile

Mobile header variation with logo and menu button. Designed for smaller screens.

---

## 📦 Import

```tsx
import { HeaderMobile } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

```tsx
<HeaderMobile />
```

---

## 🎨 Theming

The HeaderMobile component uses semantic color tokens that automatically adapt to light and dark modes:

- `text-foreground` - Text color for logo and menu button

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

The mobile header automatically adapts to light and dark modes. Text colors invert appropriately for proper contrast on both light and dark backgrounds.

---

## 🔗 Related

- [Header](header.md) - Desktop variant
- [SideNav](side-nav.md) - Sidebar navigation
