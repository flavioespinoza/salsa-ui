import { render, screen } from '@testing-library/react'
import { Skeleton } from '../skeleton'

describe('Skeleton', () => {
	it('renders skeleton element', () => {
		render(<Skeleton data-testid="skeleton" />)
		expect(screen.getByTestId('skeleton')).toBeInTheDocument()
	})

	it('applies animation class', () => {
		render(<Skeleton data-testid="skeleton" />)
		expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse')
	})

	it('applies custom className', () => {
		render(<Skeleton className="h-12 w-12" data-testid="skeleton" />)
		const skeleton = screen.getByTestId('skeleton')
		expect(skeleton).toHaveClass('h-12')
		expect(skeleton).toHaveClass('w-12')
	})
})
