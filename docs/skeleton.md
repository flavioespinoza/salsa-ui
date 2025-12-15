# Skeleton

The `Skeleton` component displays a loading placeholder with a pulse animation while content is being fetched or processed.

---

## ✨ Features

- Smooth pulse animation
- Customizable size and shape
- Simple, single-component API
- Mimics content structure
- Works with all layouts

---

## 📦 Import

```tsx
import { Skeleton } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Skeleton

```tsx
<Skeleton className="h-4 w-[250px]" />
```

### Different Sizes

```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
```

### Circle Skeleton

```tsx
<Skeleton className="h-12 w-12 rounded-full" />
```

---

## 🧱 Common Patterns

### Card Skeleton

```tsx
<Card>
  <CardHeader>
    <Skeleton className="h-4 w-2/3" />
    <Skeleton className="h-3 w-1/2 mt-2" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-[200px] w-full" />
  </CardContent>
</Card>
```

### User Profile Skeleton

```tsx
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

### List Skeleton

```tsx
<div className="space-y-4">
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  ))}
</div>
```

### Article Skeleton

```tsx
<div className="space-y-4">
  <Skeleton className="h-8 w-3/4" /> {/* Title */}
  <Skeleton className="h-4 w-1/4" /> {/* Date */}
  <Skeleton className="h-[200px] w-full" /> {/* Image */}
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" /> {/* Paragraph */}
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>
```

### Table Skeleton

```tsx
<table className="w-full">
  <thead>
    <tr>
      <th><Skeleton className="h-4" /></th>
      <th><Skeleton className="h-4" /></th>
      <th><Skeleton className="h-4" /></th>
    </tr>
  </thead>
  <tbody>
    {Array.from({ length: 5 }).map((_, i) => (
      <tr key={i}>
        <td><Skeleton className="h-4" /></td>
        <td><Skeleton className="h-4" /></td>
        <td><Skeleton className="h-4" /></td>
      </tr>
    ))}
  </tbody>
</table>
```

### Loading State Component

```tsx
function UserCard({ user, loading }) {
  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center space-x-4 pt-6">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        {/* Actual user content */}
      </CardContent>
    </Card>
  )
}
```

---

## 📋 Props

Inherits all native `div` attributes:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

---

## 🎨 Styling

Customize skeleton appearance:

```tsx
{/* Slower animation */}
<Skeleton className="h-4 w-full animate-pulse-slow" />

{/* Different color */}
<Skeleton className="h-4 w-full bg-slate-200" />

{/* No rounded corners */}
<Skeleton className="h-4 w-full rounded-none" />
```

---

## 🧪 Testing Tips

- Verify skeleton matches content structure
- Test animation performance
- Check responsive behavior
- Ensure smooth transition to real content

---

## 💡 Best Practices

- Match skeleton dimensions to actual content
- Use skeletons for predictable loading states
- Keep skeleton structure similar to final layout
- Avoid too many different skeleton variations
- Consider using for initial page loads

---

## 🔗 Related

- [Progress](progress.md) - For deterministic loading
- [Card](card.md) - Often used with skeleton loading
