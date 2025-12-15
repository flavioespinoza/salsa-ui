import { Form, FormField, FormItem, FormLabel, FormControl } from '../src/components/ui/form'
import { Input } from '../src/components/ui/input'

export function FormExamples() {
	return (
		<div>
			<FormItem>
				<FormLabel>Email</FormLabel>
				<FormControl>
					<Input type="email" placeholder="email@example.com" />
				</FormControl>
			</FormItem>
		</div>
	)
}
