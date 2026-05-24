import { useLocation } from "react-router";
import ProductCard from "../components/ProductCard";

const categoryData = {
  gpu: {
    title: "Graphics Card",
    description:
      "High-performance GPUs for gaming, content creation, and professional workloads",
    products: [
      {
        id: "gpu-1",
        name: "MGT Vortex 580S 64GB",
        price: 35999.99,
        rating: 4.9,
        reviews: 823,
        imageQuery: "/gpu.jpeg",
        inStock: true,
      },
      {
        id: "gpu-2",
        name: "MGT Vortex 580SX 128GB",
        price: 59999.99,
        rating: 4.9,
        reviews: 567,
        imageQuery: "/gpu.jpeg",
        inStock: true,
      },
      {
        id: "gpu-3",
        name: "MGT Vortex 580SXS 128GB",
        price: 69999.99,
        rating: 4.7,
        reviews: 289,
        imageQuery: "/gpu.jpeg",
        inStock: true,
      },
    ],
  },
  cpu: {
    title: "Processor",
    description:
      "Powerful CPUs for every build, from gaming to professional workstations",
    products: [
      {
        id: "cpu-1",
        name: "MGT Prime 9 7950X 16-Core",
        price: 9999.99,
        rating: 4.9,
        reviews: 456,
        imageQuery: "/cpu.jpeg",
        inStock: true,
      },
      {
        id: "cpu-2",
        name: "MGT Prime 9 8950X 16-Core",
        price: 12999.99,
        rating: 4.8,
        reviews: 342,
        imageQuery: "/cpu.jpeg",
        inStock: true,
      },
      {
        id: "cpu-3",
        name: "MGT Prime 9 14900X 32-Core",
        price: 18999.99,
        rating: 4.8,
        reviews: 512,
        imageQuery: "/cpu.jpeg",
        inStock: true,
      },
    ],
  },
  ram: {
    title: "Memory (RAM)",
    description:
      "High-speed DDR5 and DDR6 memory kits for optimal system performance",
    products: [
      {
        id: "ram-1",
        name: "MGT Phantom RGB 64GB DDR5 6400MHz",
        price: 41999.99,
        originalPrice: 49999.99,
        rating: 4.9,
        reviews: 634,
        imageQuery: "/ram.jpeg",
        inStock: true,
      },
      {
        id: "ram-2",
        name: "MGT Phantom RGB 128GB DDR5 8666MHz",
        price: 74499.99,
        rating: 4.7,
        reviews: 891,
        imageQuery: "/ram.jpeg",
        inStock: true,
      },
      {
        id: "ram-3",
        name: "MGT Phantom RGB 64GB DDR6 9666MHz",
        price: 189999.99,
        rating: 4.6,
        reviews: 456,
        imageQuery: "/ram.jpeg",
        inStock: true,
      },
    ],
  },
  motherboard: {
    title: "Motherboard",
    description:
      "Feature-rich motherboards with the latest chipsets and connectivity",
    products: [
      {
        id: "mb-1",
        name: "MGT Omni X790 Office",
        price: 7999.99,
        rating: 4.9,
        reviews: 234,
        imageQuery: "/mb.jpeg",
        inStock: true,
      },
      {
        id: "mb-2",
        name: "MGT Omni X790 Gaming",
        price: 10999.99,
        rating: 4.7,
        reviews: 378,
        imageQuery: "/mb.jpeg",
        inStock: true,
      },
      {
        id: "mb-3",
        name: "MGT Omni X790 Ultra",
        price: 14999.99,
        rating: 4.6,
        reviews: 423,
        imageQuery: "/mb.jpeg",
        inStock: true,
      },
    ],
  },
  keyboard: {
    title: "Keyboard",
    description:
      "Premium mechanical and wireless keyboards designed for responsive typing, gaming, and ultimate desk comfort.",
    products: [
      {
        id: "kb-1",
        name: "MGT Cobra Pro Wireless",
        price: 8999.99,
        rating: 4.8,
        reviews: 312,
        imageQuery: "/keyboard.jpeg",
        inStock: true,
      },
      {
        id: "kb-2",
        name: "MGT Cobra Gaming RGB",
        price: 11399.99,
        rating: 4.9,
        reviews: 524,
        imageQuery: "/keyboard.jpeg",
        inStock: true,
      },
      {
        id: "kb-3",
        name: "MGT Cobra Slim Mechanical",
        price: 7799.99,
        rating: 4.6,
        reviews: 187,
        imageQuery: "/keyboard.jpeg",
        inStock: true,
      },
    ],
  },
  mouse: {
    title: "Mouse",
    description:
      "High-precision ergonomic mice engineered for competitive gaming tracking and seamless productivity.",
    products: [
      {
        id: "mouse-1",
        name: "MGT Conda Ultra-Light Wireless",
        price: 5399.99,
        rating: 4.8,
        reviews: 421,
        imageQuery: "/mouse.jpeg",
        inStock: true,
      },
      {
        id: "mouse-2",
        name: "MGT Conda Ergonomic Office",
        price: 3599.99,
        rating: 4.7,
        reviews: 265,
        imageQuery: "/mouse.jpeg",
        inStock: true,
      },
      {
        id: "mouse-3",
        name: "MGT Conda Pro RGB Wired",
        price: 4199.99,
        rating: 4.9,
        reviews: 512,
        imageQuery: "/mouse.jpeg",
        inStock: true,
      },
    ],
  },
};

export default function CategoryPage() {
  const location = useLocation();
  const category = location.pathname
    .split("/")
    .pop() as keyof typeof categoryData;
  const data = categoryData[category];

  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
          <p className="text-slate-600">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
