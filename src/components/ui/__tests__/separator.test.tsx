import { render, screen } from '@testing-library/react'
import { Separator } from '../separator'

describe('Separator', () => {
	it('renders horizontal separator', () => {
		render(<Separator data-testid="separator" />)
		expect(screen.getByTestId('separator')).toBeInTheDocument()
	})

	it('renders vertical separator', () => {
		render(<Separator orientation="vertical" data-testid="separator" />)
		const separator = screen.getByTestId('separator')
		expect(separator).toHaveAttribute('data-orientation', 'vertical')
	})

	it('applies custom className', () => {
		render(<Separator className="my-4" data-testid="separator" />)
		expect(screen.getByTestId('separator')).toHaveClass('my-4')
	})
})
