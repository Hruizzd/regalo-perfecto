import { Recipient, AgeRange, Budget, Interest } from '../context/QuizContext';

export interface GiftIdea {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
  link: string;
  tags: {
    recipients?: Recipient[];
    ages?: AgeRange[];
    budgets?: Budget[];
    interests?: Interest[];
  };
  isDIY?: boolean;
}

// Base de datos de ideas de regalo
export const giftDatabase: GiftIdea[] = [
  // Cocina + Pareja
  {
    id: 'cooking-class',
    title: 'Clase de cocina para dos',
    description: 'Experiencia culinaria para compartir y aprender juntos',
    priceRange: '€40-80',
    image: 'https://images.unsplash.com/photo-1758522488051-8ca91c4e0d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBjb3VwbGV8ZW58MXx8fHwxNzcyMjc5MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'amigo'],
      ages: ['21-35', '36-55'],
      budgets: ['20-50', '50-100'],
      interests: ['cocina', 'experiencias'],
    },
  },
  {
    id: 'gourmet-spices',
    title: 'Set de especias gourmet',
    description: 'Colección premium de especias del mundo',
    priceRange: '€25-45',
    image: 'https://images.unsplash.com/photo-1771541897176-44a3e01dc484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3BpY2VzJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzIyODAwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'madre', 'padre', 'amigo'],
      ages: ['21-35', '36-55', '56+'],
      budgets: ['20-50'],
      interests: ['cocina'],
    },
  },
  {
    id: 'cookbook-recipe',
    title: 'Libro de recetas con dedicatoria',
    description: 'Recetario ilustrado personalizable',
    priceRange: '€15-30',
    image: 'https://images.unsplash.com/photo-1600758083752-d1edc34dfbf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZyUyMGdpZnR8ZW58MXx8fHwxNzcyMjgwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'madre', 'amigo'],
      ages: ['21-35', '36-55', '56+'],
      budgets: ['0-20', '20-50'],
      interests: ['cocina', 'lectura'],
    },
  },

  // Tecnología
  {
    id: 'smartwatch',
    title: 'Smartwatch deportivo',
    description: 'Reloj inteligente con monitor de actividad',
    priceRange: '€120-250',
    image: 'https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIyNzEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'amigo', 'padre', 'companero'],
      ages: ['21-35', '36-55'],
      budgets: ['100+'],
      interests: ['tecnologia', 'deporte'],
    },
  },
  {
    id: 'tech-gadgets',
    title: 'Kit de gadgets tecnológicos',
    description: 'Accesorios tech innovadores y útiles',
    priceRange: '€30-60',
    image: 'https://images.unsplash.com/photo-1765805914327-1e4b17f658bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0cyUyMGdpZnR8ZW58MXx8fHwxNzcyMjgwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['amigo', 'companero', 'padre'],
      ages: ['13-20', '21-35', '36-55'],
      budgets: ['20-50', '50-100'],
      interests: ['tecnologia'],
    },
  },

  // Deporte
  {
    id: 'sports-equipment',
    title: 'Equipamiento deportivo',
    description: 'Set completo para entrenar en casa',
    priceRange: '€50-120',
    image: 'https://images.unsplash.com/photo-1668361920298-e3ebb0798819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBmaXRuZXNzfGVufDF8fHx8MTc3MjIzMTA1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'amigo', 'padre'],
      ages: ['21-35', '36-55'],
      budgets: ['50-100', '100+'],
      interests: ['deporte'],
    },
  },

  // Arte y creatividad
  {
    id: 'art-supplies',
    title: 'Set de materiales artísticos',
    description: 'Kit completo para pintura y dibujo',
    priceRange: '€35-70',
    image: 'https://images.unsplash.com/photo-1683905761552-ccc9d133b092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMHN1cHBsaWVzfGVufDF8fHx8MTc3MjE5Nzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['amigo', 'madre', 'nino'],
      ages: ['0-12', '13-20', '21-35', '36-55'],
      budgets: ['20-50', '50-100'],
      interests: ['arte'],
    },
  },
  {
    id: 'diy-craft',
    title: 'Kit DIY artesanía',
    description: 'Proyecto creativo hecho a mano',
    priceRange: '€10-25',
    image: 'https://images.unsplash.com/photo-1757625487036-1f9ad7f70289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0JTIwZGl5fGVufDF8fHx8MTc3MjI4MDA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['amigo', 'madre', 'nino'],
      ages: ['0-12', '13-20', '21-35', '36-55'],
      budgets: ['0-20', '20-50'],
      interests: ['arte'],
    },
    isDIY: true,
  },

  // Experiencias
  {
    id: 'concert-tickets',
    title: 'Entradas para concierto',
    description: 'Experiencia musical inolvidable',
    priceRange: '€40-120',
    image: 'https://images.unsplash.com/photo-1652018440238-1aeb20a803a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwdGlja2V0cyUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzcyMjgwMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'amigo'],
      ages: ['13-20', '21-35', '36-55'],
      budgets: ['20-50', '50-100', '100+'],
      interests: ['experiencias'],
    },
  },
  {
    id: 'spa-wellness',
    title: 'Día de spa y bienestar',
    description: 'Experiencia relajante y rejuvenecedora',
    priceRange: '€60-150',
    image: 'https://images.unsplash.com/photo-1770625467983-8cb4168e4de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzcyMjgwMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'madre', 'amigo'],
      ages: ['21-35', '36-55', '56+'],
      budgets: ['50-100', '100+'],
      interests: ['experiencias'],
    },
  },

  // Niños
  {
    id: 'children-toys',
    title: 'Juguetes educativos',
    description: 'Juegos que estimulan la creatividad',
    priceRange: '€20-50',
    image: 'https://images.unsplash.com/photo-1637662781480-bbceae01ee91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHRveXMlMjBnaWZ0fGVufDF8fHx8MTc3MjI4MDA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['nino'],
      ages: ['0-12', '13-20'],
      budgets: ['20-50'],
      interests: ['arte', 'tecnologia'],
    },
  },

  // Oficina/Compañeros
  {
    id: 'office-accessories',
    title: 'Accesorios de escritorio premium',
    description: 'Organización elegante para el espacio de trabajo',
    priceRange: '€25-60',
    image: 'https://images.unsplash.com/photo-1523634540939-0be5fba32c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzcyMjgwMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['companero', 'amigo'],
      ages: ['21-35', '36-55'],
      budgets: ['20-50', '50-100'],
      interests: ['tecnologia'],
    },
  },

  // Vino/Elegante
  {
    id: 'wine-bottle',
    title: 'Botella de vino premium',
    description: 'Vino de reserva en estuche elegante',
    priceRange: '€30-80',
    image: 'https://images.unsplash.com/photo-1733248113944-c4f7dc132dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIyODAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'padre', 'madre', 'companero'],
      ages: ['36-55', '56+'],
      budgets: ['20-50', '50-100'],
      interests: ['cocina', 'experiencias'],
    },
  },

  // Joyería
  {
    id: 'jewelry',
    title: 'Joyería elegante',
    description: 'Pieza única y atemporal',
    priceRange: '€50-200',
    image: 'https://images.unsplash.com/photo-1765560172744-dcc030763771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZ2lmdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMjgwMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['pareja', 'madre', 'amigo'],
      ages: ['21-35', '36-55', '56+'],
      budgets: ['50-100', '100+'],
      interests: ['arte'],
    },
  },

  // Jardinería
  {
    id: 'garden-tools',
    title: 'Kit de jardinería y plantas',
    description: 'Todo para cultivar un jardín en casa',
    priceRange: '€25-60',
    image: 'https://images.unsplash.com/photo-1764801361899-7c7a1ae241cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjB0b29sc3xlbnwxfHx8fDE3NzIyODAwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    tags: {
      recipients: ['madre', 'padre', 'amigo'],
      ages: ['36-55', '56+'],
      budgets: ['20-50', '50-100'],
      interests: ['arte'],
    },
  },
];

// Función para encontrar ideas de regalo basadas en las respuestas
export function findGiftIdeas(
  recipient: Recipient | null,
  age: AgeRange | null,
  budget: Budget | null,
  interest: Interest | null
): GiftIdea[] {
  let matches = giftDatabase.filter((gift) => {
    let score = 0;

    if (recipient && gift.tags.recipients?.includes(recipient)) score += 3;
    if (age && gift.tags.ages?.includes(age)) score += 2;
    if (budget && gift.tags.budgets?.includes(budget)) score += 2;
    if (interest && gift.tags.interests?.includes(interest)) score += 4;

    return score >= 4; // Mínimo 4 puntos para ser considerado
  });

  // Priorizar regalos DIY o low-cost si el presupuesto es ≤ €20
  if (budget === '0-20') {
    matches.sort((a, b) => {
      const aIsDIY = a.isDIY ? 1 : 0;
      const bIsDIY = b.isDIY ? 1 : 0;
      return bIsDIY - aIsDIY;
    });
  }

  // Si no hay suficientes coincidencias, añadir ideas generales
  if (matches.length < 3) {
    const fallbacks = giftDatabase.filter(
      (gift) =>
        (budget && gift.tags.budgets?.includes(budget)) ||
        (interest && gift.tags.interests?.includes(interest))
    );
    matches = [...matches, ...fallbacks].slice(0, 5);
  }

  // Eliminar duplicados y limitar a 5 resultados
  const uniqueMatches = Array.from(new Map(matches.map((item) => [item.id, item])).values());
  return uniqueMatches.slice(0, 5);
}
