# Button API Reference

## Props

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
	size?: 'default' | 'sm' | 'lg' | 'icon'
	asChild?: boolean
}
```

### variant

Defines the visual style of the button.

- **Type**: `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- **Default**: `'default'`

**Examples**:
- `default`: Primary button with solid background
- `destructive`: Red button for dangerous actions
- `outline`: Transparent button with border
- `secondary`: Muted button for secondary actions
- `ghost`: Minimal button with hover effect
- `link`: Text button with underline

### size

Controls the size of the button.

- **Type**: `'default' | 'sm' | 'lg' | 'icon'`
- **Default**: `'default'`

**Examples**:
- `default`: Standard button height (h-9)
- `sm`: Small button (h-8)
- `lg`: Large button (h-10)
- `icon`: Square button for icons

### asChild

Allows the button to be rendered as a child component.

- **Type**: `boolean`
- **Default**: `false`

When `true`, the button will render its child element with button styles.

## Usage Examples

```tsx
// Primary button
<Button>Click me</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Large outline button
<Button variant="outline" size="lg">Cancel</Button>

// Icon button
<Button size="icon">
	<Icon name="trash" />
</Button>

// Button as link
<Button asChild>
	<a href="/about">About</a>
</Button>

// Disabled button
<Button disabled>Loading...</Button>

// Button with onClick
<Button onClick={() => console.log('clicked')}>
	Submit
</Button>
```

## Accessibility

- Uses semantic `<button>` element
- Supports `disabled` attribute
- Keyboard accessible (Enter/Space to activate)
- Focus visible indicator
- Proper ARIA attributes when disabled
