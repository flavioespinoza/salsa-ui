# Label

The `Label` component provides accessible form labels using Radix UI. It automatically associates with form controls and supports all accessibility features.

---

## ✨ Features

- Accessible form labels with Radix UI
- Automatic association with form controls
- Peer state styling support
- Works with all form components
- Fully customizable with Tailwind CSS

---

## 📦 Import

```tsx
import { Label } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Label

```tsx
<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>
```

### With Required Indicator

```tsx
<Label htmlFor="username">
  Username <span className="text-destructive">*</span>
</Label>
<Input id="username" required />
```

### With Helper Text

```tsx
<div className="grid gap-1.5">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" />
  <p className="text-xs text-muted-foreground">
    Must be at least 8 characters long
  </p>
</div>
```

---

## 📋 Props

Inherits all Radix UI Label props and native `label` attributes:

| Prop       | Type   | Description                              |
|------------|--------|------------------------------------------|
| `htmlFor`  | string | ID of the form control to associate with |
| `className`| string | Additional Tailwind classes              |
| `children` | ReactNode | Label text content                    |

---

## 🧱 Common Patterns

### Form Field

```tsx
<div className="space-y-2">
  <Label htmlFor="name">Full Name</Label>
  <Input id="name" placeholder="John Doe" />
</div>
```

### With Checkbox

```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>
```

### With Radio Group

```tsx
<div className="space-y-2">
  <Label>Notification Settings</Label>
  <div className="flex items-center space-x-2">
    <input type="radio" id="all" name="notifications" />
    <Label htmlFor="all">All notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <input type="radio" id="important" name="notifications" />
    <Label htmlFor="important">Important only</Label>
  </div>
  <div className="flex items-center space-x-2">
    <input type="radio" id="none" name="notifications" />
    <Label htmlFor="none">None</Label>
  </div>
</div>
```

### With Switch

```tsx
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

### Disabled State

```tsx
<div className="grid gap-2">
  <Label htmlFor="disabled-input" className="cursor-not-allowed opacity-70">
    Disabled Field
  </Label>
  <Input id="disabled-input" disabled />
</div>
```

---

## 🎨 Styling

Customize label appearance:

```tsx
<Label className="text-lg font-bold">Large Bold Label</Label>
<Label className="text-xs text-muted-foreground">Small Muted Label</Label>
```

---

## 🧪 Testing Tips

- Verify clicking label focuses the associated input
- Test with screen readers for accessibility
- Check disabled states are properly styled
- Ensure peer states work correctly

---

## ⚠️ Accessibility Notes

- Always use `htmlFor` to associate with form controls
- Labels improve click target area for inputs
- Required for screen reader users
- Helps with focus management

---

## 🔗 Related

- [Input](input.md) - Text input component
- [Checkbox](checkbox.md) - Checkbox component
- [Switch](switch.md) - Toggle switch component
- [Radix UI Label](https://www.radix-ui.com/docs/primitives/components/label)
