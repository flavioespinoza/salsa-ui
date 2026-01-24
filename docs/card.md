# Card

The `Card` components are versatile UI containers designed for showcasing structured content in your app. Built with Tailwind and Radix-friendly patterns.

---

## ✅ Features

- Supports `title`, `description`, `footer`, and custom `children`
- Responsive layout with width auto-calculated based on breakpoint
- Modular structure (`CardWrapper`, `CardHeader`, `CardFooter`, etc.)
- Optional height prop for custom sizing
- `CardAchievement` variant includes alternate layout with action button slot

---

## 📦 Import

```tsx
import Card, { CardAchievement } from '@flavioespinoza/salsa-ui'
```

---

## 💡 Usage

### Default Card

```tsx
const MydComponent = () => {
  return (
    <Card
      title="Project Title"
      description="Short description"
      footer={
        <span className="text-xs text-muted-foreground">Updated 2d ago</span>
      }
    >
      <p>This is the card body content.</p>
    </Card>
  );
};
```

---

## 🧾 Props

### `CardProps`

| Prop         | Type               | Required | Description                             |
|--------------|--------------------|----------|-----------------------------------------|
| `title`      | `ReactNode`        | ❌        | Top title text inside header            |
| `description`| `ReactNode`        | ❌        | Optional subtitle in the header         |
| `footer`     | `ReactNode`        | ❌        | Renders at bottom inside `CardFooter`   |
| `children`   | `ReactNode`        | ✅        | Card content/body                       |
| `height`     | `string \| number` | ❌        | Optional height value or Tailwind class |
| `className`  | `string`           | ❌        | Custom Tailwind styles                  |

---

## 🧩 Subcomponents

These are also exported if you want to build a card manually:

```ts
import {
	CardWrapper,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from '@flavioespinoza/salsa-ui'
```

This is how you would assemble it inside your custom component.

```ts
const AssembledCard = () => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>Your Card Title</CardTitle>
        <CardDescription>Your Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Your Card Footer</p>
      </CardFooter>
    </CardWrapper>
  );
};
```

---

## 🧪 Example Test

```tsx
import { render } from "@testing-library/react";
import Card from "@flavioespinoza/salsa-ui";

test("renders card title and description", () => {
  const { getByText } = render(
    <Card title="Test Title" description="This is a description">
      <p>Hello World</p>
    </Card>
  );
  expect(getByText("Test Title")).toBeInTheDocument();
  expect(getByText("Hello World")).toBeInTheDocument();
});
```

---

## 🎨 Theming

The Card uses semantic theme tokens for automatic light/dark mode support:

- `bg-card` — card background via `--card` CSS variable
- `text-card-foreground` — card text via `--card-foreground` CSS variable
- `outline-foreground/5` — subtle outline derived from the foreground token

Override CSS variables to customize:

```css
:root {
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(0 0% 3.9%);
}
.dark {
  --card: hsl(0 0% 3.9%);
  --card-foreground: hsl(0 0% 98%);
}
```

---

## 🔗 Related

- [`<CardSection />`](./card-section.md)
