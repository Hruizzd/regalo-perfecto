import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Coins, Wallet, CreditCard, Banknote } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressCard } from '../components/ProgressCard';
import { useQuiz, Budget } from '../context/QuizContext';

export default function Question3() {
  const navigate = useNavigate();
  const { setBudget } = useQuiz();

  const handleSelect = (value: Budget) => {
    setBudget(value);
    navigate('/question-4');
  };

  const options = [
    { value: '0-20' as Budget, label: '€0-20', subtitle: 'Económico', icon: Coins, color: 'from-green-500 to-emerald-500' },
    { value: '20-50' as Budget, label: '€20-50', subtitle: 'Moderado', icon: Wallet, color: 'from-blue-500 to-cyan-500' },
    { value: '50-100' as Budget, label: '€50-100', subtitle: 'Generoso', icon: CreditCard, color: 'from-purple-500 to-pink-500' },
    { value: '100+' as Budget, label: '€100+', subtitle: 'Premium', icon: Banknote, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressCard currentStep={3} totalSteps={4} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3">¿Cuál es tu presupuesto?</h2>
          <p className="text-gray-600">Selecciona el rango que se ajusta a tus posibilidades</p>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center"
        >
          <p className="text-sm text-blue-800">
            💡 <span className="font-medium">Consejo:</span> Presupuestos bajos no significan menos amor. 
            Tenemos muchas ideas DIY y experiencias low-cost.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
