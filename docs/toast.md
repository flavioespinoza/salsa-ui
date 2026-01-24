# Toast

The `Toast` component provides dismissible notification messages with variant support. Built with Radix UI Toast primitives for accessible, animated notifications.

---

## 📦 Import

```tsx
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Toast

```tsx
<ToastProvider>
  <Toast>
    <ToastTitle>Notification</ToastTitle>
    <ToastDescription>Your changes have been saved.</ToastDescription>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>
```

### Destructive Toast

```tsx
<Toast variant="destructive">
  <ToastTitle>Error</ToastTitle>
  <ToastDescription>Something went wrong.</ToastDescription>
  <ToastAction altText="Try again">Try again</ToastAction>
  <ToastClose />
</Toast>
```

---

## 📋 Props

### Toast

| Prop        | Type                          | Description                              |
|-------------|-------------------------------|------------------------------------------|
| `variant`   | `'default' \| 'destructive'`  | Visual style variant                     |
| `className` | `string`                      | Additional Tailwind classes              |

### ToastAction

| Prop       | Type   | Description                               |
|------------|--------|-------------------------------------------|
| `altText`  | string | Accessible label for the action           |
| `className`| string | Additional Tailwind classes               |

### ToastTitle / ToastDescription

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

---

## 🎨 Theming

The Toast component uses semantic color tokens for the destructive variant and interactive elements:

- **Destructive variant**: `bg-destructive text-destructive-foreground border-destructive`
- **Close button**: `text-foreground/50` with `hover:text-foreground`
- **Destructive close**: `text-destructive-foreground/70` with `hover:text-destructive-foreground`
- **Action button**: `hover:bg-secondary`, `ring-ring`, `ring-offset-background`
- **Destructive action**: `hover:bg-destructive`, `hover:text-destructive-foreground`, `focus:ring-destructive`

Override these CSS variables to customize toast appearance:

```css
:root {
  --destructive: hsl(0 84.2% 60.2%);
  --destructive-foreground: hsl(0 0% 98%);
  --foreground: hsl(0 0% 3.9%);
  --secondary: hsl(0 0% 96.1%);
}
.dark {
  --destructive: hsl(0 62.8% 30.6%);
  --destructive-foreground: hsl(0 0% 98%);
  --foreground: hsl(0 0% 98%);
  --secondary: hsl(0 0% 14.9%);
}
```

### Light/Dark Mode

The destructive variant, close button, and action button all adapt automatically between light and dark modes via CSS variables:

- **Light mode**: Destructive toast shows a red background with white text; close/action buttons use dark foreground tones
- **Dark mode**: Destructive toast uses a deeper red; close/action buttons use light foreground tones

```tsx
{/* Both variants adapt to the current theme */}
<Toast>
  <ToastTitle>Saved</ToastTitle>
  <ToastDescription>Your settings have been updated.</ToastDescription>
  <ToastClose />
</Toast>

<Toast variant="destructive">
  <ToastTitle>Error</ToastTitle>
  <ToastDescription>Failed to save changes.</ToastDescription>
  <ToastAction altText="Retry">Retry</ToastAction>
  <ToastClose />
</Toast>
```

---

## 🧪 Testing Tips

- Test both default and destructive variants render correctly
- Verify close button dismisses the toast
- Test action button triggers callback
- Ensure swipe gestures work for dismissal
- Check accessibility with screen readers

---

## 🔗 Related

- [Radix UI Toast](https://www.radix-ui.com/docs/primitives/components/toast)
- [Sonner](sonner.md) - Alternative toast library also available in this project
- [Alert](alert.md) - For inline notification messages
