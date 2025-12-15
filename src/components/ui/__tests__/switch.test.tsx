import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '../switch'

describe('Switch', () => {
	it('renders switch component', () => {
		render(<Switch aria-label="Toggle" />)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})

	it('toggles switch on click', async () => {
		const user = userEvent.setup()
		render(<Switch aria-label="Toggle" />)
		const switchElement = screen.getByRole('switch')

		expect(switchElement).not.toBeChecked()
		await user.click(switchElement)
		expect(switchElement).toBeChecked()
	})

	it('handles disabled state', () => {
		render(<Switch disabled aria-label="Toggle" />)
		expect(screen.getByRole('switch')).toBeDisabled()
	})
})
