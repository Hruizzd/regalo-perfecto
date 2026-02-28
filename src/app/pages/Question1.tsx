import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Users, User, Heart, Briefcase, Baby } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressCard } from '../components/ProgressCard';
import { PageMeta } from '../components/PageMeta';
import { useQuiz, Recipient } from '../context/QuizContext';

export default function Question1() {
  const navigate = useNavigate();
  const { setRecipient } = useQuiz();

  const handleSelect = (value: Recipient) => {
    setRecipient(value);
    navigate('/question-2');
  };

  const options = [
    { value: 'pareja' as Recipient, label: 'Pareja', icon: Heart, color: 'from-pink-500 to-rose-500' },
    { value: 'amigo' as Recipient, label: 'Amigo/a', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { value: 'madre' as Recipient, label: 'Madre', icon: Heart, color: 'from-purple-500 to-pink-500' },
    { value: 'padre' as Recipient, label: 'Padre', icon: User, color: 'from-indigo-500 to-blue-500' },
    { value: 'nino' as Recipient, label: 'Niño/a', icon: Baby, color: 'from-yellow-500 to-orange-500' },
    { value: 'companero' as Recipient, label: 'Compañero/a de trabajo', icon: Briefcase, color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <>
      <PageMeta title="Pregunta 1 de 4" description="¿Para quién es el regalo?" />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <ProgressCard currentStep={1} totalSteps={4} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-3">¿Para quién es el regalo?</h2>
            <p className="text-gray-600">Selecciona la relación con la persona</p>
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
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}