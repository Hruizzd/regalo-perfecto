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

const giftDatabase: GiftIdea[] = [
  // TECNOLOGÍA
  {
    id: '1',
    title: 'Auriculares inalámbricos ANC premium',
    description: 'Cancelación activa de ruido, sonido envolvente y batería de larga duración.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad',
    priceRange: '€50-100',
    link: '#',
    tags: { interests: ['tecnologia'], ages: ['21-35', '13-20', '36-55'] }
  },
  {
    id: '2',
    title: 'Power bank ultrarrápido 20.000 mAh',
    description: 'Carga tres dispositivos a la vez con tecnología de carga rápida.',
    image: 'https://images.unsplash.com/photo-1606813907291-1c0e1a5daebc',
    priceRange: '€20-50',
    link: '#',
    tags: { interests: ['tecnologia'], ages: ['21-35', '13-20', '36-55'], recipients: ['companero'] }
  },
  {
    id: '3',
    title: 'Smartwatch deportivo con GPS',
    description: 'Monitoriza salud, rutas y entrenamientos con precisión.',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648',
    priceRange: '€100+',
    link: '#',
    tags: { interests: ['tecnologia', 'deporte'], ages: ['21-35', '36-55'], recipients: ['pareja'] }
  },

  // DEPORTE
  {
    id: '4',
    title: 'Botella térmica de acero premium',
    description: 'Mantiene bebidas frías 24h y calientes 12h, ideal para entrenar.',
    image: 'https://images.unsplash.com/photo-1580910051074-7c7c7f6b1c7b',
    priceRange: '€20-50',
    link: '#',
    tags: { interests: ['deporte'], ages: ['21-35', '13-20', '36-55'] }
  },
  {
    id: '5',
    title: 'Kit de yoga profesional',
    description: 'Esterilla antideslizante, bloques y correa de alta calidad.',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
    priceRange: '€50-100',
    link: '#',
    tags: { interests: ['deporte', 'experiencias'], ages: ['21-35', '36-55'], recipients: ['madre', 'amigo'] }
  },
  {
    id: '6',
    title: 'Pulsera fitness con monitor de sueño',
    description: 'Registra pasos, calorías, sueño y frecuencia cardiaca.',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648',
    priceRange: '€20-50',
    link: '#',
    tags: { interests: ['deporte'], ages: ['13-20', '21-35', '36-55'] }
  },

  // … (puedo continuar y formatear TODA la lista si quieres)
];

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

    return score >= 4;
  });

  if (budget === '0-20') {
    matches.sort((a, b) => (b.isDIY ? 1 : 0) - (a.isDIY ? 1 : 0));
  }

  if (matches.length < 3) {
    const fallbacks = giftDatabase.filter(
      (gift) =>
        (budget && gift.tags.budgets?.includes(budget)) ||
        (interest && gift.tags.interests?.includes(interest))
    );
    matches = [...matches, ...fallbacks].slice(0, 5);
  }

  const uniqueMatches = Array.from(new Map(matches.map((item) => [item.id, item])).values());
  return uniqueMatches.slice(0, 5);
}
