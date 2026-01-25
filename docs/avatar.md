# Avatar

The `Avatar` component displays user profile images with automatic fallback support. Built with Radix UI for accessibility and smooth image loading states.

---

## ✨ Features

- Automatic fallback when image fails to load
- Radix UI powered for accessibility
- Customizable size with Tailwind classes
- Supports initials, icons, or custom fallback content
- Circular by default with smooth transitions

---

## 📦 Import

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Avatar with Fallback

```tsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

### Avatar with Initials Fallback

```tsx
<Avatar>
  <AvatarImage src="/avatars/john-doe.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Avatar with Icon Fallback

```tsx
import { User } from 'lucide-react'

<Avatar>
  <AvatarImage src="/avatars/user.jpg" />
  <AvatarFallback>
    <User className="h-4 w-4" />
  </AvatarFallback>
</Avatar>
```

### Different Sizes

```tsx
// Small
<Avatar className="h-8 w-8">
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

// Default (40px)
<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

// Large
<Avatar className="h-16 w-16">
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback className="text-lg">LG</AvatarFallback>
</Avatar>
```

---

## 📋 Props

### Avatar

Inherits all Radix UI Avatar.Root props, plus:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

### AvatarImage

Inherits all Radix UI Avatar.Image props:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `src`      | string | Image source URL                |
| `alt`      | string | Alternative text for image      |
| `className`| string | Additional Tailwind classes     |

### AvatarFallback

Inherits all Radix UI Avatar.Fallback props:

| Prop       | Type      | Description                     |
|------------|-----------|---------------------------------|
| `children` | ReactNode | Fallback content (initials/icon)|
| `className`| string    | Additional Tailwind classes     |

---

## 🧱 Common Patterns

### User Profile Display

```tsx
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="/users/jane.jpg" alt="Jane Smith" />
    <AvatarFallback>JS</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">Jane Smith</p>
    <p className="text-xs text-muted-foreground">jane@example.com</p>
  </div>
</div>
```

### Avatar Group

```tsx
<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="/avatar-1.jpg" />
    <AvatarFallback>A1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/avatar-2.jpg" />
    <AvatarFallback>A2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/avatar-3.jpg" />
    <AvatarFallback>A3</AvatarFallback>
  </Avatar>
</div>
```

### With Status Indicator

```tsx
<div className="relative">
  <Avatar>
    <AvatarImage src="/avatar.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-background" />
</div>
```

---

## 🎨 Styling

Customize the avatar appearance:

```tsx
<Avatar className="h-12 w-12 border-2 border-primary">
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback className="bg-primary text-primary-foreground">
    AB
  </AvatarFallback>
</Avatar>
```

---

## 🧪 Testing Tips

- Test image loading and fallback behavior
- Verify alt text for accessibility
- Check different viewport sizes for responsive behavior
- Ensure fallback displays when image fails

---

## 🔗 Related

- [Radix UI Avatar](https://www.radix-ui.com/docs/primitives/components/avatar)
- [Badge](badge.md) - For status indicators
