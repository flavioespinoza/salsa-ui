# Tabs API Reference

## Components

### Tabs

Root tabs component.

```tsx
interface TabsProps {
	value?: string
	onValueChange?: (value: string) => void
	defaultValue?: string
	orientation?: 'horizontal' | 'vertical'
	dir?: 'ltr' | 'rtl'
	activationMode?: 'automatic' | 'manual'
}
```

**Props**:
- `value`: Controlled active tab value
- `onValueChange`: Callback when active tab changes
- `defaultValue`: Uncontrolled default active tab
- `orientation`: Layout direction (default: 'horizontal')
- `dir`: Text direction (default: 'ltr')
- `activationMode`: How tabs are activated (default: 'automatic')

### TabsList

Container for tab triggers.

```tsx
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
```

### TabsTrigger

Button that activates a tab.

```tsx
interface TabsTriggerProps {
	value: string
	disabled?: boolean
}
```

### TabsContent

Content panel for a tab.

```tsx
interface TabsContentProps {
	value: string
	forceMount?: boolean
}
```

## Usage Examples

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@flavioespinoza/salsa-ui'

// Basic tabs
<Tabs defaultValue="tab1">
	<TabsList>
		<TabsTrigger value="tab1">Tab 1</TabsTrigger>
		<TabsTrigger value="tab2">Tab 2</TabsTrigger>
		<TabsTrigger value="tab3">Tab 3</TabsTrigger>
	</TabsList>
	<TabsContent value="tab1">
		<p>Content for Tab 1</p>
	</TabsContent>
	<TabsContent value="tab2">
		<p>Content for Tab 2</p>
	</TabsContent>
	<TabsContent value="tab3">
		<p>Content for Tab 3</p>
	</TabsContent>
</Tabs>

// Controlled tabs
const [activeTab, setActiveTab] = useState('account')

<Tabs value={activeTab} onValueChange={setActiveTab}>
	<TabsList>
		<TabsTrigger value="account">Account</TabsTrigger>
		<TabsTrigger value="password">Password</TabsTrigger>
	</TabsList>
	<TabsContent value="account">
		<Card>
			<CardHeader>
				<CardTitle>Account</CardTitle>
			</CardHeader>
			<CardContent>Account settings here</CardContent>
		</Card>
	</TabsContent>
	<TabsContent value="password">
		<Card>
			<CardHeader>
				<CardTitle>Password</CardTitle>
			</CardHeader>
			<CardContent>Password settings here</CardContent>
		</Card>
	</TabsContent>
</Tabs>

// Vertical tabs
<Tabs defaultValue="tab1" orientation="vertical">
	<TabsList>
		<TabsTrigger value="tab1">Tab 1</TabsTrigger>
		<TabsTrigger value="tab2">Tab 2</TabsTrigger>
	</TabsList>
	<TabsContent value="tab1">Content 1</TabsContent>
	<TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

// With disabled tab
<Tabs defaultValue="tab1">
	<TabsList>
		<TabsTrigger value="tab1">Active</TabsTrigger>
		<TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
		<TabsTrigger value="tab3">Active</TabsTrigger>
	</TabsList>
	<TabsContent value="tab1">Content 1</TabsContent>
	<TabsContent value="tab3">Content 3</TabsContent>
</Tabs>
```

## Accessibility

- Follows WAI-ARIA Tabs pattern
- Keyboard navigation (Arrow keys)
- Automatic/manual activation modes
- Proper ARIA attributes
- Focus management
