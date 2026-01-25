'use client'

import React, { useState, useEffect } from 'react'
import { MainLayout } from '@/components/main-layout'
import { Copy, Check, Settings } from 'lucide-react'

// Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { AvatarPicker, createDefaultAvatarConfig, type AvatarConfig } from '@/components/ui/avatar-picker'

interface ColorConfig {
	label: string
	variable: string
	defaultLight: string
	defaultDark: string
}

const colorConfigs: ColorConfig[] = [
	{ label: 'Primary', variable: '--primary', defaultLight: '#636e5b', defaultDark: '#fafafa' },
	{ label: 'Primary FG', variable: '--primary-foreground', defaultLight: '#fafafa', defaultDark: '#171717' },
	{ label: 'Secondary', variable: '--secondary', defaultLight: '#fe3557', defaultDark: '#262626' },
	{ label: 'Secondary FG', variable: '--secondary-foreground', defaultLight: '#ffffff', defaultDark: '#fafafa' },
	{ label: 'Destructive', variable: '--destructive', defaultLight: '#c70e2d', defaultDark: '#7f1d1d' },
	{ label: 'Destructive FG', variable: '--destructive-foreground', defaultLight: '#fafafa', defaultDark: '#fafafa' },
	{ label: 'Success', variable: '--success', defaultLight: '#22c55e', defaultDark: '#22c55e' },
	{ label: 'Warning', variable: '--warning', defaultLight: '#eab308', defaultDark: '#eab308' },
	{ label: 'Background', variable: '--background', defaultLight: '#fafafa', defaultDark: '#0a0a0a' },
	{ label: 'Foreground', variable: '--foreground', defaultLight: '#0a0a0a', defaultDark: '#fafafa' },
	{ label: 'Muted', variable: '--muted', defaultLight: '#f5f5f5', defaultDark: '#262626' },
	{ label: 'Muted FG', variable: '--muted-foreground', defaultLight: '#737373', defaultDark: '#a3a3a3' },
]

function hexToHsl(hex: string): string {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	if (!result) return hex
	const r = parseInt(result[1], 16) / 255
	const g = parseInt(result[2], 16) / 255
	const b = parseInt(result[3], 16) / 255
	const max = Math.max(r, g, b), min = Math.min(r, g, b)
	let h = 0, s = 0
	const l = (max + min) / 2
	if (max !== min) {
		const d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
			case g: h = ((b - r) / d + 2) / 6; break
			case b: h = ((r - g) / d + 4) / 6; break
		}
	}
	return `hsl(${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`
}

export default function PlaygroundPage() {
	const [colors, setColors] = useState<Record<string, string>>({})
	const [copied, setCopied] = useState(false)
	const [avatarConfig, setAvatarConfig] = useState<AvatarConfig>(createDefaultAvatarConfig('John Doe'))

	useEffect(() => {
		const initial: Record<string, string> = {}
		colorConfigs.forEach(c => { initial[c.variable] = c.defaultLight })
		setColors(initial)
	}, [])

	const updateColor = (variable: string, hexValue: string) => {
		setColors(prev => ({ ...prev, [variable]: hexValue }))
		document.documentElement.style.setProperty(variable, hexToHsl(hexValue))
	}

	const resetColors = () => {
		colorConfigs.forEach(c => document.documentElement.style.removeProperty(c.variable))
		const reset: Record<string, string> = {}
		colorConfigs.forEach(c => { reset[c.variable] = c.defaultLight })
		setColors(reset)
	}

	const generateCSS = () => {
		let css = ':root {\n'
		colorConfigs.forEach(c => {
			css += `  ${c.variable}: ${hexToHsl(colors[c.variable] || c.defaultLight)};\n`
		})
		return css + '}'
	}

	const copyCSS = async () => {
		await navigator.clipboard.writeText(generateCSS())
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<MainLayout>
			<div className="space-y-6 pb-12">
				{/* Header */}
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-foreground">Theme Playground</h1>
						<p className="text-muted-foreground">Customize theme colors and preview components in real-time</p>
					</div>
					<div className="flex items-center gap-3">
						<ThemeToggle />
						<Button variant="outline" onClick={resetColors}>Reset Colors</Button>
						<Button onClick={copyCSS}>
							{copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
							{copied ? 'Copied!' : 'Copy CSS'}
						</Button>
					</div>
				</div>

				{/* Color Pickers */}
				<div className="flex flex-col flex-wrap gap-4 sm:flex-row">
					<Card className="p-6 w-full">
						<h2 className="text-lg font-semibold mb-4 text-foreground">Color Tokens</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
							{colorConfigs.map(config => (
								<div key={config.variable} className="space-y-1.5">
									<Label className="text-xs font-medium">{config.label}</Label>
									<div className="flex items-center gap-1.5">
										<input
											type="color"
											value={colors[config.variable] || config.defaultLight}
											onChange={(e) => updateColor(config.variable, e.target.value)}
											className="h-9 w-9 cursor-pointer rounded border border-input bg-transparent p-0.5"
										/>
										<Input
											value={colors[config.variable] || config.defaultLight}
											onChange={(e) => updateColor(config.variable, e.target.value)}
											className="h-9 text-xs font-mono flex-1 min-w-0"
										/>
									</div>
								</div>
							))}
						</div>
					</Card>
				</div>

				{/* Component Previews */}
				<div className="w-full">
					<Tabs defaultValue="buttons" className="w-full">
					<TabsList className="mb-4">
						<TabsTrigger value="buttons">Buttons & Badges</TabsTrigger>
						<TabsTrigger value="forms">Form Controls</TabsTrigger>
						<TabsTrigger value="feedback">Feedback</TabsTrigger>
						<TabsTrigger value="data">Data Display</TabsTrigger>
					</TabsList>

					<TabsContent value="buttons" className="space-y-6 w-full">
						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Button Variants</h3>
							<div className="flex flex-wrap gap-3">
								<Button>Primary</Button>
								<Button variant="secondary">Secondary</Button>
								<Button variant="destructive">Destructive</Button>
								<Button variant="outline">Outline</Button>
								<Button variant="ghost">Ghost</Button>
								<Button variant="link">Link</Button>
							</div>
							<h4 className="text-sm font-medium mt-6 mb-3 text-muted-foreground">Button Sizes</h4>
							<div className="flex flex-wrap items-center gap-3">
								<Button size="sm">Small</Button>
								<Button size="default">Default</Button>
								<Button size="lg">Large</Button>
								<Button size="icon"><Settings className="h-4 w-4" /></Button>
							</div>
						</Card>

						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Badge Variants</h3>
							<div className="flex flex-wrap gap-3">
								<Badge>Default</Badge>
								<Badge variant="secondary">Secondary</Badge>
								<Badge variant="destructive">Destructive</Badge>
								<Badge variant="success">Success</Badge>
								<Badge variant="warning">Warning</Badge>
								<Badge variant="outline">Outline</Badge>
							</div>
						</Card>
					</TabsContent>

					<TabsContent value="forms" className="space-y-6 w-full">
						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Text Inputs</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
								<div className="space-y-2">
									<Label>Default Input</Label>
									<Input placeholder="Enter text..." />
								</div>
								<div className="space-y-2">
									<Label>Disabled Input</Label>
									<Input placeholder="Disabled" disabled />
								</div>
								<div className="space-y-2 md:col-span-2">
									<Label>Textarea</Label>
									<Textarea placeholder="Enter longer text..." />
								</div>
							</div>
						</Card>

						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Selection Controls</h3>
							<div className="space-y-4 max-w-md">
								<div className="flex items-center gap-3">
									<Checkbox id="check1" />
									<Label htmlFor="check1">Checkbox unchecked</Label>
								</div>
								<div className="flex items-center gap-3">
									<Checkbox id="check2" defaultChecked />
									<Label htmlFor="check2">Checkbox checked</Label>
								</div>
								<div className="flex items-center gap-3">
									<Switch id="switch1" />
									<Label htmlFor="switch1">Toggle switch</Label>
								</div>
								<div className="space-y-2">
									<Label>Select</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Choose an option" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1">Option 1</SelectItem>
											<SelectItem value="2">Option 2</SelectItem>
											<SelectItem value="3">Option 3</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</Card>
					</TabsContent>

					<TabsContent value="feedback" className="space-y-6 w-full">
						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Alerts</h3>
							<div className="space-y-3 max-w-xl">
								<Alert>
									<AlertTitle>Default Alert</AlertTitle>
									<AlertDescription>This is a default alert message.</AlertDescription>
								</Alert>
								<Alert variant="destructive">
									<AlertTitle>Error</AlertTitle>
									<AlertDescription>Something went wrong. Please try again.</AlertDescription>
								</Alert>
								<Alert variant="success">
									<AlertTitle>Success</AlertTitle>
									<AlertDescription>Your changes have been saved.</AlertDescription>
								</Alert>
								<Alert variant="warning">
									<AlertTitle>Warning</AlertTitle>
									<AlertDescription>Please review before continuing.</AlertDescription>
								</Alert>
							</div>
						</Card>

						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Progress & Slider</h3>
							<div className="space-y-6 max-w-md">
								<div className="space-y-2">
									<Label>Progress (25%)</Label>
									<Progress value={25} />
								</div>
								<div className="space-y-2">
									<Label>Progress (60%)</Label>
									<Progress value={60} />
								</div>
								<div className="space-y-2">
									<Label>Progress (90%)</Label>
									<Progress value={90} />
								</div>
								<div className="space-y-2">
									<Label>Slider</Label>
									<Slider defaultValue={[50]} max={100} step={1} />
								</div>
							</div>
						</Card>

						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Dialog</h3>
							<Dialog>
								<DialogTrigger asChild>
									<Button variant="outline">Open Dialog</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Dialog Title</DialogTitle>
										<DialogDescription>This is a dialog description that provides context.</DialogDescription>
									</DialogHeader>
									<div className="py-4">
										<p className="text-sm text-muted-foreground">Dialog content goes here. You can add forms, text, or any other content.</p>
									</div>
									<DialogFooter>
										<Button variant="outline">Cancel</Button>
										<Button>Confirm</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</Card>
					</TabsContent>

					<TabsContent value="data" className="space-y-6 w-full">
						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Avatar Types</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
								{/* Type 1: Default - White/Muted circle with dark letters */}
								<div className="space-y-2">
									<p className="text-sm font-medium text-muted-foreground">Default (Initials)</p>
									<div className="flex gap-2">
										<Avatar>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<Avatar>
											<AvatarFallback>JD</AvatarFallback>
										</Avatar>
									</div>
								</div>

								{/* Type 2: Colored - Primary background with secondary text */}
								<div className="space-y-2">
									<p className="text-sm font-medium text-muted-foreground">Colored (Primary)</p>
									<div className="flex gap-2">
										<Avatar>
											<AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
										</Avatar>
										<Avatar>
											<AvatarFallback className="bg-secondary text-secondary-foreground">XY</AvatarFallback>
										</Avatar>
									</div>
								</div>

								{/* Type 3: Photo - Real person photographs */}
								<div className="space-y-2">
									<p className="text-sm font-medium text-muted-foreground">Photo (Pravatar)</p>
									<div className="flex gap-2">
										<Avatar>
											<AvatarImage src="https://i.pravatar.cc/150?u=user1@example.com" alt="User 1" />
											<AvatarFallback>U1</AvatarFallback>
										</Avatar>
										<Avatar>
											<AvatarImage src="https://i.pravatar.cc/150?u=user2@example.com" alt="User 2" />
											<AvatarFallback>U2</AvatarFallback>
										</Avatar>
									</div>
								</div>

								{/* Type 4: Cartoon - Illustrated avatars */}
								<div className="space-y-2">
									<p className="text-sm font-medium text-muted-foreground">Cartoon (DiceBear)</p>
									<div className="flex gap-2">
										<Avatar>
											<AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="Cartoon 1" />
											<AvatarFallback>C1</AvatarFallback>
										</Avatar>
										<Avatar>
											<AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=Luna" alt="Cartoon 2" />
											<AvatarFallback>C2</AvatarFallback>
										</Avatar>
									</div>
								</div>

								{/* Type 5: Silhouette - Abstract/minimal shapes */}
								<div className="space-y-2">
									<p className="text-sm font-medium text-muted-foreground">Silhouette (Shapes)</p>
									<div className="flex gap-2">
										<Avatar>
											<AvatarImage src="https://api.dicebear.com/9.x/shapes/svg?seed=Shadow1" alt="Silhouette 1" />
											<AvatarFallback>S1</AvatarFallback>
										</Avatar>
										<Avatar>
											<AvatarImage src="https://api.dicebear.com/9.x/thumbs/svg?seed=Shadow2" alt="Silhouette 2" />
											<AvatarFallback>S2</AvatarFallback>
										</Avatar>
									</div>
								</div>
							</div>
						</Card>

						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Avatar Picker</h3>
							<p className="text-sm text-muted-foreground mb-4">Click the avatar to open the picker and customize it.</p>
							<div className="flex items-center gap-6">
								<AvatarPicker value={avatarConfig} onChange={setAvatarConfig} size="lg" />
								<div className="space-y-1">
									<p className="text-sm font-medium">Current Config:</p>
									<p className="text-xs text-muted-foreground">Type: {avatarConfig.type}</p>
									<p className="text-xs text-muted-foreground">Value: {avatarConfig.value}</p>
									{avatarConfig.colorVariant && (
										<p className="text-xs text-muted-foreground">Color: {avatarConfig.colorVariant}</p>
									)}
									{avatarConfig.cartoonStyle && avatarConfig.type === 'cartoon' && (
										<p className="text-xs text-muted-foreground">Style: {avatarConfig.cartoonStyle}</p>
									)}
									{avatarConfig.silhouetteStyle && avatarConfig.type === 'silhouette' && (
										<p className="text-xs text-muted-foreground">Style: {avatarConfig.silhouetteStyle}</p>
									)}
								</div>
							</div>
						</Card>

						<Card className="p-6 w-full">
							<h3 className="text-lg font-semibold mb-4 text-foreground">Cards with Content</h3>
							<div className="flex flex-col sm:flex-row gap-4">
								<div className="flex-1 p-4 rounded-lg border bg-card">
									<div className="flex items-center gap-3 mb-2">
										<Avatar><AvatarFallback>U1</AvatarFallback></Avatar>
										<div>
											<p className="text-sm font-medium">User One</p>
											<p className="text-xs text-muted-foreground">Active</p>
										</div>
									</div>
									<Badge variant="success">Online</Badge>
								</div>
								<div className="flex-1 p-4 rounded-lg border bg-card">
									<div className="flex items-center gap-3 mb-2">
										<Avatar><AvatarFallback>U2</AvatarFallback></Avatar>
										<div>
											<p className="text-sm font-medium">User Two</p>
											<p className="text-xs text-muted-foreground">Away</p>
										</div>
									</div>
									<Badge variant="warning">Busy</Badge>
								</div>
								<div className="flex-1 p-4 rounded-lg border bg-card">
									<div className="flex items-center gap-3 mb-2">
										<Avatar><AvatarFallback>U3</AvatarFallback></Avatar>
										<div>
											<p className="text-sm font-medium">User Three</p>
											<p className="text-xs text-muted-foreground">Offline</p>
										</div>
									</div>
									<Badge variant="secondary">Offline</Badge>
								</div>
							</div>
						</Card>
					</TabsContent>
					</Tabs>
				</div>
			</div>
		</MainLayout>
	)
}
