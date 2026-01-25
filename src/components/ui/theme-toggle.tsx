'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
	className?: string
}

function ThemeToggle({ className }: ThemeToggleProps) {
	const [isDark, setIsDark] = React.useState(false)

	React.useEffect(() => {
		// Check initial theme from document
		const isDarkMode = document.documentElement.classList.contains('dark')
		setIsDark(isDarkMode)
	}, [])

	const toggleTheme = () => {
		const newIsDark = !isDark
		setIsDark(newIsDark)

		if (newIsDark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={toggleTheme}
			className={cn('relative', className)}
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}

ThemeToggle.displayName = 'ThemeToggle'

export { ThemeToggle }
