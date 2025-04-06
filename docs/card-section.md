# Card section

The `CardSection` component displays a dynamic list of cards in a responsive layout. It supports rendering either standard cards or achievement-style cards depending on the `cardType` prop.

---

## ✅ Features

- Automatically wraps cards in a responsive grid (1–4 cards)
- Dynamically switches between `<Card />` or `<CardAchievement />`
- Accepts any `ReactNode` in the card's `footer` slot
- Tailwind-compatible via `className` override

---

## 📦 Import

```tsx
import { CardSection } from '@flavioespinoza/salsa-ui'
```

---

## 💡 Usage

```tsx
<CardSection
	cardType="Card"
	cards={[
		{
			title: 'Project One',
			description: 'This is a demo project.',
			content: 'Here is the content of the card.',
			footer: <span className="text-xs text-muted-foreground">Updated 1d ago</span>
		},
		{
			title: 'Project Two',
			description: 'Another card description.',
			content: 'More content goes here.',
			footer: <button className="text-sm text-blue-500">Action</button>
		}
	]}
/>
```

---

## 🧾 Props

| Prop        | Type                         | Required | Description                                      |
|-------------|------------------------------|----------|--------------------------------------------------|
| `cards`     | `CardData[]`                 | ✅       | Array of card data objects (max 4)               |
| `cardType`  | `'Card' \| 'CardAchievement'`| ✅       | Determines which component to render             |
| `className` | `string`                     | ❌       | Optional Tailwind classes for outer wrapper      |

### `CardData` Type

```ts
type CardData = {
	title: string
	description: string
	content: string
	footer: React.ReactNode
}
```

---

## 📐 Responsive Layout

- 1 card: full width
- 2 cards: 50% width on `sm`
- 3–4 cards: 1/3 width on `sm`, 1/4 on `lg`

---

## 🧪 Testing

```tsx
import { render } from '@testing-library/react'
import { CardSection } from '@flavioespinoza/salsa-ui'

test('renders a card section with 2 cards', () => {
	const cards = [
		{ title: 'One', description: '', content: 'A', footer: null },
		{ title: 'Two', description: '', content: 'B', footer: null }
	]
	const { getByText } = render(<CardSection cards={cards} cardType="Card" />)
	expect(getByText('One')).toBeInTheDocument()
	expect(getByText('B')).toBeInTheDocument()
})
```

---

## 🔗 Related

- [`<Card />`](./card.md)
- [`<CardAchievement />`](./card-achievement.md)
