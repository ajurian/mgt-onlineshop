import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mgtLogo from "../../assets/MGT_Logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12 aspect-square bg-slate-100 overflow-hidden rounded-full">
                <ImageWithFallback
                  src={mgtLogo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-xl font-bold">MGT</div>
                <div className="text-xs text-slate-400">Computer Parts</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Your trusted source for premium computer components and hardware.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link
                  to="/category/gpu"
                  className="hover:text-white transition-colors"
                >
                  GPU
                </Link>
              </li>
              <li>
                <Link
                  to="/category/cpu"
                  className="hover:text-white transition-colors"
                >
                  CPU
                </Link>
              </li>
              <li>
                <Link
                  to="/category/ram"
                  className="hover:text-white transition-colors"
                >
                  RAM
                </Link>
              </li>
              <li>
                <Link
                  to="/category/motherboard"
                  className="hover:text-white transition-colors"
                >
                  Motherboard
                </Link>
              </li>
              <li>
                <Link
                  to="/category/keyboard"
                  className="hover:text-white transition-colors"
                >
                  Keyboard
                </Link>
              </li>
              <li>
                <Link
                  to="/category/mouse"
                  className="hover:text-white transition-colors"
                >
                  Mouse
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 MGT Computer Parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
