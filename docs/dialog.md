# Dialog

The `Dialog` component (also known as a modal) displays content in a layer above the app. Built with Radix UI for full accessibility and keyboard navigation support.

---

## ✨ Features

- Fully accessible with keyboard navigation
- Focus management and focus trapping
- Backdrop overlay with customizable opacity
- Composable with subcomponents for flexible layouts
- Built-in close button and ESC key support
- Smooth enter/exit animations

---

## 📦 Import

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Dialog with Footer Actions

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete your account? This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Controlled Dialog

```tsx
const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" defaultValue="john@example.com" />
      </div>
    </div>
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## 📋 Props

### Dialog

Inherits all Radix UI Dialog.Root props:

| Prop            | Type     | Description                           |
|-----------------|----------|---------------------------------------|
| `open`          | boolean  | Controlled open state                 |
| `onOpenChange`  | function | Callback when open state changes      |
| `defaultOpen`   | boolean  | Initial open state (uncontrolled)     |

### DialogTrigger

Inherits all Radix UI Dialog.Trigger props. Use `asChild` to render as a different element.

### DialogContent

Inherits all Radix UI Dialog.Content props:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

### DialogHeader, DialogFooter

Standard `div` props for layout sections.

### DialogTitle

Inherits all Radix UI Dialog.Title props. Required for accessibility.

### DialogDescription

Inherits all Radix UI Dialog.Description props.

---

## 🧱 Common Patterns

### Confirmation Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Item</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete this item
        from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Yes, delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Form Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Add New</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Create New Project</DialogTitle>
      <DialogDescription>
        Enter the details for your new project below.
      </DialogDescription>
    </DialogHeader>
    <form className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="project-name">Project Name</Label>
        <Input id="project-name" placeholder="My Awesome Project" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Project description..." />
      </div>
    </form>
    <DialogFooter>
      <Button type="submit">Create Project</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## 🎨 Styling

Customize dialog appearance:

```tsx
<DialogContent className="sm:max-w-[600px]">
  {/* Custom width */}
</DialogContent>

<DialogOverlay className="bg-black/50">
  {/* Custom overlay opacity */}
</DialogOverlay>
```

---

## 🧪 Testing Tips

- Test keyboard navigation (Tab, Escape)
- Verify focus trap keeps focus within dialog
- Check that focus returns to trigger after closing
- Test with screen readers for accessibility
- Verify overlay click closes dialog (if desired)

---

## ⚠️ Accessibility Notes

- Always include `DialogTitle` for screen readers
- Use `DialogDescription` for additional context
- The dialog traps focus automatically
- ESC key closes the dialog
- Focus returns to trigger element on close

---

## 🔗 Related

- [Radix UI Dialog](https://www.radix-ui.com/docs/primitives/components/dialog)
- [Alert](alert.md) - For simpler notifications
- [Button](button.md) - For trigger elements
