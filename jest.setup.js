import '@testing-library/jest-dom'

// jsdom does not implement ResizeObserver, which Radix UI's slider
// (via @radix-ui/react-use-size) requires at mount time.
global.ResizeObserver = class ResizeObserver {
	constructor(cb) {
		this.cb = cb
	}
	observe() {}
	unobserve() {}
	disconnect() {}
}

