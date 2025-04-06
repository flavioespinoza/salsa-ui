# `useSideNavStore` – Zustand Store for Side Navigation

A global Zustand store that manages the state of the responsive side navigation, including its expansion state, width, and detected device type.

---

## ✅ Features

- Stores side nav width and expansion status
- Keeps track of the current device type (`mobile`, `tablet`, `desktop`)
- Provides methods to:
  - Set device and adjust state accordingly
  - Toggle sidebar open/collapsed
- Useful for maintaining layout consistency across components

---

## 📦 Import

```ts
import { useSideNavStore } from "@flavioespinoza/salsa-ui";
```

---

## 🧠 State Shape

```ts
interface SideNavState {
  device: "mobile" | "tablet" | "desktop";
  isExpanded: boolean;
  width: number;
  setDevice: (device: "mobile" | "tablet" | "desktop") => void;
  toggleSideNav: () => void;
}
```

---

## 🧬 Usage Examples

### Inside a component

```tsx
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

### Access store values

```ts
const { isExpanded, width, device } = useSideNavStore()
```

### Toggle nav manually

```ts
const { toggleSideNav } = useSideNavStore()
<button onClick={toggleSideNav}>Toggle</button>
```

### Update device responsively

Typically called in combination with the `useSideNav` hook.

```ts
const { setDevice } = useSideNavStore()
setDevice('tablet')
```

---

## 📏 Behavior Logic

### `setDevice`

- Updates the `device` type
- Sets:
  - `isExpanded = true` only for `desktop`
  - `width = 260` for `desktop`
  - `width = 72` for `tablet`
  - `width = 0` for `mobile`

### `toggleSideNav`

- Toggles `isExpanded`
- If collapsing:
  - `width = 0` for `mobile`
  - `width = 72` for `tablet/desktop`
- If expanding:
  - `width = 260`

---

## 📁 Location

Place this file in your Zustand store directory:

```
src/state/use-side-nav-store.ts
```

---

## 🔍 Debug Output

This store logs internal state changes using `console.log()`:

```ts
console.log('📢 Updated SideNav State:', newState)
```

This can be removed or replaced with a proper logging tool in production.
