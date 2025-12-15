# Tabs

The `Tabs` component organizes content into multiple panels, with only one panel visible at a time. Built with Radix UI for full accessibility and keyboard navigation.

---

## ✨ Features

- Fully accessible with keyboard navigation
- Automatic panel activation or manual control
- Composable API with flexible layouts
- Smooth transitions
- Supports vertical and horizontal orientations
- Roving tabindex for arrow key navigation

---

## 📦 Import

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic Tabs

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>
```

### Controlled Tabs

```tsx
const [activeTab, setActiveTab] = useState('overview')

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
  <TabsContent value="reports">Reports content</TabsContent>
</Tabs>
```

### With Cards

```tsx
<Tabs defaultValue="profile" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="profile">
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          View and edit your profile information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="John Doe" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="john@example.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  </TabsContent>
  <TabsContent value="settings">
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Manage your account settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Settings content */}
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>
```

---

## 📋 Props

### Tabs

Inherits all Radix UI Tabs.Root props:

| Prop            | Type     | Description                           |
|-----------------|----------|---------------------------------------|
| `value`         | string   | Controlled active tab value           |
| `onValueChange` | function | Callback when active tab changes      |
| `defaultValue`  | string   | Initial active tab (uncontrolled)     |
| `orientation`   | string   | `horizontal` (default) or `vertical`  |

### TabsList

Container for tab triggers:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `className`| string | Additional Tailwind classes     |

### TabsTrigger

Individual tab button:

| Prop       | Type    | Description                     |
|------------|---------|---------------------------------|
| `value`    | string  | Value of this tab               |
| `disabled` | boolean | Disable this tab                |
| `className`| string  | Additional Tailwind classes     |

### TabsContent

Tab panel content:

| Prop       | Type   | Description                     |
|------------|--------|---------------------------------|
| `value`    | string | Value matching the tab trigger  |
| `className`| string | Additional Tailwind classes     |

---

## 🧱 Common Patterns

### Dashboard Tabs

```tsx
<Tabs defaultValue="overview" className="space-y-4">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="space-y-4">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Dashboard cards */}
    </div>
  </TabsContent>
  <TabsContent value="analytics">
    {/* Analytics content */}
  </TabsContent>
  <TabsContent value="reports">
    {/* Reports content */}
  </TabsContent>
  <TabsContent value="notifications">
    {/* Notifications content */}
  </TabsContent>
</Tabs>
```

### Settings Navigation

```tsx
<Tabs defaultValue="general" className="w-full">
  <TabsList className="w-full justify-start">
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>

  <TabsContent value="general">
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
      </CardHeader>
      <CardContent>
        {/* General settings form */}
      </CardContent>
    </Card>
  </TabsContent>

  {/* Other tab contents */}
</Tabs>
```

### Documentation Tabs

```tsx
<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">
    <div className="rounded-md border p-4">
      <Button>Example Button</Button>
    </div>
  </TabsContent>
  <TabsContent value="code">
    <pre className="rounded-md bg-slate-950 p-4">
      <code className="text-white">
        {`<Button>Example Button</Button>`}
      </code>
    </pre>
  </TabsContent>
</Tabs>
```

### Product Details Tabs

```tsx
<Tabs defaultValue="description">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="description">Description</TabsTrigger>
    <TabsTrigger value="specifications">Specifications</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="description">
    <p>Product description goes here...</p>
  </TabsContent>
  <TabsContent value="specifications">
    <table>
      {/* Specifications table */}
    </table>
  </TabsContent>
  <TabsContent value="reviews">
    <div className="space-y-4">
      {/* Reviews list */}
    </div>
  </TabsContent>
</Tabs>
```

### Disabled Tab

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Available</TabsTrigger>
    <TabsTrigger value="tab2" disabled>Coming Soon</TabsTrigger>
    <TabsTrigger value="tab3">Available</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Tab 1 content</TabsContent>
  <TabsContent value="tab3">Tab 3 content</TabsContent>
</Tabs>
```

---

## 🎨 Styling

Customize tabs appearance:

```tsx
{/* Full width tabs */}
<TabsList className="w-full">
  <TabsTrigger value="tab1" className="flex-1">Tab 1</TabsTrigger>
  <TabsTrigger value="tab2" className="flex-1">Tab 2</TabsTrigger>
</TabsList>

{/* Vertical tabs layout */}
<Tabs defaultValue="tab1" orientation="vertical" className="flex">
  <TabsList className="flex-col h-full">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

## 🧪 Testing Tips

- Test keyboard navigation (Arrow keys, Home, End)
- Verify tab panel content shows/hides correctly
- Test disabled tabs don't activate
- Check focus management
- Verify controlled and uncontrolled modes
- Test with screen readers

---

## ⚠️ Accessibility Notes

- Fully keyboard accessible
- Arrow keys navigate between tabs
- Home/End jump to first/last tab
- Space/Enter activate focused tab
- Proper ARIA attributes (role="tablist", "tab", "tabpanel")
- Focus management follows ARIA patterns

---

## 🔗 Related

- [Radix UI Tabs](https://www.radix-ui.com/docs/primitives/components/tabs)
- [Card](card.md) - Often used with tab content
- [Button](button.md) - Similar interactive patterns
