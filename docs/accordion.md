# Accordion

The `Accordion` component displays collapsible content sections. Built with Radix UI for full accessibility and smooth animations.

---

## ✨ Features

- Single or multiple items can be open at once
- Smooth expand/collapse animations
- Fully accessible with keyboard navigation
- Composable with flexible layouts
- Chevron rotation animation
- Supports controlled and uncontrolled modes

---

## 📦 Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Accordion (Single Item Open)

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Items Open

```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can multiple be open?</AccordionTrigger>
    <AccordionContent>
      Yes! Use type="multiple" to allow multiple items to be open.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Another question?</AccordionTrigger>
    <AccordionContent>
      Yes, you can open this at the same time as the first.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Controlled Accordion

```tsx
const [value, setValue] = useState('item-1')

<Accordion type="single" value={value} onValueChange={setValue}>
  <AccordionItem value="item-1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>Content for first item</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Item</AccordionTrigger>
    <AccordionContent>Content for second item</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## 📋 Props

### Accordion

| Prop            | Type     | Description                                  |
|-----------------|----------|----------------------------------------------|
| `type`          | string   | `"single"` or `"multiple"`                   |
| `collapsible`   | boolean  | Allow closing all items (single type only)   |
| `value`         | string   | Controlled value (single type)               |
| `defaultValue`  | string   | Initial value (single type, uncontrolled)    |
| `onValueChange` | function | Callback when value changes                  |

### AccordionItem

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `value`    | string | Unique identifier for this item |
| `disabled` | boolean| Disable this item               |
| `className`| string | Additional Tailwind classes     |

### AccordionTrigger

Standard button props plus:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

### AccordionContent

Standard div props plus:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

---

## 🧱 Common Patterns

### FAQ Section

```tsx
<div className="space-y-4">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="shipping">
      <AccordionTrigger>What are your shipping options?</AccordionTrigger>
      <AccordionContent>
        We offer standard (5-7 days), express (2-3 days), and overnight shipping.
        Free shipping on orders over $50.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="returns">
      <AccordionTrigger>What is your return policy?</AccordionTrigger>
      <AccordionContent>
        We accept returns within 30 days of purchase. Items must be unused
        and in original packaging.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="warranty">
      <AccordionTrigger>Do you offer warranties?</AccordionTrigger>
      <AccordionContent>
        Yes! All products come with a 1-year manufacturer warranty.
        Extended warranties are available for purchase.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>
```

### Documentation Sections

```tsx
<Accordion type="multiple" className="w-full">
  <AccordionItem value="installation">
    <AccordionTrigger>Installation</AccordionTrigger>
    <AccordionContent>
      <pre><code>npm install @flavioespinoza/salsa-ui</code></pre>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="usage">
    <AccordionTrigger>Usage</AccordionTrigger>
    <AccordionContent>
      <p>Import the components you need:</p>
      <pre><code>import &#123; Button &#125; from '@flavioespinoza/salsa-ui'</code></pre>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="configuration">
    <AccordionTrigger>Configuration</AccordionTrigger>
    <AccordionContent>
      <p>Add to your tailwind.config.js...</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Settings Panel

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="profile">
    <AccordionTrigger>Profile Settings</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Display Name</Label>
          <Input id="name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="notifications">
    <AccordionTrigger>Notification Preferences</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notif">Email Notifications</Label>
          <Switch id="email-notif" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notif">Push Notifications</Label>
          <Switch id="push-notif" />
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### With Icons

```tsx
import { User, Bell, Shield } from 'lucide-react'

<Accordion type="single" collapsible>
  <AccordionItem value="account">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <User className="h-4 w-4" />
        <span>Account</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>Account settings content...</AccordionContent>
  </AccordionItem>

  <AccordionItem value="notifications">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <Bell className="h-4 w-4" />
        <span>Notifications</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>Notification settings...</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## 🎨 Styling

Customize accordion appearance:

```tsx
{/* Custom border and spacing */}
<AccordionItem className="border-2 rounded-lg mb-2 px-4">
  <AccordionTrigger className="hover:no-underline">
    Custom Styled Item
  </AccordionTrigger>
  <AccordionContent className="text-muted-foreground">
    Content with custom styling
  </AccordionContent>
</AccordionItem>
```

---

## 🧪 Testing Tips

- Test keyboard navigation (Tab, Enter, Arrow keys)
- Verify single vs multiple modes
- Check animation smoothness
- Test with screen readers
- Verify disabled items don't open
- Test controlled mode updates

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Enter/Space toggle items
- Arrow keys navigate between items
- Proper ARIA attributes
- Focus management included
- Screen reader announcements

---

## 🔗 Related

- [Radix UI Accordion](https://www.radix-ui.com/docs/primitives/components/accordion)
- [Tabs](tabs.md) - Alternative content organization
- [Collapsible](https://www.radix-ui.com/docs/primitives/components/collapsible) - Single collapsible section
