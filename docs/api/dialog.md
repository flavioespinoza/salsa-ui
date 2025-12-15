# Dialog API Reference

## Components

### Dialog

Root component that manages the dialog state.

```tsx
interface DialogProps {
	open?: boolean
	onOpenChange?: (open: boolean) => void
	defaultOpen?: boolean
	modal?: boolean
}
```

**Props**:
- `open`: Controlled open state
- `onOpenChange`: Callback when open state changes
- `defaultOpen`: Uncontrolled default open state
- `modal`: Whether the dialog is modal (default: true)

### DialogTrigger

Button that opens the dialog.

```tsx
interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
}
```

### DialogContent

The dialog content container.

```tsx
interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### DialogHeader

Header section of the dialog.

```tsx
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### DialogFooter

Footer section of the dialog.

```tsx
interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### DialogTitle

Title of the dialog.

```tsx
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
```

### DialogDescription

Description text in the dialog.

```tsx
interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
```

## Usage Examples

```tsx
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@flavioespinoza/salsa-ui'

// Basic dialog
<Dialog>
	<DialogTrigger>Open Dialog</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Dialog Title</DialogTitle>
			<DialogDescription>
				This is a dialog description.
			</DialogDescription>
		</DialogHeader>
	</DialogContent>
</Dialog>

// Controlled dialog
const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
	<DialogTrigger>Open</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Controlled Dialog</DialogTitle>
		</DialogHeader>
		<p>Content goes here</p>
		<DialogFooter>
			<Button onClick={() => setOpen(false)}>Close</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>

// Confirm dialog
<Dialog>
	<DialogTrigger asChild>
		<Button variant="destructive">Delete</Button>
	</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Are you sure?</DialogTitle>
			<DialogDescription>
				This action cannot be undone.
			</DialogDescription>
		</DialogHeader>
		<DialogFooter>
			<Button variant="outline">Cancel</Button>
			<Button variant="destructive">Delete</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
```

## Accessibility

- Traps focus within dialog when open
- Returns focus to trigger when closed
- Closes on Escape key
- Closes on overlay click
- Proper ARIA attributes
- Prevents body scroll when open
