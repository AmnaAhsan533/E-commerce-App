# GLOW-CART: State Management Overview

This document explains how **Context API** and **Redux Toolkit** are used in GLOW-CART to handle application state, the problems faced without them, and how combining both solved those issues.

---

## 1. Problems Faced Before Using State Management

Without dedicated state management tools, building a complex React app like GLOW-CART creates several architecture problems:

* **Prop Drilling:** Passing state through multiple layers of components that don't need the data just to reach a deeply nested child component.
* **Component Bloat:** Putting global data, async fetching logic, and UI state inside a single component makes code hard to read and test.
* **Unnecessary Re-renders:** Passing state changes down large component trees forces unrelated components to re-render, slowing down the app.
* **State Inconsistency:** Trying to sync shopping bag items or UI popups across different pages leads to broken or out-of-sync data.

---

## 2. How Context API is Used in GLOW-CART

We use **Context API** for **lightweight, UI-focused global states** that do not change frequently or require complex business logic.

### Implemented Contexts:

1. **`ToastContext`:** Manages pop-up alerts across the entire app (e.g., "Added item to bag").
2. **`ThemeContext`:** Manages the active mode (`light` or `dark`), toggling CSS classes and syncing settings with `localStorage`.

### Why Context API Fits This Best:

* Simple configuration without heavy setup boilerplate.
* Perfect for theme toggles and UI alerts that components across the app need to trigger instantly.

---

## 3. How Redux Toolkit is Used in GLOW-CART

We use **Redux Toolkit (RTK)** for **heavy data management, business logic, and server side-effects**.

### Implemented Slices:

1. **`productsSlice`:**
* Uses `createAsyncThunk` (`fetchProducts`) to handle network requests to the Makeup API.
* Tracks loading states (`idle`, `loading`, `succeeded`, `failed`) and stores product catalog data.


2. **`cartSlice`:**
* Manages shopping bag items, quantity increments/decrements, item removal, and subtotal calculations.
* Controls the open/closed visibility state of the slide-out `CartDrawer`.



### Why Redux Toolkit Fits This Best:

* **Central Store:** Keeps all business data in a single, predictable location (`store.js`).
* **Immer Integration:** Allows direct mutations inside slices (like `state.items.push()`) while safely generating immutable updates under the hood.
* **Predictable Actions:** Uses clear dispatch events (`addToCart`, `updateQuantity`, `toggleCart`) that make debugging straightforward.

---

## 4. Problems Solved by Using Both Together

| Problem Without Tools | How We Solved It |
| --- | --- |
| **Prop Drilling** | `<Provider>` and `<ToastProvider>` wrap the app at the root level so any component accesses state directly using hooks (`useSelector`, `useToast`, `useTheme`). |
| **Messy API Fetching** | `createAsyncThunk` handles API loading, data storage, and network errors cleanly outside our page components. |
| **Data Out of Sync** | The header badge, product cards, drawer, and checkout screen read from the exact same Redux store state. |
| **UI Alert Overhead** | Any component can trigger a global toast notification with a single line: `showToast("Message")`. |