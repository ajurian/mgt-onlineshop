import { Link } from "react-router";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const cartItems = [
  {
    id: "gpu-1",
    name: "NVIDIA GeForce RTX 4090 24GB",
    price: 1599.99,
    quantity: 1,
    imageQuery: "graphics-card",
  },
  {
    id: "ram-1",
    name: "G.SKILL Trident Z5 RGB 64GB DDR5 6400MHz",
    price: 249.99,
    quantity: 2,
    imageQuery: "ram-memory",
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 3000 ? 0 : 500;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <ShoppingCart size={64} className="mx-auto mb-4 text-slate-300" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-slate-600 mb-6">
              Add some products to get started!
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 flex gap-6"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=200&fit=crop&q=80"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="text-blue-600 font-bold text-lg mb-4">
                      &#8369;{item.price.toLocaleString()}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-slate-300 rounded-lg">
                        <button className="p-2 hover:bg-slate-100 transition-colors">
                          <Minus size={16} />
                        </button>
                        <div className="px-4 py-2 border-x border-slate-300 min-w-[3rem] text-center">
                          {item.quantity}
                        </div>
                        <button className="p-2 hover:bg-slate-100 transition-colors">
                          <Plus size={16} />
                        </button>
                      </div>

                      <button className="text-red-600 hover:text-red-700 p-2">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-xl">
                      &#8369;{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-semibold">
                      &#8369;{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        "FREE"
                      ) : (
                        <>&#8369;{shipping.toLocaleString()}</>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax</span>
                    <span className="font-semibold">
                      &#8369;{tax.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                    &#8369;{total.toLocaleString()}
                  </span>
                </div>

                {subtotal < 3000 && (
                  <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm mb-4">
                    Add &#8369;{(3000 - subtotal).toLocaleString()} more for
                    free shipping!
                  </div>
                )}

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors mb-3">
                  Proceed to Checkout
                </button>

                <Link
                  to="/"
                  className="block text-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
