# Textarea

A reusable, styled multiline `<textarea>` component using TailwindCSS and Radix-friendly utility classes. It supports full accessibility, focus rings, and custom class overrides.

---

## ✅ Features

- Styled with Tailwind utility classes
- Full accessibility support (`focus-visible`, `disabled`)
- Automatically resizes with `min-height`
- Customizable via `className` prop

---

## 📦 Import

```tsx
import { Textarea } from '@flavioespinoza/salsa-ui'
```

---

## 💡 Usage

```tsx
<Textarea placeholder="Write your message..." />
```

Or with more props:

```tsx
<Textarea
  ref={inputRef}
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Ask anything"
  rows={2}
  className="resize-y"
/>
```

---

## 🧾 Props

This component extends all native HTML `<textarea>` props.

| Prop        | Type                       | Required | Description                                  |
|-------------|----------------------------|----------|----------------------------------------------|
| `className` | `string`                   | ❌        | Tailwind classes for custom styling          |
| `rows`      | `number`                   | ❌        | Initial number of visible text rows          |
| `placeholder` | `string`                | ❌        | Placeholder text shown inside the textarea   |
| `disabled`  | `boolean`                  | ❌        | Disables input if true                       |
| ...rest     | `TextareaHTMLAttributes`   | ❌        | Any other native textarea props              |

---

## 🧪 Example

```tsx
const Form = () => {
  return (
    <form className="space-y-4">
      <label htmlFor="message" className="block text-sm font-medium">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        placeholder="Type here..."
        rows={3}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

```

---

## 📁 Folder Placement

Typically located in:

```
src/components/ui/textarea.tsx
```
