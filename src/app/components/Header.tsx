import { Gift } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg">
          <Gift className="size-6 text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-lg">RegaloPerfecto</h1>
          <p className="text-sm text-gray-600">Encuentra el regalo ideal</p>
        </div>
      </div>
    </header>
  );
}
