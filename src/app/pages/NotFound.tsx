import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Home, Gift } from 'lucide-react';
import { Header } from '../components/Header';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Gift className="size-24 mx-auto text-purple-400 mb-4" />
            <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Página no encontrada
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Lo sentimos, la página que buscas no existe. 
              Volvamos a encontrar el regalo perfecto.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            <Home className="size-5" />
            Volver al inicio
          </button>
        </motion.div>
      </main>
    </div>
  );
}
