'use client'

import * as React from 'react'
import { Camera, RefreshCw } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export type AvatarType = 'initials' | 'colored' | 'photo' | 'cartoon' | 'silhouette'

export type AvatarColorVariant = 'primary' | 'secondary' | 'muted'

export type CartoonStyle = 'avataaars' | 'lorelei' | 'micah' | 'pixel-art' | 'adventurer'

export type SilhouetteStyle = 'shapes' | 'thumbs' | 'identicon' | 'bottts'

export interface AvatarConfig {
	type: AvatarType
	value: string // initials, seed, or custom image URL
	colorVariant?: AvatarColorVariant
	cartoonStyle?: CartoonStyle
	silhouetteStyle?: SilhouetteStyle
	customImageUrl?: string
}

interface AvatarPickerProps {
	value: AvatarConfig
	onChange: (config: AvatarConfig) => void
	className?: string
	size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
	sm: 'h-8 w-8',
	md: 'h-10 w-10',
	lg: 'h-16 w-16',
}

const colorVariantClasses: Record<AvatarColorVariant, string> = {
	primary: 'bg-primary text-primary-foreground',
	secondary: 'bg-secondary text-secondary-foreground',
	muted: 'bg-muted text-muted-foreground',
}

function generateRandomSeed(): string {
	return Math.random().toString(36).substring(2, 10)
}

function getAvatarUrl(config: AvatarConfig): string | undefined {
	switch (config.type) {
		case 'photo':
			if (config.customImageUrl) return config.customImageUrl
			return `https://i.pravatar.cc/150?u=${encodeURIComponent(config.value)}`
		case 'cartoon':
			return `https://api.dicebear.com/9.x/${config.cartoonStyle || 'avataaars'}/svg?seed=${encodeURIComponent(config.value)}`
		case 'silhouette':
			return `https://api.dicebear.com/9.x/${config.silhouetteStyle || 'shapes'}/svg?seed=${encodeURIComponent(config.value)}`
		default:
			return undefined
	}
}

function getInitials(value: string): string {
	return value
		.split(' ')
		.map((word) => word[0])
		.join('')
		.toUpperCase()
		.slice(0, 2)
}

export function AvatarPicker({ value, onChange, className, size = 'lg' }: AvatarPickerProps) {
	const [open, setOpen] = React.useState(false)
	const [localConfig, setLocalConfig] = React.useState<AvatarConfig>(value)
	const fileInputRef = React.useRef<HTMLInputElement>(null)

	React.useEffect(() => {
		setLocalConfig(value)
	}, [value])

	const handleSave = () => {
		onChange(localConfig)
		setOpen(false)
	}

	const handleRandomize = () => {
		setLocalConfig((prev) => ({ ...prev, value: generateRandomSeed() }))
	}

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setLocalConfig((prev) => ({
					...prev,
					type: 'photo',
					customImageUrl: reader.result as string,
				}))
			}
			reader.readAsDataURL(file)
		}
	}

	const avatarUrl = getAvatarUrl(localConfig)
	const currentAvatarUrl = getAvatarUrl(value)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					className={cn(
						'relative rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group',
						className
					)}
				>
					<Avatar className={cn(sizeClasses[size])}>
						{currentAvatarUrl ? (
							<>
								<AvatarImage src={currentAvatarUrl} alt="Avatar" />
								<AvatarFallback>{getInitials(value.value)}</AvatarFallback>
							</>
						) : (
							<AvatarFallback
								className={cn(
									value.type === 'colored' && colorVariantClasses[value.colorVariant || 'primary']
								)}
							>
								{getInitials(value.value)}
							</AvatarFallback>
						)}
					</Avatar>
					<div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
						<Camera className="h-4 w-4 text-white" />
					</div>
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-80" align="start">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h4 className="font-medium text-sm">Choose Avatar</h4>
						<div className="flex items-center gap-2">
							{/* Preview */}
							<Avatar className="h-10 w-10">
								{avatarUrl ? (
									<>
										<AvatarImage src={avatarUrl} alt="Preview" />
										<AvatarFallback>{getInitials(localConfig.value)}</AvatarFallback>
									</>
								) : (
									<AvatarFallback
										className={cn(
											localConfig.type === 'colored' &&
												colorVariantClasses[localConfig.colorVariant || 'primary']
										)}
									>
										{getInitials(localConfig.value)}
									</AvatarFallback>
								)}
							</Avatar>
						</div>
					</div>

					<Tabs
						value={localConfig.type}
						onValueChange={(t) => setLocalConfig((prev) => ({ ...prev, type: t as AvatarType }))}
					>
						<TabsList className="grid grid-cols-5 w-full">
							<TabsTrigger value="initials" className="text-xs px-1">
								Initials
							</TabsTrigger>
							<TabsTrigger value="colored" className="text-xs px-1">
								Colored
							</TabsTrigger>
							<TabsTrigger value="photo" className="text-xs px-1">
								Photo
							</TabsTrigger>
							<TabsTrigger value="cartoon" className="text-xs px-1">
								Cartoon
							</TabsTrigger>
							<TabsTrigger value="silhouette" className="text-xs px-1">
								Shape
							</TabsTrigger>
						</TabsList>

						{/* Initials Tab */}
						<TabsContent value="initials" className="space-y-3 mt-3">
							<div className="space-y-2">
								<Label className="text-xs">Your Name or Initials</Label>
								<Input
									value={localConfig.value}
									onChange={(e) => setLocalConfig((prev) => ({ ...prev, value: e.target.value }))}
									placeholder="John Doe"
								/>
							</div>
						</TabsContent>

						{/* Colored Tab */}
						<TabsContent value="colored" className="space-y-3 mt-3">
							<div className="space-y-2">
								<Label className="text-xs">Your Name or Initials</Label>
								<Input
									value={localConfig.value}
									onChange={(e) => setLocalConfig((prev) => ({ ...prev, value: e.target.value }))}
									placeholder="John Doe"
								/>
							</div>
							<div className="space-y-2">
								<Label className="text-xs">Color</Label>
								<div className="flex gap-2">
									{(['primary', 'secondary', 'muted'] as const).map((variant) => (
										<button
											key={variant}
											onClick={() => setLocalConfig((prev) => ({ ...prev, colorVariant: variant }))}
											className={cn(
												'h-8 w-8 rounded-full border-2 transition-all',
												colorVariantClasses[variant],
												localConfig.colorVariant === variant
													? 'border-foreground scale-110'
													: 'border-transparent'
											)}
										/>
									))}
								</div>
							</div>
						</TabsContent>

						{/* Photo Tab */}
						<TabsContent value="photo" className="space-y-3 mt-3">
							<div className="space-y-2">
								<Label className="text-xs">Email or Username (for Pravatar)</Label>
								<div className="flex gap-2">
									<Input
										value={localConfig.value}
										onChange={(e) =>
											setLocalConfig((prev) => ({ ...prev, value: e.target.value, customImageUrl: undefined }))
										}
										placeholder="user@example.com"
									/>
									<Button variant="outline" size="icon" onClick={handleRandomize}>
										<RefreshCw className="h-4 w-4" />
									</Button>
								</div>
							</div>
							<div className="space-y-2">
								<Label className="text-xs">Or Upload Your Own</Label>
								<input
									ref={fileInputRef}
									type="file"
									accept="image/*"
									onChange={handleFileUpload}
									className="hidden"
								/>
								<Button
									variant="outline"
									className="w-full"
									onClick={() => fileInputRef.current?.click()}
								>
									Upload Image
								</Button>
							</div>
						</TabsContent>

						{/* Cartoon Tab */}
						<TabsContent value="cartoon" className="space-y-3 mt-3">
							<div className="space-y-2">
								<Label className="text-xs">Style</Label>
								<div className="flex flex-wrap gap-2">
									{(['avataaars', 'lorelei', 'micah', 'pixel-art', 'adventurer'] as const).map(
										(style) => (
											<button
												key={style}
												onClick={() => setLocalConfig((prev) => ({ ...prev, cartoonStyle: style }))}
												className={cn(
													'px-2 py-1 text-xs rounded-md border transition-all',
													localConfig.cartoonStyle === style
														? 'border-primary bg-primary text-primary-foreground'
														: 'border-input hover:bg-muted'
												)}
											>
												{style}
											</button>
										)
									)}
								</div>
							</div>
							<div className="space-y-2">
								<Label className="text-xs">Seed (name or random)</Label>
								<div className="flex gap-2">
									<Input
										value={localConfig.value}
										onChange={(e) => setLocalConfig((prev) => ({ ...prev, value: e.target.value }))}
										placeholder="Felix"
									/>
									<Button variant="outline" size="icon" onClick={handleRandomize}>
										<RefreshCw className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</TabsContent>

						{/* Silhouette Tab */}
						<TabsContent value="silhouette" className="space-y-3 mt-3">
							<div className="space-y-2">
								<Label className="text-xs">Style</Label>
								<div className="flex flex-wrap gap-2">
									{(['shapes', 'thumbs', 'identicon', 'bottts'] as const).map((style) => (
										<button
											key={style}
											onClick={() => setLocalConfig((prev) => ({ ...prev, silhouetteStyle: style }))}
											className={cn(
												'px-2 py-1 text-xs rounded-md border transition-all',
												localConfig.silhouetteStyle === style
													? 'border-primary bg-primary text-primary-foreground'
													: 'border-input hover:bg-muted'
											)}
										>
											{style}
										</button>
									))}
								</div>
							</div>
							<div className="space-y-2">
								<Label className="text-xs">Seed</Label>
								<div className="flex gap-2">
									<Input
										value={localConfig.value}
										onChange={(e) => setLocalConfig((prev) => ({ ...prev, value: e.target.value }))}
										placeholder="Shadow"
									/>
									<Button variant="outline" size="icon" onClick={handleRandomize}>
										<RefreshCw className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</TabsContent>
					</Tabs>

					<div className="flex justify-end gap-2 pt-2 border-t">
						<Button variant="outline" size="sm" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button size="sm" onClick={handleSave}>
							Save
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}

// Helper function to get the avatar URL from a config (useful for displaying elsewhere)
export function getAvatarUrlFromConfig(config: AvatarConfig): string | undefined {
	return getAvatarUrl(config)
}

// Default config factory
export function createDefaultAvatarConfig(name: string = 'User'): AvatarConfig {
	return {
		type: 'initials',
		value: name,
		colorVariant: 'muted',
		cartoonStyle: 'avataaars',
		silhouetteStyle: 'shapes',
	}
}
