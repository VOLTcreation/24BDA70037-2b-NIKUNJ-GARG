## 24BDA70037-2b-NIKUNJ-GARG

# 🛍️ Shopping App

Hey there! This is a modern product listing app I built with Next.js 16 and React 19. It's got a clean mint green theme, product filters, sorting options, and a nice sidebar layout. Pretty straightforward to use and fully responsive!

## ✨ What It Does

- 🎨 **Mint Green Theme** - Custom color palette with dark mode
- 🔍 **Filter Products** - By category (Electronics, Clothing, or All)
- 📊 **Sort Products** - By price or keep them in default order
- 📱 **Fully Responsive** - Works great on any screen size
- ⚡ **Fast Development** - Thanks to Next.js Turbopack

## 🚀 Getting It Running

```bash
# Install everything
pnpm install

# Start the dev server
pnpm dev

# Open http://localhost:3000 in your browser
```

## 📁 How It's Organized

```
shopping_app/
├── app/
│   ├── globals.css       # All the styling and theme colors
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page with products
├── components/
│   ├── ui/               # Reusable UI components
│   ├── product-card.tsx  # Shows individual products
│   ├── select-control.tsx # Filter/sort dropdown
│   └── sidebar.tsx       # Navigation sidebar
└── lib/
    └── utils.ts          # Helper functions
```

## 🎨 The Theme

I went with a mint green vibe. Here's how the colors are set up in `globals.css`:

```css
:root {
  --background: 145 50% 94%;    /* Mint green background */
  --card: 0 0% 100%;            /* White cards */
  --primary: 145 63% 42%;       /* Emerald accents */
}
```

And yeah, there's a dark mode too with adjusted colors for better visibility.

## 🧩 Main Components

### Product Card

This shows each product with its name, price, and category:

```tsx
export function ProductCard({ name, price, category }: ProductCardProps) {
  const badgeVariant = category === "clothing" ? "secondary" : "default";
  
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-2xl font-semibold">${price.toFixed(2)}</p>
        <Badge variant={badgeVariant}>{category}</Badge>
      </CardContent>
    </Card>
  );
}
```

### Filtering & Sorting

The logic is pretty simple - just filtering and sorting arrays:

```tsx
// Filter by category
const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
  if (filterCategory === "all") return true;
  return product.category === filterCategory;
});

// Sort by price
const sortedProducts = [...filteredProducts].sort((a, b) => {
  switch (sortBy) {
    case "price-low-to-high":
      return a.price - b.price;
    case "price-high-to-low":
      return b.price - a.price;
    default:
      return 0;
  }
});
```

## 🛠️ Tech Stack

- **Next.js 16** with Turbopack for fast builds
- **React 19** for the UI
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **TypeScript** for type safety
- **Lucide React** for icons

## � Key Dependencies

```json
{
  "@radix-ui/react-select": "^2.2.6",
  "@radix-ui/react-slot": "^1.2.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.563.0",
  "tailwind-merge": "^3.4.0"
}
```

## 💡 Cool Features

**Responsive Grid** - Product cards adjust from 1 column on mobile to 2 on desktop

**Real-time Filtering** - No page reloads, everything updates instantly

**Empty States** - Shows a friendly message when no products match the filter

**Smart Styling** - Using the `cn()` utility to merge Tailwind classes properly:

```tsx
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

This handles class conflicts so you can do things like:
```tsx
<div className={cn("px-4 py-2", className)} />
```

## 🎯 Sample Data

Right now it's using some hardcoded sample products:

- Wireless Headphones - $79.99 (Electronics)
- Smart Watch - $199.99 (Electronics)  
- Cotton T-Shirt - $29.99 (Clothing)
- Denim Jeans - $59.99 (Clothing)

