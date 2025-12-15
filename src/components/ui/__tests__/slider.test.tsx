import { render, screen } from '@testing-library/react'
import { Slider } from '../slider'

describe('Slider', () => {
	it('renders slider component', () => {
		render(<Slider aria-label="Volume" />)
		expect(screen.getByRole('slider')).toBeInTheDocument()
	})

	it('sets default value', () => {
		render(<Slider defaultValue={[50]} aria-label="Volume" />)
		const slider = screen.getByRole('slider')
		expect(slider).toHaveAttribute('aria-valuenow', '50')
	})

	it('handles min and max values', () => {
		render(<Slider min={0} max={100} defaultValue={[75]} aria-label="Volume" />)
		const slider = screen.getByRole('slider')
		expect(slider).toHaveAttribute('aria-valuemin', '0')
		expect(slider).toHaveAttribute('aria-valuemax', '100')
	})

	it('handles disabled state', () => {
		render(<Slider disabled aria-label="Volume" />)
		expect(screen.getByRole('slider')).toHaveAttribute('data-disabled', '')
	})
})
