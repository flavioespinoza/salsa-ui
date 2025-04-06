# SideNav

A responsive and collapsible sidebar navigation component built with TailwindCSS and Zustand. It supports customizable header logo, menu/footer sections, tooltips, and smooth transitions between expanded/collapsed states.

---

## ✅ Features

- Responsive sidebar with expand/collapse toggle
- Zustand store for managing sidebar state (`useSideNavStore`)
- Icons for each menu item with active state styling
- Customizable header logo component
- Tooltips for menu items when sidebar is collapsed (tablet/desktop only)
- Separate sections for main menu and footer items
- Smooth transitions for expand/collapse states

---

## 📦 Import

```ts
import { SideNav } from '@flavioespinoza/salsa-ui'
```

---

## 🎨 Behavior

### Responsive Behavior
- Mobile: 
  - Sidebar is hidden (width: 0)
  - Accessed via menu button in header
- Tablet/Desktop: 
  - Collapsed: Shows icons only with tooltips (width: 72px)
  - Expanded: Shows full sidebar with labels (width: 260px)
  - Toggle via menu button in sidebar

### Active State
- Active menu items have white background and black text
- Inactive items have gray text with pink hover effect

### Tooltips
- Only shown when sidebar is collapsed on tablet/desktop
- Display menu item labels on hover

---

## 💡 Basic Usage

```tsx
import { LogoIcon } from '@/components/ui/icons'
import { menuItems, menuItemsFooter } from "@/constants/menu-items"

const YourComponent = () => {
  return (
    <SideNav 
      menuItems={menuItems} 
      menuItemsFooter={menuItemsFooter} 
      logo={LogoIcon}
    />
  )
}
```

### SideNavProps Type

```tsx
interface SideNavProps {
  menuItems: MenuItem[]        // Main menu items
  menuItemsFooter: MenuItem[]  // Footer menu items
  logo: React.FC<{ className?: string }> // Logo component to display in header
}
```

### MenuItem Type

```tsx
interface MenuItem {
  label: string
  path: string
  icon: (isActive: boolean) => JSX.Element
}
```

### Example Menu Items

```tsx
"use client"

import React from "react"
import {
  DocumentationIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
} from "@flavioespinoza/salsa-ui"

const iconClasses = (isActive: boolean) => {
  return `w-[18px] h-[18px] text-[13px] ${
    isActive ? "text-black" : "text-gray-400"
  }`
}

const menuItems = [
  {
    label: "Home",
    path: "/",
    icon: (isActive: boolean) => <HomeIcon className={iconClasses(isActive)} />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: (isActive: boolean) => (
      <SettingsIcon className={iconClasses(isActive)} />
    ),
  },
]

const menuItemsFooter = [
  {
    label: "Documentation",
    path: "/documentation",
    icon: (isActive: boolean) => (
      <DocumentationIcon className={iconClasses(isActive)} />
    ),
  },
  {
    label: "Logout",
    path: "/logout",
    icon: (isActive: boolean) => (
      <LogoutIcon className={iconClasses(isActive)} />
    ),
  },
]

export { menuItems, menuItemsFooter }
```

---

### MainLayout Example

```tsx
import React from "react"
import { Header, SideNav, useSideNav, useSideNavStore } from "@flavioespinoza/salsa-ui"
import { menuItems, menuItemsFooter } from "@/constants/menu-items"

const HEADER_HEIGHT = "h-[74px]"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useSideNav()
  const { width } = useSideNavStore()

  return (
    <div id="mainLayoutWrapper" className="flex min-h-screen w-full">
      <SideNav 
        menuItems={menuItems} 
        menuItemsFooter={menuItemsFooter} 
        logo={LogoIcon}
      />
      <div
        id="mainLayoutContent"
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ width: `calc(100% - ${width}px)` }}
      >
        <Header height={HEADER_HEIGHT} />
        <main className={`flex-1 p-4`}>{children}</main>
      </div>
    </div>
  )
}

export { MainLayout }
```

---

## 🧠 State Management

### Zustand Store
The component uses a Zustand store (`useSideNavStore`) to manage its state. Import the hook and the `useSideNav` utility to handle responsive behavior:

```ts
interface SideNavStore {
  isExpanded: boolean
  width: number
  device: 'mobile' | 'tablet' | 'desktop'
  toggleSideNav: () => void
}
```

---

## 🧪 Interactive Features

- Active State:
  - Uses `usePathname` from `next/navigation` to highlight current route
  - Active items have white background with black text
  - Inactive items have gray text with pink hover effect

- Transitions:
  - Smooth width transitions for expand/collapse
  - Opacity transitions for text labels
  - MenuIcon rotation animation on toggle
  - Fade transitions for logo visibility
