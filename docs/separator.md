# Separator

The `Separator` component visually separates content with a horizontal or vertical line. Built with Radix UI for semantic HTML and accessibility.

---

## ✨ Features

- Horizontal and vertical orientations
- Decorative or semantic separators
- Accessible with proper ARIA attributes
- Customizable with Tailwind CSS
- Thin, elegant design

---

## 📦 Import

```tsx
import { Separator } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Horizontal Separator

```tsx
<div>
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>
```

### Vertical Separator

```tsx
<div className="flex h-5 items-center space-x-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>
```

### In Navigation

```tsx
<nav className="flex items-center space-x-4">
  <a href="/">Home</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="/about">About</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="/contact">Contact</a>
</nav>
```

---

## 📋 Props

Inherits all Radix UI Separator props:

| Prop          | Type    | Description                                    |
|---------------|---------|------------------------------------------------|
| `orientation` | string  | `horizontal` (default) or `vertical`           |
| `decorative`  | boolean | If true, separator is decorative (default: true)|
| `className`   | string  | Additional Tailwind classes                    |

---

## 🧱 Common Patterns

### Section Divider

```tsx
<div className="space-y-4">
  <section>
    <h2 className="text-2xl font-bold">Section 1</h2>
    <p>Content for section 1</p>
  </section>

  <Separator className="my-8" />

  <section>
    <h2 className="text-2xl font-bold">Section 2</h2>
    <p>Content for section 2</p>
  </section>
</div>
```

### Card Content Divider

```tsx
<Card>
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
  </CardHeader>
  <Separator />
  <CardContent className="pt-6">
    <p>Profile information goes here</p>
  </CardContent>
  <Separator />
  <CardFooter>
    <Button>Edit Profile</Button>
  </CardFooter>
</Card>
```

### Menu Items

```tsx
<div className="space-y-2 p-2">
  <button className="w-full text-left px-2 py-1">Profile</button>
  <button className="w-full text-left px-2 py-1">Settings</button>
  <Separator className="my-2" />
  <button className="w-full text-left px-2 py-1 text-destructive">
    Logout
  </button>
</div>
```

### Breadcrumb Navigation

```tsx
<div className="flex items-center space-x-2 text-sm">
  <a href="/">Home</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="/products">Products</a>
  <Separator orientation="vertical" className="h-4" />
  <span className="text-muted-foreground">Item Details</span>
</div>
```

### Stats Display

```tsx
<div className="flex items-center justify-around py-4">
  <div className="text-center">
    <div className="text-2xl font-bold">1,234</div>
    <div className="text-sm text-muted-foreground">Followers</div>
  </div>

  <Separator orientation="vertical" className="h-12" />

  <div className="text-center">
    <div className="text-2xl font-bold">567</div>
    <div className="text-sm text-muted-foreground">Following</div>
  </div>

  <Separator orientation="vertical" className="h-12" />

  <div className="text-center">
    <div className="text-2xl font-bold">89</div>
    <div className="text-sm text-muted-foreground">Posts</div>
  </div>
</div>
```

---

## 🎨 Styling

Customize separator appearance:

```tsx
{/* Thicker separator */}
<Separator className="h-[2px]" />

{/* Custom color */}
<Separator className="bg-primary" />

{/* Dashed separator */}
<Separator className="border-t border-dashed bg-transparent" />

{/* With spacing */}
<Separator className="my-8" />
```

---

## 🧪 Testing Tips

- Verify orientation renders correctly
- Check responsive behavior
- Test with different parent containers
- Ensure accessibility with screen readers

---

## ⚠️ Accessibility Notes

- Use `decorative={true}` (default) for visual separators
- Use `decorative={false}` for semantic separators that convey meaning
- Semantic separators get proper ARIA roles
- Horizontal is the default orientation

---

## 🔗 Related

- [Radix UI Separator](https://www.radix-ui.com/docs/primitives/components/separator)
- [Card](card.md) - Often used with separators
