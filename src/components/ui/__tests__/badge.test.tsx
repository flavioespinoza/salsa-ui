import { render, screen } from '@testing-library/react'
import { Badge } from '../badge'

describe('Badge', () => {
	it('renders badge with text', () => {
		render(<Badge>New</Badge>)
		expect(screen.getByText('New')).toBeInTheDocument()
	})

	it('renders default variant', () => {
		render(<Badge data-testid="badge">Default</Badge>)
		expect(screen.getByTestId('badge')).toHaveClass('bg-primary')
	})

	it('renders secondary variant', () => {
		render(<Badge variant="secondary" data-testid="badge">Secondary</Badge>)
		expect(screen.getByTestId('badge')).toHaveClass('bg-secondary')
	})

	it('renders destructive variant', () => {
		render(<Badge variant="destructive" data-testid="badge">Error</Badge>)
		expect(screen.getByTestId('badge')).toHaveClass('bg-destructive')
	})

	it('renders outline variant', () => {
		render(<Badge variant="outline" data-testid="badge">Outline</Badge>)
		expect(screen.getByTestId('badge')).toHaveClass('border')
	})

	it('renders success variant', () => {
		render(<Badge variant="success" data-testid="badge">Success</Badge>)
		expect(screen.getByTestId('badge')).toHaveClass('bg-green-500')
	})

	it('renders warning variant', () => {
		render(<Badge variant="warning" data-testid="badge">Warning</Badge>)
		expect(screen.getByTestId('badge')).toHaveClass('bg-yellow-500')
	})
})
