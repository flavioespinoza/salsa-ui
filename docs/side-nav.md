# Side Nav

A responsive and collapsible sidebar navigation component built with TailwindCSS and Zustand. It supports header icons, menu/footer sections, and transitions between expanded/collapsed states.

---

## ✅ Features

- Responsive sidebar with expand/collapse toggle
- Zustand store for managing sidebar state (`useSideNavStore`)
- Icons for each menu item with active state styling
- Header with logo and toggle icon
- Separate sections for main menu and footer items

---

## 📦 Import

```tsx
import SideNav from '@flavioespinoza/salsa-ui'
```

---

## 💡 Usage

```tsx
<SideNav
	menuItems={[
		{
			label: 'Home',
			path: '/',
			icon: (active) => <HomeIcon className={active ? 'text-black' : 'text-muted'} />
		}
	]}
	menuItemsFooter={[
		{
			label: 'Settings',
			path: '/settings',
			icon: (active) => <SettingsIcon className={active ? 'text-black' : 'text-muted'} />
		}
	]}
/>
```

---

## 🧾 Props

### `SideNavProps`

| Prop              | Type             | Required | Description                                |
|-------------------|------------------|----------|--------------------------------------------|
| `menuItems`       | `MenuItem[]`     | ✅        | List of nav items rendered at the top      |
| `menuItemsFooter` | `MenuItem[]`     | ✅        | List of nav items rendered at the bottom   |

---

### `MenuItem`

| Key    | Type                             | Required | Description                               |
|--------|----------------------------------|----------|-------------------------------------------|
| `label` | `string`                        | ✅        | The label text for the menu item          |
| `path`  | `string`                        | ✅        | URL path that triggers the active state   |
| `icon`  | `(isActive: boolean) => JSX.Element` | ✅  | Function that renders icon dynamically    |

---

## 🧠 Zustand Store

This component expects a global Zustand store hook `useSideNavStore` with:

```ts
{
	isExpanded: boolean
	width: string
	toggleSideNav: () => void
}
```

---

## 🧪 Behavior

- Highlights the current path using `usePathname` from `next/navigation`
- Automatically expands/collapses the label text using Tailwind's opacity/visibility
- Smooth transition between menu open/close states
- MenuIcon rotates on toggle

---

## 📁 Folder Placement

Typically placed inside:

```
src/components/ui/side-nav.tsx
```
