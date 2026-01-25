import React from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface HeaderProps {
	height: string
}

export const Header: React.FC<HeaderProps> = ({ height }) => {
	return (
		<header className={`flex ${height} items-center justify-between bg-background p-4 shadow-md`}>
			<div className="flex-1">
				<h1 className="hidden font-bold text-foreground sm:block">DISCO</h1>
			</div>
			<div className="flex items-center gap-4">
				<p className="font-bold text-foreground">Online</p>
				<ThemeToggle />
			</div>
		</header>
	)
}
