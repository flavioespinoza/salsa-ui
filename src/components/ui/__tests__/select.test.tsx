import { render, screen } from '@testing-library/react'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../select'

describe('Select', () => {
	it('renders select component', () => {
		render(
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Select option" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="option1">Option 1</SelectItem>
					<SelectItem value="option2">Option 2</SelectItem>
				</SelectContent>
			</Select>
		)
		expect(screen.getByText('Select option')).toBeInTheDocument()
	})

	it('displays selected value', () => {
		render(
			<Select defaultValue="option1">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="option1">Option 1</SelectItem>
					<SelectItem value="option2">Option 2</SelectItem>
				</SelectContent>
			</Select>
		)
		expect(screen.getByText('Option 1')).toBeInTheDocument()
	})
})
