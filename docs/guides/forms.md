# Forms Guide

Building forms with Salsa UI and react-hook-form.

## Installation

```bash
npm install react-hook-form zod @hookform/resolvers
```

## Basic Form

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Button,
} from '@flavioespinoza/salsa-ui'

const formSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email(),
})

export function ProfileForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="username" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="email@example.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
```

## Form Components

- **Form**: Wraps the form with context
- **FormField**: Connects form control to react-hook-form
- **FormItem**: Container for form field
- **FormLabel**: Label for form field
- **FormControl**: Wrapper for input element
- **FormDescription**: Optional description text
- **FormMessage**: Displays validation errors

## Validation

Use Zod for schema validation:

```tsx
const schema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
	age: z.number().min(18, 'Must be 18 or older'),
})
```

## Select Fields

```tsx
<FormField
	control={form.control}
	name="country"
	render={({ field }) => (
		<FormItem>
			<FormLabel>Country</FormLabel>
			<Select onValueChange={field.onChange} defaultValue={field.value}>
				<FormControl>
					<SelectTrigger>
						<SelectValue placeholder="Select a country" />
					</SelectTrigger>
				</FormControl>
				<SelectContent>
					<SelectItem value="us">United States</SelectItem>
					<SelectItem value="uk">United Kingdom</SelectItem>
					<SelectItem value="ca">Canada</SelectItem>
				</SelectContent>
			</Select>
			<FormMessage />
		</FormItem>
	)}
/>
```

## Checkbox Fields

```tsx
<FormField
	control={form.control}
	name="terms"
	render={({ field }) => (
		<FormItem className="flex flex-row items-start space-x-3 space-y-0">
			<FormControl>
				<Checkbox checked={field.value} onCheckedChange={field.onChange} />
			</FormControl>
			<div className="space-y-1 leading-none">
				<FormLabel>Accept terms and conditions</FormLabel>
			</div>
		</FormItem>
	)}
/>
```
