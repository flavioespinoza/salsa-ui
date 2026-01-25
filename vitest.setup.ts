import '@testing-library/jest-dom'

// Mock ResizeObserver for Radix UI components
global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

// Mock Image loading for jsdom - triggers onload when src is set
const OriginalImage = global.Image
global.Image = class MockImage extends OriginalImage {
	constructor() {
		super()
		setTimeout(() => {
			this.dispatchEvent(new Event('load'))
			this.onload?.()
		}, 0)
	}
}
