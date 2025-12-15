import Card from '../src/components/ui/card'

export function CardExamples() {
	return (
		<div className="grid grid-cols-3 gap-4">
			<Card title="Card 1" description="Description 1">
				Content 1
			</Card>
			<Card title="Card 2" description="Description 2">
				Content 2
			</Card>
			<Card title="Card 3" description="Description 3">
				Content 3
			</Card>
		</div>
	)
}
