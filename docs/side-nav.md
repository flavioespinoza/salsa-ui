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

```ts
import { SideNav } from '@flavioespinoza/salsa-ui'
```

---

## 💡 Usage  (inside a component)

```ts
"use client";

import React from "react";
import { Header, SideNav, useSideNav, useSideNavStore } from "@flavioespinoza/salsa-ui";
import { menuItems, menuItemsFooter } from "@/constants/menu-items";

const HEADER_HEIGHT = "h-[74px]";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useSideNav();
  const { width } = useSideNavStore();

  return (
    <div id="mainLayoutWrapper" className="flex min-h-screen w-full">
      <SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
      <div
        id="mainLayoutContent"
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ width: `calc(100% - ${width}px)` }}
      >
        <Header height={HEADER_HEIGHT} />
        <main className={`flex-1 p-4`}>{children}</main>
      </div>
    </div>
  );
};

export { MainLayout };
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

### Example Menu Items and Footer Menu Items

```ts
"use client";

import React from "react";
import {
  DocumentationIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
} from "@flavioespinoza/salsa-ui";

const iconClasses = (isActive: boolean) => {
  return `w-[18px] h-[18px] text-[13px] ${
    isActive ? "text-black" : "text-gray-400"
  }`;
};

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
];

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
];

export { menuItems, menuItemsFooter };
```

---

## 🧠 Zustand Store

This component expects a global Zustand store hook `useSideNavStore` with:

```ts
interface StoreTypes {
  isExpanded: boolean;
  width: string;
  toggleSideNav: () => void;
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
