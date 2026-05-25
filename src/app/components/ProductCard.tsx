import { Link } from "react-router";
import { ShoppingCart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";
import { useCart } from "../contexts/cart-context";

interface ProductCardProps {
  id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  imageQuery: string;
  inStock: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  imageQuery,
  inStock,
}: ProductCardProps) {
  const { addItem } = useCart();
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!id || !inStock) {
      return;
    }

    addItem({ id, name, price, imageQuery });
    toast.success("Added to cart", { description: name });
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="relative aspect-square bg-slate-100 overflow-hidden">
        <ImageWithFallback
          src={imageQuery}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{discount}%
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded font-semibold text-slate-700">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        {id ? (
          <Link to={`/product/${id}`}>
            <h3 className="font-semibold mb-2 line-clamp-2 min-h-[3rem] hover:text-blue-600 transition-colors">
              {name}
            </h3>
          </Link>
        ) : (
          <h3 className="font-semibold mb-2 line-clamp-2 min-h-[3rem]">
            {name}
          </h3>
        )}

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-slate-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-slate-500">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              &#8369;{price.toLocaleString()}
            </div>
            {originalPrice && (
              <div className="text-sm text-slate-500 line-through">
                &#8369;{originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        <button
          disabled={!inStock || !id}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
