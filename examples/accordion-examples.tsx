import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../src/components/ui/accordion'

export function AccordionExamples() {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>Content 1</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>Content 2</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
