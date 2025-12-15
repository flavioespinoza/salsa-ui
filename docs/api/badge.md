# Badge API Reference

## Props

```tsx
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'
}
```

### variant

Defines the visual style of the badge.

- **Type**: `'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'`
- **Default**: `'default'`

**Variants**:
- `default`: Primary badge with solid background
- `secondary`: Muted badge for secondary information
- `destructive`: Red badge for errors or negative states
- `outline`: Transparent badge with border
- `success`: Green badge for positive states
- `warning`: Yellow badge for warnings

## Usage Examples

```tsx
import { Badge } from '@flavioespinoza/salsa-ui'

// Default badge
<Badge>New</Badge>

// Secondary badge
<Badge variant="secondary">Beta</Badge>

// Destructive badge
<Badge variant="destructive">Error</Badge>

// Outline badge
<Badge variant="outline">Draft</Badge>

// Success badge
<Badge variant="success">Active</Badge>

// Warning badge
<Badge variant="warning">Pending</Badge>

// With custom styling
<Badge className="text-xs">Small badge</Badge>

// As status indicator
<div className="flex items-center gap-2">
	<span>Status:</span>
	<Badge variant="success">Online</Badge>
</div>

// Multiple badges
<div className="flex gap-2">
	<Badge>Tag 1</Badge>
	<Badge>Tag 2</Badge>
	<Badge>Tag 3</Badge>
</div>

// With icon
<Badge>
	<CheckIcon className="mr-1 h-3 w-3" />
	Verified
</Badge>
```

## Common Use Cases

### Status Indicators

```tsx
<Badge variant={status === 'active' ? 'success' : 'secondary'}>
	{status}
</Badge>
```

### Tags and Categories

```tsx
<div className="flex flex-wrap gap-2">
	{tags.map(tag => (
		<Badge key={tag} variant="outline">{tag}</Badge>
	))}
</div>
```

### Counts and Notifications

```tsx
<Button className="relative">
	Messages
	<Badge className="absolute -top-2 -right-2">3</Badge>
</Button>
```

## Styling

The Badge component can be customized with `className`:

```tsx
<Badge className="rounded-full px-3">Pill badge</Badge>
<Badge className="font-mono text-xs">Monospace</Badge>
```

## Accessibility

- Uses semantic HTML
- Color is not the only indicator (includes text)
- Sufficient color contrast for all variants
- Can be made focusable if interactive
