import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	target: 'esnext',
	splitting: false,
	sourcemap: true,
	clean: true
})