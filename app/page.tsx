"use client";

import { useState } from "react";
import { SidebarLayout } from "@/components/sidebar-layout";
import { SelectControl } from "@/components/select-control";
import { ProductCard } from "@/components/product-card";
import type { SelectOption } from "@/types/index";

interface Product {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing" | string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "electronics",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 29.99,
    category: "clothing",
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 59.99,
    category: "clothing",
  },
];

const CATEGORY_OPTIONS: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
];

const SORT_OPTIONS: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "price-low-to-high", label: "Price Low to High" },
  { value: "price-high-to-low", label: "Price High to Low" },
];

export default function Home() {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    if (filterCategory === "all") return true;
    return product.category === filterCategory;
  });

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

  return (
    <SidebarLayout>
      <h1 className="text-4xl font-bold mb-12">Products</h1>

      {/* Filters & Sorting */}
      <div className="bg-white rounded-lg p-6 mb-12 shadow-sm border border-gray-200 overflow-visible">
        <div className="space-y-6 overflow-visible">
          <SelectControl
            selectLabel="Category:"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={CATEGORY_OPTIONS}
            groupLabel="Filter by Category"
            placeholder="Select a category"
          />
          <SelectControl
            selectLabel="Sort by:"
            value={sortBy}
            onValueChange={setSortBy}
            options={SORT_OPTIONS}
            groupLabel="Sort Options"
            placeholder="Select sort option"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      )}
    </SidebarLayout>
  );
}