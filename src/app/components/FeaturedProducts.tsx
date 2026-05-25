import { categoryData } from "../pages/CategoryPage";
import ProductCard from "./ProductCard";

export const products = [
  categoryData.gpu.products[1],
  categoryData.cpu.products[1],
  categoryData.ram.products[1],
  categoryData.motherboard.products[1],
  categoryData.keyboard.products[1],
  categoryData.mouse.products[1],
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
