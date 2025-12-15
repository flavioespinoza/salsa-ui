import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from '../avatar'

describe('Avatar', () => {
	it('renders avatar with image', () => {
		render(
			<Avatar>
				<AvatarImage src="/avatar.jpg" alt="User" />
				<AvatarFallback>UN</AvatarFallback>
			</Avatar>
		)
		expect(screen.getByAltText('User')).toBeInTheDocument()
	})

	it('renders fallback when image fails', () => {
		render(
			<Avatar>
				<AvatarImage src="/broken.jpg" alt="User" />
				<AvatarFallback>UN</AvatarFallback>
			</Avatar>
		)
		expect(screen.getByText('UN')).toBeInTheDocument()
	})

	it('applies custom className', () => {
		render(
			<Avatar className="custom-size" data-testid="avatar">
				<AvatarFallback>UN</AvatarFallback>
			</Avatar>
		)
		expect(screen.getByTestId('avatar')).toHaveClass('custom-size')
	})
})
