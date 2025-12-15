import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../input'

describe('Input', () => {
	it('renders input field', () => {
		render(<Input placeholder="Enter text" />)
		expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
	})

	it('handles text input', async () => {
		const user = userEvent.setup()
		render(<Input placeholder="Type here" />)
		const input = screen.getByPlaceholderText('Type here')

		await user.type(input, 'Hello World')
		expect(input).toHaveValue('Hello World')
	})

	it('handles disabled state', () => {
		render(<Input disabled placeholder="Disabled" />)
		expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
	})

	it('handles different input types', () => {
		render(<Input type="email" placeholder="Email" />)
		expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email')
	})
})
