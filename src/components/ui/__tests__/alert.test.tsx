import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from '../alert'

describe('Alert', () => {
	it('renders alert with default variant', () => {
		render(
			<Alert>
				<AlertTitle>Title</AlertTitle>
				<AlertDescription>Description</AlertDescription>
			</Alert>
		)
		expect(screen.getByText('Title')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
	})

	it('renders destructive variant', () => {
		render(
			<Alert variant="destructive" data-testid="alert">
				<AlertTitle>Error</AlertTitle>
			</Alert>
		)
		const alert = screen.getByTestId('alert')
		expect(alert).toHaveClass('border-destructive/50')
	})

	it('renders success variant', () => {
		render(
			<Alert variant="success" data-testid="alert">
				<AlertTitle>Success</AlertTitle>
			</Alert>
		)
		const alert = screen.getByTestId('alert')
		expect(alert).toHaveClass('border-green-500/50')
	})

	it('renders warning variant', () => {
		render(
			<Alert variant="warning" data-testid="alert">
				<AlertTitle>Warning</AlertTitle>
			</Alert>
		)
		const alert = screen.getByTestId('alert')
		expect(alert).toHaveClass('border-yellow-500/50')
	})
})
