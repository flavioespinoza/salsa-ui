# Accessibility

Salsa UI components are built with accessibility in mind.

## ARIA Support

All interactive components include proper ARIA attributes:

- `role` attributes for semantic meaning
- `aria-label` for screen readers
- `aria-disabled` for disabled states
- `aria-expanded` for collapsible content
- `aria-selected` for selected items

## Keyboard Navigation

Components support standard keyboard navigation:

- **Tab**: Focus next element
- **Shift + Tab**: Focus previous element
- **Enter/Space**: Activate buttons and links
- **Escape**: Close dialogs and dropdowns
- **Arrow keys**: Navigate menus and lists

## Focus Management

- Visible focus indicators on all interactive elements
- Focus trap in modals and dialogs
- Restore focus when closing overlays

## Screen Reader Support

- Descriptive labels for all form controls
- Status announcements for dynamic content
- Proper heading hierarchy
- Alternative text for images

## Best Practices

1. Always provide labels for form inputs
2. Use semantic HTML elements
3. Ensure sufficient color contrast
4. Test with keyboard only
5. Test with screen readers
6. Provide skip links for navigation

## Example: Accessible Form

```tsx
import { Label, Input, Button } from '@flavioespinoza/salsa-ui'

export function AccessibleForm() {
	return (
		<form>
			<div>
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					aria-required="true"
					aria-describedby="email-hint"
				/>
				<p id="email-hint">We'll never share your email</p>
			</div>
			<Button type="submit">Submit</Button>
		</form>
	)
}
```
