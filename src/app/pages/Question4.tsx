import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Laptop, Dumbbell, ChefHat, Palette, BookOpen, Compass } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressCard } from '../components/ProgressCard';
import { useQuiz, Interest } from '../context/QuizContext';

export default function Question4() {
  const navigate = useNavigate();
  const { setInterest } = useQuiz();

  const handleSelect = (value: Interest) => {
    setInterest(value);
    navigate('/results');
  };

  const options = [
    { value: 'tecnologia' as Interest, label: 'Tecnología', subtitle: 'Gadgets y tech', icon: Laptop, color: 'from-blue-500 to-indigo-500' },
    { value: 'deporte' as Interest, label: 'Deporte', subtitle: 'Fitness y actividad', icon: Dumbbell, color: 'from-green-500 to-emerald-500' },
    { value: 'cocina' as Interest, label: 'Cocina', subtitle: 'Gastronomía y recetas', icon: ChefHat, color: 'from-orange-500 to-red-500' },
    { value: 'arte' as Interest, label: 'Arte/Creatividad', subtitle: 'Manualidades y diseño', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { value: 'lectura' as Interest, label: 'Lectura', subtitle: 'Libros y cultura', icon: BookOpen, color: 'from-amber-500 to-yellow-500' },
    { value: 'experiencias' as Interest, label: 'Experiencias', subtitle: 'Vivencias únicas', icon: Compass, color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressCard currentStep={4} totalSteps={4} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3">¿Cuáles son sus intereses?</h2>
          <p className="text-gray-600">Última pregunta: selecciona lo que más le apasiona</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left group focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${option.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="size-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">
                      {option.label}
                    </h3>
                    <p className="text-sm text-gray-600">{option.subtitle}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
