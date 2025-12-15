# Alert API Reference

## Components

### Alert

Root alert component.

```tsx
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'destructive' | 'success' | 'warning'
}
```

**Props**:
- `variant`: Visual style of the alert
  - `default`: Neutral alert
  - `destructive`: Error alert (red)
  - `success`: Success alert (green)
  - `warning`: Warning alert (yellow)

### AlertTitle

Title text of the alert.

```tsx
interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
```

### AlertDescription

Description text of the alert.

```tsx
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
```

## Usage Examples

```tsx
import { Alert, AlertTitle, AlertDescription } from '@flavioespinoza/salsa-ui'

// Default alert
<Alert>
	<AlertTitle>Heads up!</AlertTitle>
	<AlertDescription>
		This is a default alert message.
	</AlertDescription>
</Alert>

// Destructive alert
<Alert variant="destructive">
	<AlertTitle>Error</AlertTitle>
	<AlertDescription>
		Something went wrong. Please try again.
	</AlertDescription>
</Alert>

// Success alert
<Alert variant="success">
	<AlertTitle>Success</AlertTitle>
	<AlertDescription>
		Your changes have been saved successfully.
	</AlertDescription>
</Alert>

// Warning alert
<Alert variant="warning">
	<AlertTitle>Warning</AlertTitle>
	<AlertDescription>
		Please review the following before proceeding.
	</AlertDescription>
</Alert>

// With icon
<Alert>
	<InfoIcon className="h-4 w-4" />
	<AlertTitle>Information</AlertTitle>
	<AlertDescription>
		Here's some helpful information.
	</AlertDescription>
</Alert>

// Title only
<Alert variant="success">
	<AlertTitle>Successfully saved!</AlertTitle>
</Alert>

// Description only
<Alert>
	<AlertDescription>
		This is a simple alert message without a title.
	</AlertDescription>
</Alert>
```

## Styling

Custom styling with `className`:

```tsx
<Alert className="border-l-4 border-l-blue-500">
	<AlertTitle>Custom Border</AlertTitle>
	<AlertDescription>Alert with custom styling</AlertDescription>
</Alert>
```

## Accessibility

- Uses semantic HTML structure
- Appropriate color contrast for variants
- Can include ARIA live region attributes:

```tsx
<Alert role="alert" aria-live="polite">
	<AlertDescription>Important update</AlertDescription>
</Alert>
```
