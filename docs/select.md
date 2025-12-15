# Select

The `Select` component provides a dropdown menu for selecting from a list of options. Built with Radix UI for full accessibility and keyboard navigation.

---

## ✨ Features

- Fully accessible with keyboard navigation
- Search and filtering support
- Grouping and separators
- Scroll buttons for long lists
- Customizable trigger and items
- Portal-based dropdown positioning

---

## 📦 Import

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Select

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>
```

### Controlled Select

```tsx
const [value, setValue] = useState('')

<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### With Groups

```tsx
<Select>
  <SelectTrigger className="w-[250px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### With Form Label

```tsx
<div className="grid gap-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="au">Australia</SelectItem>
    </SelectContent>
  </Select>
</div>
```

---

## 📋 Props

### Select

Inherits all Radix UI Select.Root props:

| Prop            | Type     | Description                         |
|-----------------|----------|-------------------------------------|
| `value`         | string   | Controlled value                    |
| `onValueChange` | function | Callback when value changes         |
| `defaultValue`  | string   | Initial value (uncontrolled)        |
| `disabled`      | boolean  | Disable the select                  |

### SelectTrigger

Inherits button attributes:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

### SelectItem

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `value`    | string | Value when this item is selected|
| `disabled` | boolean| Disable this item               |
| `className`| string | Additional Tailwind classes     |

---

## 🧱 Common Patterns

### Form Field with Validation

```tsx
<div className="grid gap-2">
  <Label htmlFor="role">Role *</Label>
  <Select required>
    <SelectTrigger id="role" className={error ? 'border-destructive' : ''}>
      <SelectValue placeholder="Select your role" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Administrator</SelectItem>
      <SelectItem value="user">User</SelectItem>
      <SelectItem value="guest">Guest</SelectItem>
    </SelectContent>
  </Select>
  {error && <p className="text-xs text-destructive">{error}</p>}
</div>
```

### With Icons

```tsx
import { User, Shield, Star } from 'lucide-react'

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select role" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="user">
      <div className="flex items-center gap-2">
        <User className="h-4 w-4" />
        <span>User</span>
      </div>
    </SelectItem>
    <SelectItem value="admin">
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4" />
        <span>Admin</span>
      </div>
    </SelectItem>
    <SelectItem value="premium">
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4" />
        <span>Premium</span>
      </div>
    </SelectItem>
  </SelectContent>
</Select>
```

### Disabled Items

```tsx
<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="available">Available Option</SelectItem>
    <SelectItem value="disabled" disabled>
      Disabled Option
    </SelectItem>
    <SelectItem value="another">Another Option</SelectItem>
  </SelectContent>
</Select>
```

---

## 🎨 Styling

Customize select appearance:

```tsx
<SelectTrigger className="w-full border-2 focus:ring-2">
  <SelectValue placeholder="Custom styled" />
</SelectTrigger>

<SelectContent className="max-h-80">
  {/* Long list with custom max height */}
</SelectContent>
```

---

## 🧪 Testing Tips

- Test keyboard navigation (Arrow keys, Enter, Escape)
- Verify controlled and uncontrolled modes
- Check disabled states
- Test with long lists for scroll behavior
- Verify accessibility with screen readers

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Arrow keys navigate options
- Enter/Space selects an option
- Escape closes the dropdown
- Type to search/filter options
- Proper ARIA attributes included

---

## 🔗 Related

- [Radix UI Select](https://www.radix-ui.com/docs/primitives/components/select)
- [Label](label.md) - For form labels
- [Input](input.md) - For text input
