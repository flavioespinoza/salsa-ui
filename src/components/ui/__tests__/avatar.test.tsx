import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from '../avatar'

// Capture the original src descriptor so we can mock and restore it per-test.
const originalSrcDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src')!

function mockImageLoad() {
	Object.defineProperty(HTMLImageElement.prototype, 'src', {
		set(value) {
			originalSrcDescriptor.set!.call(this, value)
			if (value) {
				Object.defineProperty(this, 'complete', { value: true, writable: true })
				Object.defineProperty(this, 'naturalWidth', { value: 300, writable: true })
				setTimeout(() => this.dispatchEvent(new Event('load')), 0)
			}
		},
		get() {
			return originalSrcDescriptor.get!.call(this)
		},
		configurable: true,
	})
}

function restoreImageLoad() {
	Object.defineProperty(HTMLImageElement.prototype, 'src', originalSrcDescriptor)
}

describe('Avatar', () => {
	it('renders avatar with image', async () => {
		mockImageLoad()
		try {
			render(
				<Avatar>
					<AvatarImage src="/avatar.jpg" alt="User" />
					<AvatarFallback>UN</AvatarFallback>
				</Avatar>
			)
			expect(await screen.findByAltText('User')).toBeInTheDocument()
		} finally {
			restoreImageLoad()
		}
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
