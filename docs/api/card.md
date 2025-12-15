# Card API Reference

## Components

### Card

Container component for card layout.

```tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### CardHeader

Header section of the card.

```tsx
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### CardTitle

Title text in the card header.

```tsx
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
```

### CardDescription

Description text in the card header.

```tsx
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
```

### CardContent

Main content area of the card.

```tsx
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### CardFooter

Footer section of the card.

```tsx
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
```

## Usage Examples

```tsx
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@flavioespinoza/salsa-ui'

// Basic card
<Card>
	<CardContent>
		<p>Card content</p>
	</CardContent>
</Card>

// Complete card
<Card>
	<CardHeader>
		<CardTitle>Card Title</CardTitle>
		<CardDescription>Card description text</CardDescription>
	</CardHeader>
	<CardContent>
		<p>Main content goes here</p>
	</CardContent>
	<CardFooter>
		<Button>Action</Button>
	</CardFooter>
</Card>

// Custom styling
<Card className="w-[350px]">
	<CardHeader>
		<CardTitle>Notifications</CardTitle>
		<CardDescription>You have 3 unread messages</CardDescription>
	</CardHeader>
	<CardContent>
		<div className="space-y-2">
			<p>Message 1</p>
			<p>Message 2</p>
			<p>Message 3</p>
		</div>
	</CardContent>
</Card>
```

## Styling

All card components accept `className` prop for custom styling:

```tsx
<Card className="shadow-lg border-2">
	<CardHeader className="bg-gray-100">
		<CardTitle className="text-2xl">Large Title</CardTitle>
	</CardHeader>
	<CardContent className="p-8">Content</CardContent>
</Card>
```
