/**
 * Configuración de la aplicación RegaloPerfecto
 * 
 * Este archivo contiene todas las variables configurables para facilitar
 * la personalización y mantenimiento de la aplicación.
 */

export const APP_CONFIG = {
  // Información de la aplicación
  app: {
    name: 'RegaloPerfecto',
    tagline: 'Encuentra el regalo ideal',
    description: 'Responde 4 preguntas simples y descubre ideas de regalo personalizadas para esa persona especial',
  },

  // Configuración del quiz
  quiz: {
    totalSteps: 4,
    minResultsToShow: 3,
    maxResults: 5,
  },

  // Sistema de puntuación para matching de regalos
  matching: {
    minScore: 4, // Puntuación mínima para que un regalo sea considerado
    scoreWeights: {
      interest: 4,    // Peso del interés
      recipient: 3,   // Peso del destinatario
      age: 2,         // Peso de la edad
      budget: 2,      // Peso del presupuesto
    },
  },

  // Mensajes y textos
  messages: {
    lowBudgetTip: 'Hemos priorizado regalos DIY y experiencias low-cost que son perfectas para demostrar afecto sin gastar mucho.',
    shareMessage: '¿Necesitas ayuda para decidir? Comparte esta lista con quien te ayude a elegir',
    giftWrappingTitle: 'Consejo para ocasiones especiales',
    giftWrappingIntro: 'Si es para un cumpleaños o aniversario, considera:',
  },

  // Estadísticas (mostradas en la página de inicio)
  stats: {
    totalIdeas: '+1,000',
    features: [
      'Todas las ocasiones',
      'Todos los presupuestos',
    ],
  },

  // Features de la home page
  features: [
    {
      title: 'Personalizado',
      description: 'Ideas adaptadas a tus respuestas',
      color: 'pink',
    },
    {
      title: 'Rápido y fácil',
      description: 'Solo 4 preguntas en menos de 1 minuto',
      color: 'purple',
    },
    {
      title: 'Para todos',
      description: 'Regalos para cualquier ocasión',
      color: 'blue',
    },
  ],

  // Configuración de animaciones (en milisegundos)
  animations: {
    transitionDuration: 500,
    staggerDelay: 100,
    shareSuccessDuration: 2000,
  },

  // Colores del tema (gradientes)
  theme: {
    primaryGradient: 'from-pink-500 to-purple-600',
    backgroundGradient: 'from-pink-50 via-purple-50 to-blue-50',
    cardShadow: 'shadow-md hover:shadow-xl',
  },
};

// Labels para las opciones de las preguntas
export const QUESTION_LABELS = {
  recipient: {
    pareja: 'Pareja',
    amigo: 'Amigo/a',
    madre: 'Madre',
    padre: 'Padre',
    nino: 'Niño/a',
    companero: 'Compañero/a de trabajo',
  },
  age: {
    '0-12': '0-12 años',
    '13-20': '13-20 años',
    '21-35': '21-35 años',
    '36-55': '36-55 años',
    '56+': '56+ años',
  },
  budget: {
    '0-20': '€0-20',
    '20-50': '€20-50',
    '50-100': '€50-100',
    '100+': '€100+',
  },
  interest: {
    tecnologia: 'Tecnología',
    deporte: 'Deporte',
    cocina: 'Cocina',
    arte: 'Arte/Creatividad',
    lectura: 'Lectura',
    experiencias: 'Experiencias',
  },
};

// Configuración para futuro backend
export const API_CONFIG = {
  // Descomenta y configura cuando conectes un backend
  // baseUrl: 'https://api.regaloperfecto.com',
  // endpoints: {
  //   getGifts: '/api/gifts',
  //   getRecommendations: '/api/recommendations',
  //   shareResults: '/api/share',
  // },
  // timeout: 10000,
};

export default APP_CONFIG;
