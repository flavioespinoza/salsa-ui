import { render, screen } from '@testing-library/react'
import { Button } from '../button'

describe('Button', () => {
	it('renders button with text', () => {
		render(<Button>Click me</Button>)
		expect(screen.getByRole('button')).toHaveTextContent('Click me')
	})

	it('renders with default variant', () => {
		render(<Button>Default</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('bg-primary')
	})

	it('renders with outline variant', () => {
		render(<Button variant="outline">Outline</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('border-input')
	})

	it('renders with ghost variant', () => {
		render(<Button variant="ghost">Ghost</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('hover:bg-accent')
	})

	it('renders with link variant', () => {
		render(<Button variant="link">Link</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('text-primary')
	})

	it('renders in small size', () => {
		render(<Button size="sm">Small</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('h-8')
	})

	it('renders in large size', () => {
		render(<Button size="lg">Large</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveClass('h-10')
	})

	it('handles disabled state', () => {
		render(<Button disabled>Disabled</Button>)
		const button = screen.getByRole('button')
		expect(button).toBeDisabled()
	})
})
