'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'

interface AvatarContextValue {
	imageLoadingStatus: ImageLoadingStatus
	setImageLoadingStatus: React.Dispatch<React.SetStateAction<ImageLoadingStatus>>
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null)

function useAvatarContext() {
	const context = React.useContext(AvatarContext)
	if (!context) {
		throw new Error('Avatar components must be used within an Avatar')
	}
	return context
}

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(({ className, children, ...props }, ref) => {
	const [imageLoadingStatus, setImageLoadingStatus] = React.useState<ImageLoadingStatus>('idle')

	return (
		<AvatarContext.Provider value={{ imageLoadingStatus, setImageLoadingStatus }}>
			<span
				ref={ref}
				className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
				{...props}
			>
				{children}
			</span>
		</AvatarContext.Provider>
	)
})
Avatar.displayName = 'Avatar'

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(({ className, src, alt, ...props }, ref) => {
	const { setImageLoadingStatus } = useAvatarContext()

	const handleLoad = React.useCallback(() => {
		setImageLoadingStatus('loaded')
	}, [setImageLoadingStatus])

	const handleError = React.useCallback(() => {
		setImageLoadingStatus('error')
	}, [setImageLoadingStatus])

	React.useEffect(() => {
		setImageLoadingStatus(src ? 'loading' : 'error')
	}, [src, setImageLoadingStatus])

	if (!src) {
		return null
	}

	return (
		<img
			ref={ref}
			src={src}
			alt={alt}
			onLoad={handleLoad}
			onError={handleError}
			className={cn('aspect-square h-full w-full', className)}
			{...props}
		/>
	)
})
AvatarImage.displayName = 'AvatarImage'

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
	delayMs?: number
}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
	({ className, children, delayMs, ...props }, ref) => {
		const { imageLoadingStatus } = useAvatarContext()
		const [canRender, setCanRender] = React.useState(delayMs === undefined)

		React.useEffect(() => {
			if (delayMs !== undefined) {
				const timer = setTimeout(() => setCanRender(true), delayMs)
				return () => clearTimeout(timer)
			}
		}, [delayMs])

		if (imageLoadingStatus === 'loaded' || !canRender) {
			return null
		}

		return (
			<span
				ref={ref}
				className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
				{...props}
			>
				{children}
			</span>
		)
	}
)
AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }
