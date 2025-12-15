# Command

The `Command` component (also known as a command palette) provides a searchable command menu interface. Built with cmdk for fast fuzzy search and keyboard navigation.

---

## ✨ Features

- Fast fuzzy search powered by cmdk
- Keyboard-first navigation
- Command groups and separators
- Keyboard shortcuts display
- Dialog mode for overlay
- Loading and empty states
- Fully customizable

---

## 📦 Import

```tsx
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Command

```tsx
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Command Dialog (Modal)

```tsx
const [open, setOpen] = useState(false)

// Toggle with Cmd+K or Ctrl+K
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
}, [])

return (
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search Emoji</CommandItem>
        <CommandItem>Calculator</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)
```

### With Groups and Shortcuts

```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Files">
      <CommandItem>
        <File className="mr-2 h-4 w-4" />
        <span>New File</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Folder className="mr-2 h-4 w-4" />
        <span>New Folder</span>
        <CommandShortcut>⌘⇧N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Preferences</span>
        <CommandShortcut>⌘,</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## 📋 Props

### Command

| Prop       | Type     | Description                          |
|------------|----------|--------------------------------------|
| `value`    | string   | Controlled selected value            |
| `onValueChange` | function | Callback when selection changes |
| `filter`   | function | Custom filter function               |
| `shouldFilter` | boolean | Enable/disable filtering (default: true) |
| `className`| string   | Additional Tailwind classes          |

### CommandDialog

Inherits Dialog props:

| Prop            | Type     | Description                     |
|-----------------|----------|---------------------------------|
| `open`          | boolean  | Controlled open state           |
| `onOpenChange`  | function | Callback when open state changes|

### CommandInput

| Prop          | Type   | Description                     |
|---------------|--------|---------------------------------|
| `placeholder` | string | Placeholder text                |
| `value`       | string | Controlled input value          |
| `onValueChange` | function | Input change callback       |
| `className`   | string | Additional Tailwind classes     |

### CommandItem

| Prop          | Type     | Description                     |
|---------------|----------|---------------------------------|
| `value`       | string   | Value for filtering             |
| `onSelect`    | function | Callback when item selected     |
| `disabled`    | boolean  | Disable this item               |
| `className`   | string   | Additional Tailwind classes     |

---

## 🧱 Common Patterns

### App Command Palette

```tsx
const [open, setOpen] = useState(false)
const router = useRouter()

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen(true)
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
}, [])

return (
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Navigation">
        <CommandItem onSelect={() => router.push('/dashboard')}>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </CommandItem>
        <CommandItem onSelect={() => router.push('/settings')}>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Actions">
        <CommandItem onSelect={() => console.log('New project')}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
          <CommandShortcut>⌘N</CommandShortcut>
        </CommandItem>
        <CommandItem onSelect={() => console.log('Search')}>
          <Search className="mr-2 h-4 w-4" />
          Search Files
          <CommandShortcut>⌘F</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)
```

### Search with Icons

```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Recent">
      <CommandItem>
        <Clock className="mr-2 h-4 w-4" />
        <span>Recent Project A</span>
      </CommandItem>
      <CommandItem>
        <Clock className="mr-2 h-4 w-4" />
        <span>Recent Project B</span>
      </CommandItem>
    </CommandGroup>
    <CommandGroup heading="All Projects">
      <CommandItem>
        <FolderOpen className="mr-2 h-4 w-4" />
        <span>Project Alpha</span>
      </CommandItem>
      <CommandItem>
        <FolderOpen className="mr-2 h-4 w-4" />
        <span>Project Beta</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### With Loading State

```tsx
const [loading, setLoading] = useState(false)

<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    {loading ? (
      <div className="py-6 text-center text-sm">Loading...</div>
    ) : (
      <>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Results">
          <CommandItem>Result 1</CommandItem>
          <CommandItem>Result 2</CommandItem>
        </CommandGroup>
      </>
    )}
  </CommandList>
</Command>
```

---

## 🎨 Styling

Customize command palette appearance:

```tsx
<Command className="rounded-lg border shadow-md">
  <CommandInput className="h-12" placeholder="Custom styled..." />
  <CommandList className="max-h-[400px]">
    <CommandGroup className="p-2">
      <CommandItem className="px-4 py-3">Large Item</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## 🧪 Testing Tips

- Test keyboard navigation (Arrow keys, Enter, Escape)
- Verify fuzzy search matches expected results
- Test with many items for performance
- Check empty state displays correctly
- Test keyboard shortcut triggers
- Verify focus management

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Arrow keys navigate items
- Enter selects active item
- Escape closes dialog
- Type to filter/search
- Proper ARIA roles and labels
- Focus trap in dialog mode

---

## 💡 Best Practices

- Keep command items focused and actionable
- Use clear, searchable labels
- Group related commands together
- Show keyboard shortcuts when available
- Provide feedback on selection
- Keep the list manageable (< 50 items for performance)

---

## 🔗 Related

- [cmdk](https://cmdk.paco.me/) - The underlying library
- [Dialog](dialog.md) - Modal dialog component
- [Input](input.md) - Text input component
