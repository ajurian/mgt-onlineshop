import ProductCard from './ProductCard';

const products = [
  {
    id: 'gpu-2',
    name: 'NVIDIA GeForce RTX 4080 SUPER 16GB',
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 567,
    imageQuery: 'graphics-card',
    inStock: true,
  },
  {
    id: 'cpu-2',
    name: 'AMD Ryzen 9 7950X 16-Core Processor',
    price: 549.99,
    originalPrice: 699.99,
    rating: 4.8,
    reviews: 342,
    imageQuery: 'computer-processor',
    inStock: true,
  },
  {
    id: 'ram-2',
    name: 'Corsair Vengeance DDR5 32GB (2x16GB) 6000MHz',
    price: 139.99,
    rating: 4.7,
    reviews: 891,
    imageQuery: 'ram-memory',
    inStock: true,
  },
  {
    id: 'mb-3',
    name: 'ASUS ROG STRIX B650-A Gaming Motherboard',
    price: 259.99,
    rating: 4.6,
    reviews: 423,
    imageQuery: 'motherboard',
    inStock: true,
  },
  {
    id: 'gpu-3',
    name: 'AMD Radeon RX 7900 XTX 24GB Graphics Card',
    price: 899.99,
    originalPrice: 999.99,
    rating: 4.7,
    reviews: 289,
    imageQuery: 'graphics-card',
    inStock: true,
  },
  {
    id: 'cpu-3',
    name: 'Intel Core i9-14900K Processor',
    price: 589.99,
    rating: 4.8,
    reviews: 512,
    imageQuery: 'computer-processor',
    inStock: true,
  },
  {
    id: 'ram-1',
    name: 'G.SKILL Trident Z5 RGB 64GB DDR5 6400MHz',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviews: 634,
    imageQuery: 'ram-memory',
    inStock: true,
  },
  {
    id: 'mb-2',
    name: 'MSI MPG Z790 Carbon WiFi Motherboard',
    price: 399.99,
    rating: 4.7,
    reviews: 378,
    imageQuery: 'motherboard',
    inStock: false,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16">
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
