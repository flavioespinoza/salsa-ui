import { render, screen } from '@testing-library/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../dialog'

describe('Dialog', () => {
	it('renders dialog when open', () => {
		render(
			<Dialog open={true}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>Dialog description</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		)
		expect(screen.getByText('Dialog Title')).toBeInTheDocument()
		expect(screen.getByText('Dialog description')).toBeInTheDocument()
	})

	it('does not render dialog when closed', () => {
		render(
			<Dialog open={false}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		)
		expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument()
	})
})
