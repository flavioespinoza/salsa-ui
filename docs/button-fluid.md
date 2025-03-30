# ButtonFluid

A reusable button component with a fluid, rounded style and support for custom classes and full accessibility.

## Props

| Name      | Type                         | Description                 |
| --------- | ---------------------------- | --------------------------- |
| children  | `React.ReactNode`            | Content inside the button   |
| className | `string`                     | Additional Tailwind classes |
| ...props  | `React.ButtonHTMLAttributes` | All native button props     |

## Usage

```tsx
import { ButtonFluid } from '@flavioespinoza/salsa-ui'

<ButtonFluid className="bg-blue-600 text-white">Click Me</ButtonFluid>
```

Variants

```tsx
import { ButtonFluid } from '@flavioespinoza/salsa-ui'

<ButtonFluid className="bg-green-500 text-white">Click Me</ButtonFluid>
```
