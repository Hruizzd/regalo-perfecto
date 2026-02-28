import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Gift, Sparkles, Heart, Search } from 'lucide-react';
import { Header } from '../components/Header';
import { PageMeta } from '../components/PageMeta';
import { useQuiz } from '../context/QuizContext';

export default function Home() {
  const navigate = useNavigate();
  const { resetQuiz } = useQuiz();

  const handleStart = () => {
    resetQuiz();
    navigate('/question-1');
  };

  return (
    <>
      <PageMeta 
        title="Inicio" 
        description="Encuentra el regalo perfecto respondiendo 4 preguntas simples. Ideas personalizadas para cualquier ocasión y presupuesto."
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-3xl">
                  <Gift className="size-16 text-white" />
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="size-8 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ¡Encuentra el Regalo Perfecto!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Responde 4 preguntas simples y descubre ideas de regalo personalizadas para esa persona especial
            </p>

            <motion.button
              onClick={handleStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Comenzar ahora
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="size-7 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Personalizado</h3>
              <p className="text-sm text-gray-600">
                Ideas adaptadas a tus respuestas
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="size-7 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Rápido y fácil</h3>
              <p className="text-sm text-gray-600">
                Solo 4 preguntas en menos de 1 minuto
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="size-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Para todos</h3>
              <p className="text-sm text-gray-600">
                Regalos para cualquier ocasión
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <p className="text-sm text-gray-600">
              <span className="font-medium text-purple-600">+1,000</span> ideas de regalo · 
              <span className="font-medium text-purple-600"> Todas las ocasiones</span> · 
              <span className="font-medium text-purple-600"> Todos los presupuestos</span>
            </p>
          </motion.div>
        </main>
      </div>
    </>
  );
}