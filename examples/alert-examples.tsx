import { Alert, AlertTitle, AlertDescription } from '../src/components/ui/alert'

export function AlertExamples() {
	return (
		<div className="space-y-4">
			<Alert variant="default">
				<AlertTitle>Default Alert</AlertTitle>
				<AlertDescription>This is a default alert</AlertDescription>
			</Alert>
			<Alert variant="destructive">
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>Something went wrong</AlertDescription>
			</Alert>
		</div>
	)
}
