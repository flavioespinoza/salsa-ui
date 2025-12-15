# HoverCard

The `HoverCard` component displays rich content in a floating card when hovering over a trigger element. Built with Radix UI for accessibility and smooth animations.

---

## ✨ Features

- Shows content on hover with delay
- Fully accessible with keyboard support
- Smooth enter/exit animations
- Portal-based positioning
- Customizable open/close delays
- Works with mouse and keyboard

---

## 📦 Import

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic HoverCard

```tsx
<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Hover Card</h4>
      <p className="text-sm">
        This content appears when you hover over the trigger.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>
```

### User Profile Preview

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@johndoe</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/johndoe.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@johndoe</h4>
        <p className="text-sm">
          Software engineer and open source enthusiast.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### With Link Preview

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="https://example.com" className="underline">
      Example Link
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Example Website</h4>
      <p className="text-sm text-muted-foreground">
        A comprehensive guide to web development best practices.
      </p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <ExternalLink className="h-3 w-3" />
        <span>example.com</span>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

---

## 📋 Props

### HoverCard

Inherits all Radix UI HoverCard.Root props:

| Prop             | Type     | Description                              |
|------------------|----------|------------------------------------------|
| `open`           | boolean  | Controlled open state                    |
| `onOpenChange`   | function | Callback when open state changes         |
| `defaultOpen`    | boolean  | Initial open state (uncontrolled)        |
| `openDelay`      | number   | Delay before opening (default: 700ms)    |
| `closeDelay`     | number   | Delay before closing (default: 300ms)    |

### HoverCardTrigger

Inherits all Radix UI HoverCard.Trigger props:

| Prop       | Type    | Description                     |
|------------|---------|---------------------------------|
| `asChild`  | boolean | Render as child element         |
| `className`| string  | Additional Tailwind classes     |

### HoverCardContent

Inherits all Radix UI HoverCard.Content props:

| Prop         | Type   | Description                              |
|--------------|--------|------------------------------------------|
| `align`      | string | `start`, `center`, or `end` (default: center) |
| `side`       | string | `top`, `right`, `bottom`, or `left`      |
| `sideOffset` | number | Distance from trigger (default: 4px)     |
| `className`  | string | Additional Tailwind classes              |

---

## 🧱 Common Patterns

### Repository Card

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/repo" className="font-medium underline">
      my-awesome-project
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <FolderGit className="h-5 w-5" />
        <h4 className="text-sm font-semibold">my-awesome-project</h4>
      </div>
      <p className="text-sm text-muted-foreground">
        A modern web application built with React and TypeScript
      </p>
      <div className="flex gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3" />
          <span>1.2k</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          <span>234</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Product Preview

```tsx
<HoverCard openDelay={200}>
  <HoverCardTrigger asChild>
    <button className="text-sm hover:underline">
      Premium Headphones
    </button>
  </HoverCardTrigger>
  <HoverCardContent className="w-96">
    <div className="space-y-3">
      <img
        src="/product.jpg"
        alt="Product"
        className="w-full h-48 object-cover rounded"
      />
      <h4 className="font-semibold">Premium Wireless Headphones</h4>
      <p className="text-sm text-muted-foreground">
        High-fidelity audio with active noise cancellation
      </p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">$299.99</span>
        <Badge variant="success">In Stock</Badge>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Tooltip-like Usage

```tsx
<HoverCard openDelay={100} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="ghost" size="icon">
      <Info className="h-4 w-4" />
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-64" side="top">
    <p className="text-sm">
      This action will permanently delete your account and all associated data.
      This cannot be undone.
    </p>
  </HoverCardContent>
</HoverCard>
```

### Contact Card

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <span className="font-medium cursor-pointer">Contact Support</span>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">Support Team</h4>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>support@example.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Mon-Fri, 9am-5pm EST</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

---

## 🎨 Styling

Customize hover card appearance:

```tsx
<HoverCardContent className="w-96 bg-gradient-to-br from-blue-50 to-purple-50">
  <div>Custom styled content</div>
</HoverCardContent>
```

---

## 🧪 Testing Tips

- Test with mouse hover behavior
- Verify keyboard accessibility (focus trigger)
- Check open/close delays
- Test positioning on different screen edges
- Verify content doesn't overflow viewport
- Test with screen readers

---

## ⚠️ Accessibility Notes

- Hover cards are accessible via keyboard
- Focus on trigger shows the card
- Escape key closes the card
- Properly announced by screen readers
- Use sparingly - not all users can hover easily
- Consider mobile users (touch devices)

---

## 💡 Best Practices

- Keep content concise and scannable
- Don't put critical actions in hover cards
- Use appropriate open/close delays
- Consider mobile-friendly alternatives
- Don't nest hover cards
- Avoid hover cards on small touch targets

---

## 🔗 Related

- [Radix UI Hover Card](https://www.radix-ui.com/docs/primitives/components/hover-card)
- [Tooltip](tooltip.md) - For simple text hints
- [Popover](https://www.radix-ui.com/docs/primitives/components/popover) - Click-triggered alternative
