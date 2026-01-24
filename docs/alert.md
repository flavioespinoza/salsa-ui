# Alert

The `Alert` component displays important messages and notifications to users. Built with class-variance-authority for flexible styling and multiple visual variants.

---

## ✨ Features

- Multiple variants: `default`, `destructive`, `success`, `warning`
- Support for icons and structured content
- Accessible with proper ARIA roles
- Composable with `AlertTitle` and `AlertDescription`
- Fully customizable with Tailwind CSS

---

## 📦 Import

```tsx
import { Alert, AlertTitle, AlertDescription } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Alert

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
```

### Alert with Icon

```tsx
import { Terminal } from 'lucide-react'

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
```

### Variant Examples

```tsx
// Default
<Alert variant="default">
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

// Destructive
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Alert>

// Success
<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>This action cannot be undone.</AlertDescription>
</Alert>
```

---

## 📋 Props

### Alert

Inherits all native `div` attributes, plus:

| Prop       | Type   | Description                                           |
|------------|--------|-------------------------------------------------------|
| `variant`  | string | One of: `default`, `destructive`, `success`, `warning` |
| `className`| string | Additional Tailwind classes                           |

### AlertTitle

Inherits all native `h5` attributes.

### AlertDescription

Inherits all native `div` attributes.

---

## 🎨 Theming

The Alert component uses semantic color tokens that automatically adapt to light and dark modes:

- `default` - Uses `bg-background` with `border-border`
- `destructive` - Uses `border-destructive/50` and `text-destructive`
- `success` - Uses `border-success/50` and `text-success`
- `warning` - Uses `border-warning/50` and `text-warning`

### Customizing via CSS Variables

Override alert colors by setting CSS variables:

```css
:root {
	--success: hsl(142 76% 36%);
	--warning: hsl(45 93% 47%);
	--destructive: hsl(0 84% 60%);
}

.dark {
	--success: hsl(142 76% 46%);
	--warning: hsl(45 93% 57%);
	--destructive: hsl(0 84% 70%);
}
```

### Customizing via className

```tsx
<Alert className="border-2">
  <AlertTitle>Custom Styling</AlertTitle>
  <AlertDescription>You can add custom classes to any part.</AlertDescription>
</Alert>
```

### Light/Dark Mode

Alerts automatically adapt to light and dark modes. The success and warning variants use slightly lighter colors in dark mode for better visibility.

---

## 🧪 Testing Tips

- Use `getByRole('alert')` to find alerts in tests
- Check visibility and content with appropriate queries
- Test different variants for proper styling

---

## 🧱 Common Patterns

### Dismissible Alert

```tsx
import { X } from 'lucide-react'
import { Button } from '@flavioespinoza/salsa-ui'

const [isVisible, setIsVisible] = useState(true)

{isVisible && (
  <Alert>
    <AlertTitle>Dismissible Alert</AlertTitle>
    <AlertDescription>You can close this alert.</AlertDescription>
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2"
      onClick={() => setIsVisible(false)}
    >
      <X className="h-4 w-4" />
    </Button>
  </Alert>
)}
```

---

## 🔗 Related

- [Badge](badge.md) - For smaller status indicators
- [Toast](toast.md) - For temporary notifications
