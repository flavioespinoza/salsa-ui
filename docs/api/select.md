# Select API Reference

## Components

### Select

Root select component that manages state.

```tsx
interface SelectProps {
	value?: string
	onValueChange?: (value: string) => void
	defaultValue?: string
	open?: boolean
	onOpenChange?: (open: boolean) => void
	disabled?: boolean
	name?: string
	required?: boolean
}
```

**Props**:
- `value`: Controlled value
- `onValueChange`: Callback when value changes
- `defaultValue`: Uncontrolled default value
- `open`: Controlled open state
- `onOpenChange`: Callback when open state changes
- `disabled`: Whether select is disabled
- `name`: Name attribute for form submission
- `required`: Whether select is required

### SelectTrigger

Button that opens the select menu.

```tsx
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
```

### SelectValue

Displays the selected value.

```tsx
interface SelectValueProps {
	placeholder?: string
}
```

### SelectContent

Container for select options.

```tsx
interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: 'item-aligned' | 'popper'
}
```

### SelectItem

Individual select option.

```tsx
interface SelectItemProps {
	value: string
	disabled?: boolean
	textValue?: string
}
```

### SelectGroup

Groups related select items.

```tsx
interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### SelectLabel

Label for a select group.

```tsx
interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### SelectSeparator

Visual separator between items.

```tsx
interface SelectSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
```

## Usage Examples

```tsx
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@flavioespinoza/salsa-ui'

// Basic select
<Select>
	<SelectTrigger>
		<SelectValue placeholder="Select an option" />
	</SelectTrigger>
	<SelectContent>
		<SelectItem value="option1">Option 1</SelectItem>
		<SelectItem value="option2">Option 2</SelectItem>
		<SelectItem value="option3">Option 3</SelectItem>
	</SelectContent>
</Select>

// Controlled select
const [value, setValue] = useState('')

<Select value={value} onValueChange={setValue}>
	<SelectTrigger>
		<SelectValue placeholder="Choose..." />
	</SelectTrigger>
	<SelectContent>
		<SelectItem value="apple">Apple</SelectItem>
		<SelectItem value="banana">Banana</SelectItem>
		<SelectItem value="orange">Orange</SelectItem>
	</SelectContent>
</Select>

// With groups
<Select>
	<SelectTrigger>
		<SelectValue placeholder="Select fruit" />
	</SelectTrigger>
	<SelectContent>
		<SelectGroup>
			<SelectLabel>Fruits</SelectLabel>
			<SelectItem value="apple">Apple</SelectItem>
			<SelectItem value="banana">Banana</SelectItem>
		</SelectGroup>
		<SelectSeparator />
		<SelectGroup>
			<SelectLabel>Vegetables</SelectLabel>
			<SelectItem value="carrot">Carrot</SelectItem>
			<SelectItem value="potato">Potato</SelectItem>
		</SelectGroup>
	</SelectContent>
</Select>

// Disabled options
<Select>
	<SelectTrigger>
		<SelectValue placeholder="Select" />
	</SelectTrigger>
	<SelectContent>
		<SelectItem value="1">Available</SelectItem>
		<SelectItem value="2" disabled>Unavailable</SelectItem>
		<SelectItem value="3">Available</SelectItem>
	</SelectContent>
</Select>

// With form
<form>
	<Select name="country" required>
		<SelectTrigger>
			<SelectValue placeholder="Select country" />
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="us">United States</SelectItem>
			<SelectItem value="uk">United Kingdom</SelectItem>
			<SelectItem value="ca">Canada</SelectItem>
		</SelectContent>
	</Select>
</form>
```

## Accessibility

- Full keyboard navigation
- Proper ARIA attributes
- Search functionality (type to filter)
- Focus management
- Screen reader support
