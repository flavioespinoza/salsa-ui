# Switch

The `Switch` component provides a toggle control for boolean settings. Built with Radix UI for full accessibility and smooth animations.

---

## ✨ Features

- Fully accessible toggle control
- Smooth slide animation
- Keyboard support (Space to toggle)
- Works with forms
- Disabled state support
- Focus ring for keyboard navigation

---

## 📦 Import

```tsx
import { Switch } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Switch

```tsx
<Switch />
```

### With Label

```tsx
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

### Controlled Switch

```tsx
const [enabled, setEnabled] = useState(false)

<Switch checked={enabled} onCheckedChange={setEnabled} />
```

### Disabled Switch

```tsx
<Switch disabled />
<Switch checked disabled />
```

---

## 📋 Props

Inherits all Radix UI Switch props:

| Prop              | Type     | Description                         |
|-------------------|----------|-------------------------------------|
| `checked`         | boolean  | Controlled checked state            |
| `onCheckedChange` | function | Callback when checked state changes |
| `defaultChecked`  | boolean  | Initial checked state (uncontrolled)|
| `disabled`        | boolean  | Disable the switch                  |
| `required`        | boolean  | Mark as required in forms           |
| `name`            | string   | Name attribute for forms            |
| `value`           | string   | Value attribute for forms           |
| `className`       | string   | Additional Tailwind classes         |

---

## 🧱 Common Patterns

### Settings Form

```tsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="notifications">Push Notifications</Label>
      <p className="text-sm text-muted-foreground">
        Receive notifications about activity
      </p>
    </div>
    <Switch id="notifications" />
  </div>

  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="marketing">Marketing Emails</Label>
      <p className="text-sm text-muted-foreground">
        Receive emails about new products and features
      </p>
    </div>
    <Switch id="marketing" />
  </div>

  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="security">Security Alerts</Label>
      <p className="text-sm text-muted-foreground">
        Receive alerts about your account security
      </p>
    </div>
    <Switch id="security" defaultChecked />
  </div>
</div>
```

### Dark Mode Toggle

```tsx
const [darkMode, setDarkMode] = useState(false)

<div className="flex items-center space-x-2">
  <Sun className="h-4 w-4" />
  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
  <Moon className="h-4 w-4" />
</div>
```

### Feature Toggle Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Experimental Features</CardTitle>
    <CardDescription>
      Enable beta features to try them out
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="beta">Beta UI</Label>
      <Switch id="beta" />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="ai">AI Assistant</Label>
      <Switch id="ai" />
    </div>
  </CardContent>
</Card>
```

### Table Row Toggle

```tsx
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Enabled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Two-Factor Auth</td>
      <td><Switch defaultChecked /></td>
    </tr>
    <tr>
      <td>Email Notifications</td>
      <td><Switch /></td>
    </tr>
    <tr>
      <td>Auto-Save</td>
      <td><Switch defaultChecked /></td>
    </tr>
  </tbody>
</table>
```

### With Form

```tsx
<form>
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
      <Switch id="terms" name="terms" required />
    </div>
    <Button type="submit">Submit</Button>
  </div>
</form>
```

---

## 🎨 Styling

Customize switch appearance:

```tsx
{/* Custom colors */}
<Switch className="data-[state=checked]:bg-green-500" />

{/* Larger switch */}
<Switch className="h-6 w-11" />
```

---

## 🧪 Testing Tips

- Test keyboard interaction (Space, Tab)
- Verify checked/unchecked states
- Test disabled state styling
- Check form integration
- Verify focus indicators
- Test with labels for click area

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Space key toggles the switch
- Proper ARIA attributes (role="switch")
- Works with `<Label>` for larger click area
- Focus ring for keyboard users
- Screen readers announce state changes

---

## 🔗 Related

- [Radix UI Switch](https://www.radix-ui.com/docs/primitives/components/switch)
- [Checkbox](checkbox.md) - For multiple selections
- [Label](label.md) - For accessible labels
