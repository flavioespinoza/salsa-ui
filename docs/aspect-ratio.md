# AspectRatio

The `AspectRatio` component maintains a consistent width-to-height ratio for its content, commonly used for responsive images and videos.

---

## ✨ Features

- Maintains aspect ratio across all screen sizes
- Prevents layout shift during loading
- Works with images, videos, and any content
- Simple, declarative API
- Fully responsive
- No CSS hacks required

---

## 📦 Import

```tsx
import { AspectRatio } from '@flavioespinoza/salsa-ui'
```

---

## 🚀 Usage

### Basic 16:9 Ratio

```tsx
<AspectRatio ratio={16 / 9}>
  <img
    src="/photo.jpg"
    alt="Photo"
    className="rounded-md object-cover w-full h-full"
  />
</AspectRatio>
```

### Square (1:1) Ratio

```tsx
<AspectRatio ratio={1}>
  <img
    src="/avatar.jpg"
    alt="Avatar"
    className="rounded-full object-cover w-full h-full"
  />
</AspectRatio>
```

### Video Embed (16:9)

```tsx
<AspectRatio ratio={16 / 9} className="bg-muted">
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    className="w-full h-full"
    allowFullScreen
  />
</AspectRatio>
```

### Portrait Photo (3:4)

```tsx
<AspectRatio ratio={3 / 4}>
  <img
    src="/portrait.jpg"
    alt="Portrait"
    className="object-cover w-full h-full"
  />
</AspectRatio>
```

---

## 📋 Props

| Prop       | Type   | Description                                      |
|------------|--------|--------------------------------------------------|
| `ratio`    | number | Aspect ratio (width / height). Default: 1       |
| `className`| string | Additional Tailwind classes                      |

---

## 🧱 Common Patterns

### Image Gallery

```tsx
<div className="grid grid-cols-3 gap-4">
  <AspectRatio ratio={1}>
    <img src="/photo1.jpg" className="object-cover w-full h-full rounded" />
  </AspectRatio>
  <AspectRatio ratio={1}>
    <img src="/photo2.jpg" className="object-cover w-full h-full rounded" />
  </AspectRatio>
  <AspectRatio ratio={1}>
    <img src="/photo3.jpg" className="object-cover w-full h-full rounded" />
  </AspectRatio>
</div>
```

### Card with Image

```tsx
<Card>
  <AspectRatio ratio={16 / 9}>
    <img
      src="/card-image.jpg"
      alt="Card"
      className="object-cover w-full h-full rounded-t-lg"
    />
  </AspectRatio>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content...</p>
  </CardContent>
</Card>
```

### Product Grid

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {products.map((product) => (
    <div key={product.id}>
      <AspectRatio ratio={1} className="bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full rounded"
        />
      </AspectRatio>
      <h3 className="mt-2 font-medium">{product.name}</h3>
      <p className="text-sm text-muted-foreground">${product.price}</p>
    </div>
  ))}
</div>
```

### Video Player

```tsx
<div className="max-w-4xl mx-auto">
  <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden">
    <video
      src="/video.mp4"
      controls
      className="w-full h-full"
    />
  </AspectRatio>
</div>
```

### Map Embed

```tsx
<AspectRatio ratio={21 / 9} className="bg-muted rounded-lg overflow-hidden">
  <iframe
    src="https://maps.google.com/..."
    className="w-full h-full"
    loading="lazy"
  />
</AspectRatio>
```

### Background Pattern

```tsx
<AspectRatio ratio={2 / 1} className="bg-gradient-to-br from-purple-500 to-pink-500">
  <div className="flex items-center justify-center h-full">
    <h1 className="text-4xl font-bold text-white">Hero Section</h1>
  </div>
</AspectRatio>
```

### Skeleton Loader

```tsx
<AspectRatio ratio={16 / 9}>
  <Skeleton className="w-full h-full" />
</AspectRatio>
```

---

## 🎨 Common Ratios

Here are some common aspect ratios and their uses:

```tsx
// Square
<AspectRatio ratio={1} /> // 1:1 - Profile pictures, thumbnails

// Video
<AspectRatio ratio={16 / 9} /> // 16:9 - Widescreen video, YouTube
<AspectRatio ratio={4 / 3} /> // 4:3 - Classic video, iPad

// Photo
<AspectRatio ratio={3 / 2} /> // 3:2 - DSLR cameras
<AspectRatio ratio={4 / 5} /> // 4:5 - Instagram portrait
<AspectRatio ratio={9 / 16} /> // 9:16 - Mobile video, Stories

// Cinema
<AspectRatio ratio={21 / 9} /> // 21:9 - Ultra-wide, cinematic
<AspectRatio ratio={2.39} /> // 2.39:1 - Anamorphic widescreen

// Print
<AspectRatio ratio={8.5 / 11} /> // Letter size
<AspectRatio ratio={297 / 210} /> // A4 paper
```

---

## 🧪 Testing Tips

- Test on different screen sizes
- Verify content doesn't overflow
- Check image loading states
- Test with various content types
- Verify responsive behavior
- Check browser compatibility

---

## 💡 Best Practices

- Use consistent ratios throughout your design
- Combine with `object-cover` or `object-contain` for images
- Add loading states with Skeleton component
- Consider mobile aspect ratios separately if needed
- Use appropriate ratio for content type
- Set background color to prevent white flash during loading

---

## 🔗 Related

- [Radix UI Aspect Ratio](https://www.radix-ui.com/docs/primitives/components/aspect-ratio)
- [Skeleton](skeleton.md) - For loading states
- [Card](card.md) - Often used together
