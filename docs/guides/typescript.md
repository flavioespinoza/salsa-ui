# TypeScript Guide

Salsa UI is fully typed with TypeScript.

## Type Safety

All components include comprehensive TypeScript definitions:

```tsx
import type { ButtonProps } from '@flavioespinoza/salsa-ui'

const CustomButton: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
	return <Button variant={variant} size={size} {...props} />
}
```

## Component Props

Import component prop types:

```tsx
import { Button, type ButtonProps } from '@flavioespinoza/salsa-ui'
import type { ComponentPropsWithoutRef } from 'react'

// Extend component props
interface CustomButtonProps extends ButtonProps {
	loading?: boolean
}

export function CustomButton({ loading, children, ...props }: CustomButtonProps) {
	return (
		<Button disabled={loading} {...props}>
			{loading ? 'Loading...' : children}
		</Button>
	)
}
```

## Generic Components

Some components support generic types:

```tsx
import { Select } from '@flavioespinoza/salsa-ui'

type Option = {
	value: string
	label: string
}

const options: Option[] = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
]
```

## Polymorphic Components

Components that accept an `asChild` prop:

```tsx
import { Button } from '@flavioespinoza/salsa-ui'

<Button asChild>
	<a href="/about">About</a>
</Button>
```

## Type Inference

TypeScript will infer types from component usage:

```tsx
<Button
	variant="outline" // inferred as "outline" | "default" | "ghost" | "link"
	size="lg" // inferred as "lg" | "sm" | "default"
>
	Click me
</Button>
```

## Utility Types

Import utility types for custom implementations:

```tsx
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@flavioespinoza/salsa-ui'

type ButtonVariants = VariantProps<typeof buttonVariants>
```
