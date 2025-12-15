import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../src/components/ui/dialog'
import { Button } from '../src/components/ui/button'

export function DialogExamples() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
				</DialogHeader>
				<p>Dialog content goes here</p>
			</DialogContent>
		</Dialog>
	)
}
