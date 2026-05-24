import { useParams, Link } from "react-router";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../contexts/cart-context";

const allProducts = {
  // --- GRAPHICS CARDS ---
  "gpu-1": {
    name: "MGT Vortex 580S 64GB",
    price: 35999.99,
    originalPrice: 35999.99,
    rating: 4.9,
    reviews: 823,
    imageQuery: "/gpu.jpeg",
    inStock: true,
    category: "Graphics Card",
    specs: [
      "64GB GDDR7 High-Bandwidth Memory",
      "2.85 GHz Ultra Boost Clock",
      "24576 Next-Gen Stream Processors",
      "PCIe 5.0 x16 Interface",
    ],
    description:
      "Enterprise-grade performance rendering monster. Designed seamlessly for heavy AI training, professional 8K content workflows, and boundary-pushing simulation data.",
  },
  "gpu-2": {
    name: "MGT Vortex 580SX 128GB",
    price: 59999.99,
    originalPrice: 59999.99,
    rating: 4.9,
    reviews: 567,
    imageQuery: "/gpu.jpeg",
    inStock: true,
    category: "Graphics Card",
    specs: [
      "128GB Unified Architecture Memory",
      "3.10 GHz Overclocked Boost",
      "36864 Real-Time Ray Tracing Cores",
      "Dual-Slot Liquid Cooled Setup",
    ],
    description:
      "An absolute powerhouse boasting an unprecedented 128GB of unified memory. Effortlessly crushes native 3D render pipelines and massive LLM local environments.",
  },
  "gpu-3": {
    name: "MGT Vortex 580SXS 128GB",
    price: 69999.99,
    originalPrice: 69999.99,
    rating: 4.7,
    reviews: 289,
    imageQuery: "/gpu.jpeg",
    inStock: true,
    category: "Graphics Card",
    specs: [
      "128GB Ultra-Fast HBM3e Memory",
      "3.40 GHz Liquid-Chamber Boost",
      "42240 Neural Compute Cores",
      "Quad-Channel Interface Link",
    ],
    description:
      "The absolute pinnacle of desktop computing power. Tailored for extreme research laboratories, top-tier VFX Hollywood pipelines, and multi-threaded data operations.",
  },

  // --- PROCESSORS ---
  "cpu-1": {
    name: "MGT Prime 9 7950X 16-Core",
    price: 9999.99,
    originalPrice: 9999.99,
    rating: 4.9,
    reviews: 456,
    imageQuery: "/cpu.jpeg",
    inStock: true,
    category: "Processor",
    specs: [
      "16 Cores, 32 Threads",
      "4.5 GHz Base, 5.8 GHz Boost Clock",
      "144MB L2+L3 Ultra-Cache",
      "MGT Quantum Socket Type-A",
    ],
    description:
      "High-efficiency 16-core processor designed to dominate multi-threaded rendering arrays and heavy desktop computational workloads.",
  },
  "cpu-2": {
    name: "MGT Prime 9 8950X 16-Core",
    price: 12999.99,
    originalPrice: 12999.99,
    rating: 4.8,
    reviews: 342,
    imageQuery: "/cpu.jpeg",
    inStock: true,
    category: "Processor",
    specs: [
      "16 Cores, 32 Threads",
      "5.0 GHz Base, 6.2 GHz Boost Clock",
      "192MB Integrated 3D Silicon Cache",
      "MGT Quantum Socket Type-A",
    ],
    description:
      "Next-gen architecture running blistering clock speeds straight out of the box, offering unmatched single-thread response and gaming optimization.",
  },
  "cpu-3": {
    name: "MGT Prime 9 14900X 32-Core",
    price: 18999.99,
    originalPrice: 18999.99,
    rating: 4.8,
    reviews: 512,
    imageQuery: "/cpu.jpeg",
    inStock: true,
    category: "Processor",
    specs: [
      "32 Cores, 64 Threads",
      "3.8 GHz Base, 6.5 GHz Hybrid Boost",
      "256MB High-Density Smart Cache",
      "MGT Quantum Socket Type-Max",
    ],
    description:
      "A 32-core computational juggernaut. Ideal for handling virtualization arrays, heavy compilation pipelines, and multi-app creator environments at scale.",
  },

  // --- MEMORY (RAM) ---
  "ram-1": {
    name: "MGT Phantom RGB 64GB DDR5 6400MHz",
    price: 41999.99,
    originalPrice: 49999.99,
    rating: 4.9,
    reviews: 634,
    imageQuery: "/ram.jpeg",
    inStock: true,
    category: "Memory (RAM)",
    specs: [
      "64GB (2x32GB) Dual-Channel Kit",
      "DDR5 6400MHz Frequency",
      "CL32-38-38-96 Low Latency",
      "Custom Spectrum RGB Profiles",
    ],
    description:
      "Premium DDR5 memory kit with stunning RGB lighting and exceptional stability for high-framerate gaming configurations.",
  },
  "ram-2": {
    name: "MGT Phantom RGB 128GB DDR5 8666MHz",
    price: 74499.99,
    originalPrice: 74499.99,
    rating: 4.7,
    reviews: 891,
    imageQuery: "/ram.jpeg",
    inStock: true,
    category: "Memory (RAM)",
    specs: [
      "128GB (4x32GB) Quad-Matched Kit",
      "DDR5 8666MHz Extreme Speed",
      "CL40 XMP / EXPO Supported",
      "Anodized Heatspreader Array",
    ],
    description:
      "Massive capacity meets record-breaking speeds. Perfectly tuned to maximize data bandwidth on advanced professional motherboard architectures.",
  },
  "ram-3": {
    name: "MGT Phantom RGB 64GB DDR6 9666MHz",
    price: 189999.99,
    originalPrice: 189999.99,
    rating: 4.6,
    reviews: 456,
    imageQuery: "/ram.jpeg",
    inStock: true,
    category: "Memory (RAM)",
    specs: [
      "64GB (2x32GB) Next-Gen Kit",
      "DDR6 9666MHz Bleeding Edge Speed",
      "CL28 Ultra-Low Structural Timings",
      "Integrated On-Die ECC Correction",
    ],
    description:
      "Future-proof your workstation with early-access DDR6 performance, delivering unrivaled system bandwidth and unmatched memory response times.",
  },

  // --- MOTHERBOARDS ---
  "mb-1": {
    name: "MGT Omni X790 Office",
    price: 7999.99,
    originalPrice: 7999.99,
    rating: 4.9,
    reviews: 234,
    imageQuery: "/mb.jpeg",
    inStock: true,
    category: "Motherboard",
    specs: [
      "MGT X790 Professional Chipset",
      "Dual PCIe 5.0 M.2 Safe-Slots",
      "Dual Intel 2.5G Enterprise LAN",
      "Sleek Un-lit Metallic Aesthetic",
    ],
    description:
      "A rock-solid corporate platform designed for 24/7 data integrity, vast storage expansions, and enterprise remote management tools.",
  },
  "mb-2": {
    name: "MGT Omni X790 Gaming",
    price: 10999.99,
    originalPrice: 10999.99,
    rating: 4.7,
    reviews: 378,
    imageQuery: "/mb.jpeg",
    inStock: true,
    category: "Motherboard",
    specs: [
      "MGT X790 Enthusiast Chipset",
      "16+2+1 Phase Digital VRM Design",
      "Onboard Wi-Fi 7 + 5G High-Speed LAN",
      "AuraSync RGB Lighting Zones",
    ],
    description:
      "Engineered for elite competitive builds. Offers extreme power delivery to stable CPU overclocks alongside high-fidelity integrated audio sub-systems.",
  },
  "mb-3": {
    name: "MGT Omni X790 Ultra",
    price: 14999.99,
    originalPrice: 14999.99,
    rating: 4.6,
    reviews: 423,
    imageQuery: "/mb.jpeg",
    inStock: true,
    category: "Motherboard",
    specs: [
      "MGT X790 Custom Workstation Chipset",
      "Full Armor Copper Liquid Block Ready",
      "Dual Thunderbolt 5 Type-C Ports",
      "Support for 4-Way Multi-GPU Layouts",
    ],
    description:
      "The dream foundation for custom liquid loops and deep-learning server configurations. Brings cutting-edge connectivity and unprecedented lane expansion.",
  },

  // --- KEYBOARDS ---
  "kb-1": {
    name: "MGT Cobra Pro Wireless",
    price: 8999.99,
    originalPrice: 8999.99,
    rating: 4.8,
    reviews: 312,
    imageQuery: "/keyboard.jpeg",
    inStock: true,
    category: "Keyboard",
    specs: [
      "Tactile Quiet-Mechanical Switches",
      "Tri-Mode (Bluetooth / 2.4GHz / Wired)",
      "Premium Machined Aluminum Frame",
      "Up to 200 Hours Continuous Battery Life",
    ],
    description:
      "A minimalist wireless typing companion designed to maximize layout efficiency and provide a crisp mechanical feel without distracting the workplace.",
  },
  "kb-2": {
    name: "MGT Cobra Gaming RGB",
    price: 11399.99,
    originalPrice: 11399.99,
    rating: 4.9,
    reviews: 524,
    imageQuery: "/keyboard.jpeg",
    inStock: true,
    category: "Keyboard",
    specs: [
      "Hot-Swappable Linear Silver Switches",
      "0.5ms Polling Rate Ultra-Latency Link",
      "Per-Key Dynamically Layered RGB",
      "Magnetic Detachable Ergonomic Rest",
    ],
    description:
      "Built for competitive eSports tracking. Features rapid-actuation switches and dedicated macros to put absolute mechanical control right at your fingertips.",
  },
  "kb-3": {
    name: "MGT Cobra Slim Mechanical",
    price: 7799.99,
    originalPrice: 7799.99,
    rating: 4.6,
    reviews: 187,
    imageQuery: "/keyboard.jpeg",
    inStock: true,
    category: "Keyboard",
    specs: [
      "Low-Profile Custom Blue Switches",
      "Ultra-Thin 14mm Ergonomic Chassis",
      "PBT Double-Shot Durable Keycaps",
      "Universal macOS/Windows Function Layout",
    ],
    description:
      "Combining the iconic feedback of mechanical switches with a modern, low-profile layout for a highly portable and ergonomic desk configuration.",
  },

  // --- MICE ---
  "mouse-1": {
    name: "MGT Conda Ultra-Light Wireless",
    price: 5399.99,
    originalPrice: 5399.99,
    rating: 4.8,
    reviews: 421,
    imageQuery: "/mouse.jpeg",
    inStock: true,
    category: "Mouse",
    specs: [
      "Featherweight 49g Shell Build",
      "42,000 DPI Custom Optical Sensor",
      "Optical Crisp Mouse Click Switches",
    ],
    description:
      "A featherweight gaming weapon designed to give you instant, fatigue-free control during intense, fast-paced shooter sessions.",
  },
  "mouse-2": {
    name: "MGT Conda Ergonomic Office",
    price: 3599.99,
    originalPrice: 3599.99,
    rating: 4.7,
    reviews: 265,
    imageQuery: "/mouse.jpeg",
    inStock: true,
    category: "Mouse",
    specs: [
      "Natural 57-Degree Vertical Angle Design",
      "Silent Tactile Scrolling Wheel",
      "Multi-Device Easy-Switch Pairing",
    ],
    description:
      "Redefine comfort during long office hours with a natural vertical grip layout engineered to significantly lower wrist fatigue.",
  },
  "mouse-3": {
    name: "MGT Conda Pro RGB Wired",
    price: 4199.99,
    originalPrice: 4199.99,
    rating: 4.9,
    reviews: 512,
    imageQuery: "/mouse.jpeg",
    inStock: true,
    category: "Mouse",
    specs: [
      "High-Precision 26,000 DPI Sensor",
      "3-Zone Ambient Edge RGB Underglow",
      "Braided Ultra-Flex Drag-Free Cable",
    ],
    description:
      "Flawless wired performance meets brilliant aesthetics, tracking your quick sweeps smoothly without any cord snags or wireless drops.",
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = allProducts[id as keyof typeof allProducts];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          Return to home
        </Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const handleAddToCart = () => {
    if (!id || !product.inStock) {
      return;
    }

    addItem({
      id,
      name: product.name,
      price: product.price,
      imageQuery: product.imageQuery,
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg p-8 grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={product.imageQuery}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-blue-600 mb-2">{product.category}</div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                ))}
              </div>
              <span className="text-slate-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <div className="text-4xl font-bold text-blue-600">
                  &#8369;{product.price.toLocaleString()}
                </div>
                {discount > 0 && (
                  <>
                    <div className="text-xl text-slate-500 line-through">
                      &#8369;{product.originalPrice.toLocaleString()}
                    </div>
                    <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save {discount}%
                    </div>
                  </>
                )}
              </div>
              <div className="text-green-600 font-semibold">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Specifications</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-slate-700">{product.description}</p>
            </div>

            <button
              disabled={!product.inStock}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors mb-6"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-blue-600" size={24} />
                <div className="text-sm font-semibold">Free Shipping</div>
                <div className="text-xs text-slate-500">
                  Orders over &#8369;3,000
                </div>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-blue-600" size={24} />
                <div className="text-sm font-semibold">2 Year Warranty</div>
                <div className="text-xs text-slate-500">Full coverage</div>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-2 text-blue-600" size={24} />
                <div className="text-sm font-semibold">30-Day Returns</div>
                <div className="text-xs text-slate-500">Easy returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
