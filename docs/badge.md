# Badge

The `Badge` component displays small status indicators, labels, or tags. Built with class-variance-authority for flexible styling with multiple variants.

---

## ✨ Features

- Six visual variants: `default`, `secondary`, `destructive`, `outline`, `success`, `warning`
- Compact, inline design perfect for status indicators
- Fully customizable with Tailwind CSS
- Consistent styling across your app
- Hover states included

---

## 📦 Import

```tsx
import { Badge } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Badge

```tsx
<Badge>Default</Badge>
```

### Variant Examples

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
```

### With Icons

```tsx
import { Check, X, AlertTriangle } from 'lucide-react'

<Badge variant="success">
  <Check className="mr-1 h-3 w-3" />
  Verified
</Badge>

<Badge variant="destructive">
  <X className="mr-1 h-3 w-3" />
  Failed
</Badge>

<Badge variant="warning">
  <AlertTriangle className="mr-1 h-3 w-3" />
  Pending
</Badge>
```

---

## 📋 Props

Inherits all native `div` attributes, plus:

| Prop       | Type   | Description                                                          |
|------------|--------|----------------------------------------------------------------------|
| `variant`  | string | One of: `default`, `secondary`, `destructive`, `outline`, `success`, `warning` |
| `className`| string | Additional Tailwind classes                                          |

---

## 🎨 Styling

Customize badge appearance with Tailwind:

```tsx
<Badge className="text-xs">Small Badge</Badge>
<Badge className="text-sm px-4 py-1">Large Badge</Badge>
<Badge className="rounded-full">Rounded</Badge>
```

---

## 🧱 Common Patterns

### Status Indicators

```tsx
<div className="flex items-center gap-2">
  <span>Order Status:</span>
  <Badge variant="success">Delivered</Badge>
</div>

<div className="flex items-center gap-2">
  <span>Build Status:</span>
  <Badge variant="warning">In Progress</Badge>
</div>

<div className="flex items-center gap-2">
  <span>Test Status:</span>
  <Badge variant="destructive">Failed</Badge>
</div>
```

### Tag Lists

```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="secondary">React</Badge>
  <Badge variant="secondary">TypeScript</Badge>
  <Badge variant="secondary">Tailwind</Badge>
  <Badge variant="secondary">Next.js</Badge>
</div>
```

### Count Badges

```tsx
<Button variant="outline" className="relative">
  Notifications
  <Badge className="ml-2" variant="destructive">
    12
  </Badge>
</Button>
```

### Table Status Cells

```tsx
<table>
  <tbody>
    <tr>
      <td>User 1</td>
      <td>
        <Badge variant="success">Active</Badge>
      </td>
    </tr>
    <tr>
      <td>User 2</td>
      <td>
        <Badge variant="outline">Inactive</Badge>
      </td>
    </tr>
  </tbody>
</table>
```

---

## 🧪 Testing Tips

- Verify different variants render with correct colors
- Check badge text visibility and contrast
- Test responsiveness on different screen sizes
- Ensure icons align properly with text

---

## 🔗 Related

- [Button](button.md) - For interactive elements
- [Alert](alert.md) - For larger notifications
