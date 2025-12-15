import { Badge } from '../src/components/ui/badge'

export function BadgeExamples() {
	return (
		<div className="flex gap-2">
			<Badge>Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
		</div>
	)
}
