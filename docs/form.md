# Form

Form components for building accessible forms.

## Import

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@flavioespinoza/salsa-ui'
```

## Usage

```tsx
<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```
