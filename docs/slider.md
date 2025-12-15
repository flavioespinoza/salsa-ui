# Slider

The `Slider` component allows users to select a value from a range using a draggable thumb. Built with Radix UI for accessibility and touch support.

---

## ✨ Features

- Fully accessible with keyboard and touch support
- Single or multiple thumbs
- Customizable min, max, and step values
- Smooth dragging and keyboard navigation
- Visual feedback on focus and hover
- RTL support

---

## 📦 Import

```tsx
import { Slider } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Slider

```tsx
<Slider defaultValue={[50]} max={100} step={1} />
```

### Controlled Slider

```tsx
const [value, setValue] = useState([50])

<Slider value={value} onValueChange={setValue} max={100} step={1} />
```

### With Label and Value Display

```tsx
const [volume, setVolume] = useState([50])

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-muted-foreground">{volume}%</span>
  </div>
  <Slider
    value={volume}
    onValueChange={setVolume}
    max={100}
    step={1}
  />
</div>
```

### Range Slider (Two Thumbs)

```tsx
const [range, setRange] = useState([25, 75])

<div className="space-y-4">
  <Label>Price Range: ${range[0]} - ${range[1]}</Label>
  <Slider
    value={range}
    onValueChange={setRange}
    min={0}
    max={100}
    step={1}
  />
</div>
```

---

## 📋 Props

Inherits all Radix UI Slider props:

| Prop              | Type       | Description                              |
|-------------------|------------|------------------------------------------|
| `value`           | number[]   | Controlled value(s)                      |
| `onValueChange`   | function   | Callback when value changes              |
| `defaultValue`    | number[]   | Initial value(s) (uncontrolled)          |
| `min`             | number     | Minimum value (default: 0)               |
| `max`             | number     | Maximum value (default: 100)             |
| `step`            | number     | Step increment (default: 1)              |
| `disabled`        | boolean    | Disable the slider                       |
| `className`       | string     | Additional Tailwind classes              |

---

## 🧱 Common Patterns

### Volume Control

```tsx
const [volume, setVolume] = useState([80])

<div className="flex items-center gap-4">
  <Volume2 className="h-5 w-5" />
  <Slider
    value={volume}
    onValueChange={setVolume}
    max={100}
    step={1}
    className="flex-1"
  />
  <span className="text-sm w-12 text-right">{volume[0]}%</span>
</div>
```

### Brightness Control

```tsx
const [brightness, setBrightness] = useState([70])

<div className="space-y-2">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Label>Brightness</Label>
    </div>
    <span className="text-sm">{brightness[0]}%</span>
  </div>
  <Slider
    value={brightness}
    onValueChange={setBrightness}
    max={100}
    step={5}
  />
</div>
```

### Price Filter

```tsx
const [priceRange, setPriceRange] = useState([20, 80])

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Price Range</Label>
    <span className="text-sm text-muted-foreground">
      ${priceRange[0]} - ${priceRange[1]}
    </span>
  </div>
  <Slider
    value={priceRange}
    onValueChange={setPriceRange}
    min={0}
    max={100}
    step={5}
  />
</div>
```

### Temperature Control

```tsx
const [temp, setTemp] = useState([68])

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label>Temperature</Label>
    <span className="text-2xl font-bold">{temp[0]}°F</span>
  </div>
  <Slider
    value={temp}
    onValueChange={setTemp}
    min={60}
    max={80}
    step={1}
  />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>60°F</span>
    <span>80°F</span>
  </div>
</div>
```

### Disabled State

```tsx
<Slider defaultValue={[50]} max={100} disabled />
```

---

## 🎨 Styling

Customize slider appearance:

```tsx
{/* Custom colors */}
<Slider
  defaultValue={[50]}
  className="[&>div]:bg-green-500"
/>

{/* Larger thumb */}
<Slider
  defaultValue={[50]}
  className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
/>
```

---

## 🧪 Testing Tips

- Test keyboard navigation (Arrow keys, Home, End)
- Verify touch and mouse interactions
- Check min/max boundaries
- Test step increments
- Verify disabled state
- Test with multiple thumbs

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Arrow keys adjust value
- Home/End jump to min/max
- Page Up/Down for larger increments
- Proper ARIA attributes included
- Value always passed as an array (even for single thumb)

---

## 🔗 Related

- [Radix UI Slider](https://www.radix-ui.com/docs/primitives/components/slider)
- [Input](input.md) - For numeric input
- [Label](label.md) - For labels
