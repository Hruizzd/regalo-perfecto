import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Share2, RotateCcw, Edit3, Sparkles, Gift, Check } from 'lucide-react';
import { Header } from '../components/Header';
import { GiftCard } from '../components/GiftCard';
import { PageMeta } from '../components/PageMeta';
import { useQuiz } from '../context/QuizContext';
import { findGiftIdeas, GiftIdea } from '../data/gifts';

export default function Results() {
  const navigate = useNavigate();
  const { state } = useQuiz();
  const [gifts, setGifts] = useState<GiftIdea[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  useEffect(() => {
    // Verificar que tenemos todas las respuestas
    if (!state.recipient || !state.age || !state.budget || !state.interest) {
      navigate('/');
      return;
    }

    // Obtener ideas de regalo
    const ideas = findGiftIdeas(state.recipient, state.age, state.budget, state.interest);
    setGifts(ideas);
  }, [state, navigate]);

  const handleShare = async () => {
    const shareData = {
      title: 'RegaloPerfecto - Mis ideas de regalo',
      text: `He encontrado ${gifts.length} ideas de regalo perfectas usando RegaloPerfecto! 🎁`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } else {
        // Fallback: copiar al portapapeles
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const handleRestart = () => {
    navigate('/');
  };

  const getRecipientLabel = () => {
    const labels: Record<string, string> = {
      pareja: 'Pareja',
      amigo: 'Amigo/a',
      madre: 'Madre',
      padre: 'Padre',
      nino: 'Niño/a',
      companero: 'Compañero/a de trabajo',
    };
    return state.recipient ? labels[state.recipient] : '';
  };

  const visibleGifts = showMore ? gifts : gifts.slice(0, 3);

  return (
    <>
      <PageMeta title="Tus Ideas de Regalo" description="Descubre las ideas de regalo perfectas seleccionadas para ti" />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pb-16">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Success Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 mb-8 text-white text-center relative overflow-hidden"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute top-4 right-4"
            >
              <Sparkles className="size-8" />
            </motion.div>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="size-10" />
              <h1 className="text-3xl md:text-4xl font-bold">¡Ideas encontradas!</h1>
            </div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Hemos seleccionado {gifts.length} ideas de regalo perfectas basadas en tus respuestas
            </p>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Tu selección</h2>
              <button
                onClick={() => navigate('/question-1')}
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                <Edit3 className="size-4" />
                Editar
              </button>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Para quién</p>
                <p className="font-semibold">{getRecipientLabel()}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Edad</p>
                <p className="font-semibold">{state.age} años</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Presupuesto</p>
                <p className="font-semibold">€{state.budget}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Intereses</p>
                <p className="font-semibold capitalize">{state.interest}</p>
              </div>
            </div>
          </motion.div>

          {/* Budget Notice */}
          {state.budget === '0-20' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8"
            >
              <p className="text-sm text-green-800">
                💚 <span className="font-medium">Presupuesto ajustado:</span> Hemos priorizado regalos DIY 
                y experiencias low-cost que son perfectas para demostrar afecto sin gastar mucho.
              </p>
            </motion.div>
          )}

          {/* Gift Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleGifts.map((gift, index) => (
              <GiftCard key={gift.id} gift={gift} index={index} />
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && gifts.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mb-8"
            >
              <button
                onClick={() => setShowMore(true)}
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Ver más ideas ({gifts.length - 3} restantes)
              </button>
            </motion.div>
          )}

          {/* Social Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-center"
          >
            <p className="text-gray-700 mb-4">
              ¿Necesitas ayuda para decidir? <span className="font-semibold">Comparte esta lista</span> con quien te ayude a elegir
            </p>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              {shareSuccess ? (
                <>
                  <Check className="size-5" />
                  ¡Compartido!
                </>
              ) : (
                <>
                  <Share2 className="size-5" />
                  Compartir lista
                </>
              )}
            </button>
          </motion.div>

          {/* Gift Wrapping Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8"
          >
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Gift className="size-5 text-amber-600" />
              Consejo para ocasiones especiales
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Si es para un cumpleaños o aniversario, considera:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <span className="font-medium">Envoltorio personalizado</span> con papel reciclado o tela reutilizable</li>
              <li>• <span className="font-medium">Tarjeta con mensaje:</span> "Pensé en ti al elegir esto porque..."</li>
              <li>• <span className="font-medium">Presentación especial:</span> Añade un pequeño detalle extra (flores, dulces)</li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              <RotateCcw className="size-5" />
              Buscar otro regalo
            </button>
          </motion.div>
        </main>
      </div>
    </>
  );
}