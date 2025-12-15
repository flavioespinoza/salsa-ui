# Progress

The `Progress` component displays a progress indicator showing completion percentage. Built with Radix UI for accessibility and smooth animations.

---

## ✨ Features

- Accessible progress indicator with Radix UI
- Smooth transition animations
- Percentage-based value (0-100)
- Customizable colors with Tailwind
- Indeterminate state support

---

## 📦 Import

```tsx
import { Progress } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Progress

```tsx
<Progress value={50} />
```

### Different Values

```tsx
<div className="space-y-4">
  <Progress value={0} />
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>
```

### With Label

```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>45%</span>
  </div>
  <Progress value={45} />
</div>
```

### Custom Colors

```tsx
<Progress value={60} className="[&>div]:bg-green-500" />
<Progress value={30} className="[&>div]:bg-yellow-500" />
<Progress value={90} className="[&>div]:bg-blue-500" />
```

---

## 📋 Props

Inherits all Radix UI Progress props:

| Prop       | Type   | Description                              |
|------------|--------|------------------------------------------|
| `value`    | number | Progress value (0-100)                   |
| `max`      | number | Maximum value (default: 100)             |
| `className`| string | Additional Tailwind classes              |

---

## 🧱 Common Patterns

### File Upload Progress

```tsx
const [progress, setProgress] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(timer)
        return 100
      }
      return prev + 10
    })
  }, 500)

  return () => clearInterval(timer)
}, [])

return (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Uploading document.pdf</span>
      <span>{progress}%</span>
    </div>
    <Progress value={progress} />
  </div>
)
```

### Multi-Step Form Progress

```tsx
const steps = ['Personal Info', 'Address', 'Payment', 'Review']
const [currentStep, setCurrentStep] = useState(1)
const progress = (currentStep / steps.length) * 100

<div className="space-y-4">
  <div className="flex justify-between text-sm">
    {steps.map((step, index) => (
      <span
        key={step}
        className={index < currentStep ? 'text-primary' : 'text-muted-foreground'}
      >
        {step}
      </span>
    ))}
  </div>
  <Progress value={progress} />
</div>
```

### Task Completion

```tsx
const tasks = [
  { name: 'Setup project', done: true },
  { name: 'Install dependencies', done: true },
  { name: 'Write code', done: false },
  { name: 'Deploy', done: false },
]

const completed = tasks.filter(t => t.done).length
const progress = (completed / tasks.length) * 100

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Tasks</span>
    <span>{completed} of {tasks.length} completed</span>
  </div>
  <Progress value={progress} />
</div>
```

### Different Sizes

```tsx
<Progress value={50} className="h-1" />  {/* Thin */}
<Progress value={50} className="h-2" />  {/* Default */}
<Progress value={50} className="h-4" />  {/* Thick */}
```

---

## 🎨 Styling

Customize progress bar appearance:

```tsx
{/* Custom background and indicator */}
<Progress
  value={70}
  className="h-3 bg-slate-200 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
/>

{/* Rounded ends */}
<Progress value={60} className="rounded-full" />
```

---

## 🧪 Testing Tips

- Verify progress updates correctly
- Test boundary values (0, 100)
- Check animation smoothness
- Ensure accessibility with screen readers
- Test with different max values

---

## ⚠️ Accessibility Notes

- The component uses proper ARIA attributes
- Screen readers announce progress changes
- Value should be between 0 and max (default 100)
- Consider adding visible text for better UX

---

## 🔗 Related

- [Radix UI Progress](https://www.radix-ui.com/docs/primitives/components/progress)
- [Skeleton](skeleton.md) - For loading states
