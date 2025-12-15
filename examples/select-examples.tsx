import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../src/components/ui/select'

export function SelectExamples() {
	return (
		<Select>
			<SelectTrigger className="w-[200px]">
				<SelectValue placeholder="Select option" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
			</SelectContent>
		</Select>
	)
}
