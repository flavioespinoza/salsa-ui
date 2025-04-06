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

**NOTE**: `useSideNavStore` is available from `@flavioespinoza/salsa-ui` but this code example shows what the hook is and how it works.

```ts
import {  useSideNavStore } from "@flavioespinoza/salsa-ui";
```

The Zustand store must implement a `setDevice` function:

```ts
// use-side-nav-store.ts
import { create } from 'zustand'

interface SideNavState {
	device: 'mobile' | 'tablet' | 'desktop'
	isExpanded: boolean
	width: number
	setDevice: (device: 'mobile' | 'tablet' | 'desktop') => void
	toggleSideNav: () => void
}

export const useSideNavStore = create<SideNavState>((set) => ({
	device: 'desktop',
	isExpanded: true,
	width: 260,

	setDevice: (device) => {
		const newState = {
			device,
			isExpanded: device === 'desktop',
			width: device === 'mobile' ? 0 : device === 'tablet' ? 72 : 260
		}
		console.log('📢 Updated SideNav State:', newState)
		set(newState)
	},

	toggleSideNav: () => {
		set((state) => {
			const newState = {
				...state,
				isExpanded: !state.isExpanded,
				width: state.isExpanded ? (state.device === 'mobile' ? 0 : 72) : 260
			}
			console.log('📢 Toggled SideNav State:', newState)
			return newState
		})
	}
}))
```

---

## 📁 Folder Placement

Typical hook location:

```
src/hooks/use-side-nav.ts
```
