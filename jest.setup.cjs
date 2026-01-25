require('@testing-library/jest-dom')

// Mock ResizeObserver for Radix UI components
global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

// Mock image loading for Radix Avatar and other image components
class MockImage {
	constructor() {
		this._src = ''
		this._listeners = {}
	}
	get src() {
		return this._src
	}
	set src(value) {
		this._src = value
		// Trigger load event asynchronously
		setTimeout(() => {
			if (this._listeners.load) {
				this._listeners.load.forEach((cb) => cb())
			}
		}, 10)
	}
	addEventListener(event, callback) {
		if (!this._listeners[event]) {
			this._listeners[event] = []
		}
		this._listeners[event].push(callback)
	}
	removeEventListener(event, callback) {
		if (this._listeners[event]) {
			this._listeners[event] = this._listeners[event].filter((cb) => cb !== callback)
		}
	}
}
global.Image = MockImage
