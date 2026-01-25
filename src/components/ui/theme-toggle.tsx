'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

function ThemeToggle({ className }: { className?: string }) {
	const [isDark, setIsDark] = React.useState(false)

	React.useEffect(() => {
		// Check initial theme on mount
		const isDarkMode = document.documentElement.classList.contains('dark')
		setIsDark(isDarkMode)
	}, [])

	const toggleTheme = () => {
		const newIsDark = !isDark
		setIsDark(newIsDark)

		if (newIsDark) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}

	// Initialize theme from localStorage on mount
	React.useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			document.documentElement.classList.add('dark')
			setIsDark(true)
		} else {
			document.documentElement.classList.remove('dark')
			setIsDark(false)
		}
	}, [])

	return (
		<button
			onClick={toggleTheme}
			className={cn(
				'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
				className
			)}
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
		</button>
	)
}

export { ThemeToggle }
