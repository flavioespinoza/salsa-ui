# ContextMenu

The `ContextMenu` component displays a menu when right-clicking (or long-pressing on touch devices) on an element. Built with Radix UI for full accessibility.

---

## ✨ Features

- Right-click triggered menus
- Nested submenus support
- Checkbox and radio items
- Keyboard shortcuts display
- Fully accessible
- Touch device support (long press)
- Keyboard navigation

---

## 📦 Import

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic ContextMenu

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Logout</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Icons and Shortcuts

```tsx
<ContextMenu>
  <ContextMenuTrigger className="border rounded p-8 text-center">
    Right click me
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" />
      Copy
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Scissors className="mr-2 h-4 w-4" />
      Cut
      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Clipboard className="mr-2 h-4 w-4" />
      Paste
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Submenus

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>
```

### With Checkboxes

```tsx
const [showBookmarks, setShowBookmarks] = useState(true)
const [showFullUrls, setShowFullUrls] = useState(false)

<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>View Options</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem
      checked={showBookmarks}
      onCheckedChange={setShowBookmarks}
    >
      Show Bookmarks Bar
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={showFullUrls}
      onCheckedChange={setShowFullUrls}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Radio Group

```tsx
const [view, setView] = useState('grid')

<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>View Mode</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value={view} onValueChange={setView}>
      <ContextMenuRadioItem value="grid">
        Grid View
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="list">
        List View
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="compact">
        Compact View
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
```

---

## 📋 Props

### ContextMenu

Inherits all Radix UI ContextMenu.Root props.

### ContextMenuTrigger

| Prop       | Type      | Description                     |
|------------|-----------|---------------------------------|
| `asChild`  | boolean   | Render as child element         |
| `disabled` | boolean   | Disable the trigger             |
| `className`| string    | Additional Tailwind classes     |

### ContextMenuItem

| Prop       | Type     | Description                     |
|------------|----------|---------------------------------|
| `inset`    | boolean  | Add left padding for icons      |
| `disabled` | boolean  | Disable this item               |
| `onSelect` | function | Callback when item selected     |
| `className`| string   | Additional Tailwind classes     |

---

## 🧱 Common Patterns

### File Browser Context Menu

```tsx
<ContextMenu>
  <ContextMenuTrigger asChild>
    <div className="border rounded p-4">
      <FileText className="h-12 w-12 mx-auto" />
      <p className="text-center mt-2">Document.pdf</p>
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <FolderOpen className="mr-2 h-4 w-4" />
      Open
    </ContextMenuItem>
    <ContextMenuItem>
      <Download className="mr-2 h-4 w-4" />
      Download
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Email</ContextMenuItem>
        <ContextMenuItem>Copy Link</ContextMenuItem>
        <ContextMenuItem>Export</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Pencil className="mr-2 h-4 w-4" />
      Rename
    </ContextMenuItem>
    <ContextMenuItem className="text-destructive">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Image Context Menu

```tsx
<ContextMenu>
  <ContextMenuTrigger asChild>
    <img
      src="/photo.jpg"
      alt="Photo"
      className="w-64 h-64 object-cover rounded"
    />
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Save Image As...</ContextMenuItem>
    <ContextMenuItem>Copy Image</ContextMenuItem>
    <ContextMenuItem>Copy Image Address</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Open Image in New Tab</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Search Image with Google</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Table Row Context Menu

```tsx
<ContextMenu>
  <ContextMenuTrigger asChild>
    <tr className="hover:bg-muted">
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Eye className="mr-2 h-4 w-4" />
      View Details
    </ContextMenuItem>
    <ContextMenuItem>
      <Pencil className="mr-2 h-4 w-4" />
      Edit User
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      <Mail className="mr-2 h-4 w-4" />
      Send Email
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">
      <UserMinus className="mr-2 h-4 w-4" />
      Remove User
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

---

## 🎨 Styling

Customize context menu appearance:

```tsx
<ContextMenuContent className="w-64">
  <ContextMenuItem className="text-lg py-3">
    Large Item
  </ContextMenuItem>
</ContextMenuContent>
```

---

## 🧪 Testing Tips

- Test right-click behavior on desktop
- Verify long-press on touch devices
- Check keyboard navigation (Arrow keys, Enter)
- Test nested submenus
- Verify disabled items
- Test checkbox/radio state changes
- Check screen reader compatibility

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Right-click or context menu key triggers
- Arrow keys navigate items
- Enter selects active item
- Escape closes menu
- Proper ARIA attributes
- Submenus open with Arrow Right
- Focus trap within menu

---

## 💡 Best Practices

- Use context menus for secondary actions
- Don't hide primary actions in context menus
- Keep menus concise (< 10 top-level items)
- Group related items with separators
- Use icons for better scannability
- Show keyboard shortcuts when available
- Consider mobile users (long-press isn't discoverable)
- Provide alternative access methods

---

## 🔗 Related

- [Radix UI Context Menu](https://www.radix-ui.com/docs/primitives/components/context-menu)
- [DropdownMenu](https://www.radix-ui.com/docs/primitives/components/dropdown-menu) - Click-triggered alternative
