# useSideNav Hook

A responsive hook that detects device width and updates the Zustand-based side nav store (`useSideNavStore`) with the current device type (`mobile`, `tablet`, or `desktop`). This allows components to adapt their layout and behavior responsively based on screen size.

---

## ✅ Features

- Automatically detects device width
- Listens for window resize events
- Updates global state using `useSideNavStore`
- Useful for triggering layout changes in side navigation or layouts

---

## 📦 Import

```ts
import { useSideNav } from '@flavioespinoza/salsa-ui'
```

---

## 🧠 How It Works

This hook measures `window.innerWidth`:

- `≤ 640px` → `'mobile'`
- `> 640px && ≤ 1024px` → `'tablet'`
- `> 1024px` → `'desktop'`

It stores the result in a Zustand store, which can be consumed by any component in the app.

---

## 🧾 Dependencies

- Zustand store: `useSideNavStore`
  - Must contain a setter: `setDevice(device: 'mobile' | 'tablet' | 'desktop')`

---

## 🧪 Example

### Hook Usage (inside a component)

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

---

## 🧬 SideNav Store Snippet

The Zustand store must implement a `setDevice` function:

```ts
// use-side-nav-store.ts
import { create } from 'zustand'

type DeviceType = 'mobile' | 'tablet' | 'desktop'

interface SideNavState {
	device: DeviceType
	setDevice: (device: DeviceType) => void
}

export const useSideNavStore = create<SideNavState>((set) => ({
	device: 'desktop',
	setDevice: (device) => set({ device })
}))
```

---

## 📁 Folder Placement

Typical hook location:

```
src/hooks/use-side-nav.ts
```
