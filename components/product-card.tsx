import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  category: "electronics" | "clothing" | string;
}

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