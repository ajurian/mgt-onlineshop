import { Link } from 'react-router';
import { Cpu, MonitorSpeaker, MemoryStick, Box } from 'lucide-react';
import { cn } from './ui/utils';

const categories = [
  { name: 'GPUs', icon: MonitorSpeaker, count: 3, path: '/category/gpu' },
  { name: 'CPUs', icon: Cpu, count: 3, path: '/category/cpu' },
  { name: 'RAMs', icon: MemoryStick, count: 3, path: '/category/ram' },
  { name: 'Motherboards', icon: Box, count: 3, path: '/category/motherboard' },
  { name: 'Keyboards', icon: Box, count: 3, path: '/category/keyboard' },
  { name: 'Mouses', icon: Box, count: 3, path: '/category/mouse' },
];

export default function Categories() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.path}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow border border-slate-200 hover:border-blue-400 flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-slate-500">{category.count} products</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
