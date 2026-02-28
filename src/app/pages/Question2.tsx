import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Baby, Users, User, Users2, UserCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressCard } from '../components/ProgressCard';
import { useQuiz, AgeRange } from '../context/QuizContext';

export default function Question2() {
  const navigate = useNavigate();
  const { setAge } = useQuiz();

  const handleSelect = (value: AgeRange) => {
    setAge(value);
    navigate('/question-3');
  };

  const options = [
    { value: '0-12' as AgeRange, label: '0-12 años', subtitle: 'Niños pequeños', icon: Baby, color: 'from-yellow-500 to-orange-500' },
    { value: '13-20' as AgeRange, label: '13-20 años', subtitle: 'Adolescentes', icon: Users, color: 'from-green-500 to-emerald-500' },
    { value: '21-35' as AgeRange, label: '21-35 años', subtitle: 'Jóvenes adultos', icon: User, color: 'from-blue-500 to-indigo-500' },
    { value: '36-55' as AgeRange, label: '36-55 años', subtitle: 'Adultos', icon: Users2, color: 'from-purple-500 to-pink-500' },
    { value: '56+' as AgeRange, label: '56+ años', subtitle: 'Adultos mayores', icon: UserCircle, color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressCard currentStep={2} totalSteps={4} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3">¿Qué edad tiene?</h2>
          <p className="text-gray-600">Esto nos ayuda a sugerir regalos apropiados</p>
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
