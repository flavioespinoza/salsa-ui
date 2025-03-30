# ButtonFluid

A reusable button component built with Fluid-Tailwind – an npm module that dynamically generates fluid (responsive) CSS values using Tailwind’s utility classes. When applied to a component, it automatically creates clamp() CSS functions for smooth scaling between breakpoints.

## Props

| Name      | Type                         | Description                 |
| --------- | ---------------------------- | --------------------------- |
| children  | `React.ReactNode`            | Content inside the button   |
| className | `string`                     | Additional Tailwind classes |
| ...props  | `React.ButtonHTMLAttributes` | All native button props     |

## Usage

```tsx
import { ButtonFluid } from '@flavioespinoza/salsa-ui'

const handleClick = () => alert('Button Clicked!')

<ButtonFluid className="bg-green-500 text-white" onClick={handleClick}>Click Me</ButtonFluid>
```
