import { render, screen } from '@testing-library/react'
import { Label } from '../label'

describe('Label', () => {
	it('renders label with text', () => {
		render(<Label>Username</Label>)
		expect(screen.getByText('Username')).toBeInTheDocument()
	})

	it('associates with input via htmlFor', () => {
		render(
			<>
				<Label htmlFor="email">Email</Label>
				<input id="email" />
			</>
		)
		const label = screen.getByText('Email')
		expect(label).toHaveAttribute('for', 'email')
	})

	it('applies custom className', () => {
		render(<Label className="font-bold">Bold Label</Label>)
		expect(screen.getByText('Bold Label')).toHaveClass('font-bold')
	})
})
