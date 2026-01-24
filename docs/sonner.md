# Sonner

Toast notifications using the Sonner library. Provides accessible, customizable toast notifications for success, error, and informational messages.

---

## 📦 Import

```tsx
import { SonnerToaster } from '@flavioespinoza/salsa-ui'
import { toast } from 'sonner'
```

---

## 🚀 Usage

### Setup

Add the `SonnerToaster` component to your app layout:

```tsx
// app/layout.tsx
import { SonnerToaster } from '@flavioespinoza/salsa-ui'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SonnerToaster />
      </body>
    </html>
  )
}
```

### Showing Toasts

```tsx
import { toast } from 'sonner'

// Success toast
toast.success('Changes saved successfully')

// Error toast
toast.error('Something went wrong')

// Info toast
toast('This is an informational message')

// With description
toast.success('Profile updated', {
  description: 'Your changes have been saved.'
})
```

---

## 🎨 Theming

The Toast component uses semantic color tokens that automatically adapt to light and dark modes:

- `bg-card` - Toast background
- `text-card-foreground` - Toast text color
- `border-border` - Toast border
- `bg-destructive` - Destructive toast background
- `text-destructive-foreground` - Destructive toast text

### Customizing via CSS Variables

Override toast colors by setting CSS variables:

```css
:root {
	--card: hsl(0 0% 100%);
	--card-foreground: hsl(0 0% 3.9%);
	--destructive: hsl(0 84% 60%);
	--destructive-foreground: hsl(0 0% 100%);
}

.dark {
	--card: hsl(0 0% 7%);
	--card-foreground: hsl(0 0% 98%);
	--destructive: hsl(0 84% 60%);
	--destructive-foreground: hsl(0 0% 100%);
}
```

### Light/Dark Mode

Toasts automatically adapt to light and dark modes. The background, text, and border colors adjust for proper contrast in both modes.

---

## 📋 Toast Options

| Option        | Type      | Description                           |
|---------------|-----------|---------------------------------------|
| `description` | string    | Secondary text below the title        |
| `duration`    | number    | Time in ms before auto-dismiss        |
| `action`      | object    | Action button config                  |
| `cancel`      | object    | Cancel button config                  |

---

## 🧱 Common Patterns

### With Action Button

```tsx
toast('File deleted', {
  description: 'The file has been moved to trash.',
  action: {
    label: 'Undo',
    onClick: () => restoreFile()
  }
})
```

### Promise Toast

```tsx
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Data saved successfully',
  error: 'Failed to save data'
})
```

---

## 🧩 Dependencies

- [sonner](https://sonner.emilkowal.ski/)

---

## 🔗 Related

- [Alert](alert.md) - For inline notifications
- [Badge](badge.md) - For status indicators
