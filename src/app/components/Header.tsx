import { Link } from "react-router";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 aspect-square bg-slate-100 overflow-hidden rounded-full">
              <ImageWithFallback
                src="/MGT_Logo.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl">
              MGT
            </div> */}
            <div>
              <div className="text-xl font-bold tracking-tight">MGT</div>
              <div className="text-xs text-slate-400">Computer Parts</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link
              to="/category/gpu"
              className="hover:text-blue-400 transition-colors"
            >
              GPU
            </Link>
            <Link
              to="/category/cpu"
              className="hover:text-blue-400 transition-colors"
            >
              CPU
            </Link>
            <Link
              to="/category/ram"
              className="hover:text-blue-400 transition-colors"
            >
              RAM
            </Link>
            <Link
              to="/category/motherboard"
              className="hover:text-blue-400 transition-colors"
            >
              Motherboard
            </Link>
            <Link
              to="/category/keyboard"
              className="hover:text-blue-400 transition-colors"
            >
              Keyboard
            </Link>
            <Link
              to="/category/mouse"
              className="hover:text-blue-400 transition-colors"
            >
              Mouse
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hover:text-blue-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-blue-400 transition-colors">
              <User size={20} />
            </button>
            <Link
              to="/cart"
              className="hover:text-blue-400 transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <button className="md:hidden hover:text-blue-400 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
