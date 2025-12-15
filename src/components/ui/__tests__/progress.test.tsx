import { render, screen } from '@testing-library/react'
import { Progress } from '../progress'

describe('Progress', () => {
	it('renders progress bar', () => {
		render(<Progress value={50} aria-label="Loading" />)
		expect(screen.getByRole('progressbar')).toBeInTheDocument()
	})

	it('displays correct value', () => {
		render(<Progress value={75} aria-label="Loading" />)
		const progressbar = screen.getByRole('progressbar')
		expect(progressbar).toHaveAttribute('aria-valuenow', '75')
	})

	it('handles zero value', () => {
		render(<Progress value={0} aria-label="Loading" />)
		const progressbar = screen.getByRole('progressbar')
		expect(progressbar).toHaveAttribute('aria-valuenow', '0')
	})

	it('handles max value', () => {
		render(<Progress value={100} aria-label="Loading" />)
		const progressbar = screen.getByRole('progressbar')
		expect(progressbar).toHaveAttribute('aria-valuenow', '100')
	})
})
