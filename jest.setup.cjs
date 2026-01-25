const React = require('react')
global.React = React
require('@testing-library/jest-dom')

// Mock ResizeObserver for Radix UI components
global.ResizeObserver = class ResizeObserver {
	constructor(callback) {
		this.callback = callback
	}
	observe() {}
	unobserve() {}
	disconnect() {}
}
