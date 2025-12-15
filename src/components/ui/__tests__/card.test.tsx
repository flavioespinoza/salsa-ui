import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../card'

describe('Card', () => {
	it('renders card component', () => {
		render(<Card data-testid="card">Content</Card>)
		expect(screen.getByTestId('card')).toBeInTheDocument()
	})

	it('renders card with all subcomponents', () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Description</CardDescription>
				</CardHeader>
				<CardContent>Content</CardContent>
				<CardFooter>Footer</CardFooter>
			</Card>
		)
		expect(screen.getByText('Title')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
		expect(screen.getByText('Content')).toBeInTheDocument()
		expect(screen.getByText('Footer')).toBeInTheDocument()
	})

	it('applies custom className', () => {
		render(<Card className="custom-class" data-testid="card">Content</Card>)
		expect(screen.getByTestId('card')).toHaveClass('custom-class')
	})
})
