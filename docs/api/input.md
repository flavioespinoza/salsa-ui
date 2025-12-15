# Input API Reference

## Props

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
```

The Input component accepts all standard HTML input attributes.

## Common Props

### type

Specifies the type of input control.

- **Type**: `string`
- **Default**: `'text'`
- **Values**: `'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | ...`

### placeholder

Placeholder text displayed when input is empty.

- **Type**: `string`

### value

The controlled value of the input.

- **Type**: `string | number`

### defaultValue

The uncontrolled default value.

- **Type**: `string | number`

### disabled

Whether the input is disabled.

- **Type**: `boolean`
- **Default**: `false`

### required

Whether the input is required for form submission.

- **Type**: `boolean`
- **Default**: `false`

### onChange

Callback fired when the value changes.

- **Type**: `(event: React.ChangeEvent<HTMLInputElement>) => void`

## Usage Examples

```tsx
import { Input } from '@flavioespinoza/salsa-ui'

// Basic input
<Input placeholder="Enter text" />

// Email input
<Input type="email" placeholder="email@example.com" />

// Password input
<Input type="password" placeholder="Password" />

// Controlled input
const [value, setValue] = useState('')
<Input
	value={value}
	onChange={(e) => setValue(e.target.value)}
	placeholder="Type here"
/>

// Disabled input
<Input disabled value="Cannot edit" />

// Required input
<Input required placeholder="Required field" />

// Number input
<Input type="number" min={0} max={100} step={5} />

// With label
<div>
	<Label htmlFor="email">Email</Label>
	<Input id="email" type="email" />
</div>
```

## Styling

The Input component can be styled with the `className` prop:

```tsx
<Input className="w-full max-w-sm" placeholder="Custom width" />
```

## Accessibility

- Uses semantic `<input>` element
- Supports all ARIA attributes
- Associates with labels via `id` and `htmlFor`
- Keyboard accessible
- Focus visible indicator
