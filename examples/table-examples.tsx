import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../src/components/ui/table'

export function TableExamples() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>John Doe</TableCell>
					<TableCell>john@example.com</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
