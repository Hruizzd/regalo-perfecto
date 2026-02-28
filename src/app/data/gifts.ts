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
    description: 'Cancelación activa de ruido y sonido envolvente.',
    image: 'https://img4.dhresource.com/webp/m/f3/albu/jc/h/22/e884e479-d5b4-498e-92ee-082e4bd9cc10.jpg',
    priceRange: '€50-100',
    link: '#',
    tags: {
      recipients: ['amigo', 'pareja'],
      ages: ['13-20', '21-35', '36-55'],
      budgets: ['50-100'],
      interests: ['tecnologia']
    }
  },
  {
    id: '2',
    title: 'Power bank ultrarrápido 20.000 mAh',
    description: 'Carga tres dispositivos a la vez con carga rápida.',
    image: 'https://www.maxmovil.com/media/catalog/product/cache/2c055c968235f5bf43b443aee4bb62c6/s/a/samsung_power_bank_20000mah_beige_3_.png',
    priceRange: '€20-50',
    link: '#',
    tags: {
      recipients: ['companero', 'amigo'],
      ages: ['13-20', '21-35', '36-55'],
      budgets: ['20-50'],
      interests: ['tecnologia']
    }
  },
  {
    id: '3',
    title: 'Smartwatch deportivo con GPS',
    description: 'Monitoriza salud, rutas y entrenamientos.',
    image: 'https://prixton.es/wp-content/uploads/2023/05/RELOJ-INTELIGENTE-SMARTWATCH-SW29-ALEXA-ASISTENTE-VOZ-WEARABLES-PRIXTON-1.jpg',
    priceRange: '€100+',
    link: '#',
    tags: {
      recipients: ['pareja', 'amigo'],
      ages: ['21-35', '36-55'],
      budgets: ['100+'],
      interests: ['tecnologia', 'deporte']
    }
  },

  // DEPORTE
  {
    id: '4',
    title: 'Botella térmica de acero premium',
    description: 'Mantiene bebidas frías 24h y calientes 12h.',
    image: 'https://images.unsplash.com/photo-1580910051074-7c7c7f6b1c7b',
    priceRange: '€20-50',
    link: '#',
    tags: {
      recipients: ['amigo', 'companero'],
      ages: ['13-20', '21-35', '36-55'],
      budgets: ['20-50'],
      interests: ['deporte']
    }
  },
  {
    id: '5',
    title: 'Kit de yoga profesional',
    description: 'Esterilla antideslizante, bloques y correa.',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
    priceRange: '€50-100',
    link: '#',
    tags: {
      recipients: ['madre', 'amigo'],
      ages: ['21-35', '36-55'],
      budgets: ['50-100'],
      interests: ['deporte', 'experiencias']
    }
  },
  {
    id: '6',
    title: 'Pulsera fitness con monitor de sueño',
    description: 'Registra pasos, calorías y sueño.',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648',
    priceRange: '€20-50',
    link: '#',
    tags: {
      recipients: ['amigo', 'pareja'],
      ages: ['13-20', '21-35', '36-55'],
      budgets: ['20-50'],
      interests: ['deporte']
    }
  },

  // COCINA
  {
    id: '7',
    title: 'Kit de cocina creativa “Chef en casa”',
    description: 'Utensilios profesionales para nuevas recetas.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    priceRange: '€50-100',
    link: '#',
    tags: {
      recipients: ['madre', 'pareja'],
      ages: ['21-35', '36-55'],
      budgets: ['50-100'],
      interests: ['cocina']
    }
  },
  {
    id: '8',
    title: 'Clase de cocina gourmet para dos',
    description: 'Una experiencia culinaria única.',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0c6c1c5',
    priceRange: '€50-100',
    link: '#',
    tags: {
      recipients: ['pareja'],
      ages: ['21-35', '36-55'],
      budgets: ['50-100'],
      interests: ['cocina', 'experiencias']
    }
  },
  {
    id: '9',
    title: 'Libro de recetas personalizado',
    description: 'Un recetario único con dedicatoria.',
    image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5',
    priceRange: '€20-50',
    link: '#',
    tags: {
      recipients: ['madre', 'padre'],
      ages: ['21-35', '36-55'],
      budgets: ['20-50'],
      interests: ['cocina', 'lectura']
    }
  },

  // LECTURA
  {
    id: '16',
    title: 'E-reader con luz cálida',
    description: 'Ideal para leer sin cansar la vista.',
    image: 'https://img.asmedia.epimg.net/resizer/v2/QSJZ6MAWR5HT7MDSAXUC3MZJTM.png?auth=79e0a74fa044608c8ed8cafaee05c403c3853ce578116494be8601f38bbf8225&width=1200&height=1200&smart=true',
    priceRange: '€100+',
    link: '#',
    tags: {
      recipients: ['amigo', 'pareja'],
      ages: ['13-20', '21-35', '36-55', '56+'],
      budgets: ['100+'],
      interests: ['lectura']
    }
  },
  {
    id: '17',
    title: 'Suscripción a audiolibros',
    description: 'Acceso ilimitado a miles de títulos.',
    image: 'https://lalibretadenani.com/wp-content/uploads/2023/10/audiolibros-plataformas-y-suscripciones.png',
    priceRange: '€20-50',
    link: '#',
    tags: {
      recipients: ['amigo', 'pareja'],
      ages: ['21-35', '36-55'],
      budgets: ['20-50'],
      interests: ['lectura', 'experiencias']
    }
  },
  {
    id: '18',
    title: 'Lámpara de lectura LED flexible',
    description: 'Iluminación perfecta para leer.',
    image: 'https://images.unsplash.com/photo-1770226698529-a9c8726949c6',
    priceRange: '€20-50',
    link: '#',
    tags: {
      recipients: ['madre', 'padre'],
      ages: ['36-55', '56+'],
      budgets: ['20-50'],
      interests: ['lectura']
    }
  },

  // NIÑOS
  {
    id: '24',
    title: 'LEGO creativo temático',
    description: 'Construcción libre para estimular la imaginación.',
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f5b',
    priceRange: '€50-100',
    link: '#',
    tags: {
      recipients: ['nino'],
      ages: ['0-12', '13-20'],
      budgets: ['50-100'],
      interests: ['tecnologia']
    }
  },

  // PRESUPUESTO BAJO
  {
    id: '27',
    title: 'Mini suculentas decorativas',
    description: 'Plantas fáciles de cuidar.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    priceRange: '€0-20',
    link: '#',
    tags: {
      recipients: ['madre', 'companero'],
      ages: ['21-35', '36-55'],
      budgets: ['0-20'],
      interests: ['decoracion']
    }
  },
  {
    id: '28',
    title: 'Taza personalizada',
    description: 'Un detalle económico pero especial.',
    image: 'https://images.unsplash.com/photo-1723032891924-a96338a7accf',
    priceRange: '€0-20',
    link: '#',
    tags: {
      recipients: ['amigo', 'companero'],
      ages: ['13-20', '21-35'],
      budgets: ['0-20'],
      interests: ['lectura', 'decoracion']
    }
  },
  {
    id: '29',
    title: 'Vela aromática artesanal',
    description: 'Aromas naturales y diseño elegante.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    priceRange: '€0-20',
    link: '#',
    tags: {
      recipients: ['madre', 'amigo'],
      ages: ['21-35', '36-55'],
      budgets: ['0-20'],
      interests: ['decoracion']
    }
  }
];

export function findGiftIdeas(
  recipient: Recipient | null,
  age: AgeRange | null,
  budget: Budget | null,
  interest: Interest | null
): GiftIdea[] {
  // 1. FILTRO PRINCIPAL
  let matches = giftDatabase.filter((gift) => {
    let score = 0;

    if (recipient && gift.tags.recipients?.includes(recipient)) score += 3;
    if (age && gift.tags.ages?.includes(age)) score += 2;
    if (budget && gift.tags.budgets?.includes(budget)) score += 2;
    if (interest && gift.tags.interests?.includes(interest)) score += 4;

    return score >= 2;
  });

  // 2. PRIORIDAD PARA PRESUPUESTO BAJO
  if (budget === '0-20') {
    matches.sort((a, b) => (b.isDIY ? 1 : 0) - (a.isDIY ? 1 : 0));
  }

  // 3. FALLBACK INTELIGENTE (solo interés y presupuesto)
  if (matches.length < 3) {
    const fallbacks = giftDatabase.filter((gift) => {
      let score = 0;

      if (interest && gift.tags.interests?.includes(interest)) score += 3;
      if (budget && gift.tags.budgets?.includes(budget)) score += 2;

      return score >= 3; // evita regalos aleatorios
    });

    matches = [...matches, ...fallbacks];
  }

  // 4. ORDENAR POR RELEVANCIA REAL
  matches.sort((a, b) => {
    const scoreA =
      (recipient && a.tags.recipients?.includes(recipient) ? 3 : 0) +
      (age && a.tags.ages?.includes(age) ? 2 : 0) +
      (budget && a.tags.budgets?.includes(budget) ? 2 : 0) +
      (interest && a.tags.interests?.includes(interest) ? 4 : 0);

    const scoreB =
      (recipient && b.tags.recipients?.includes(recipient) ? 3 : 0) +
      (age && b.tags.ages?.includes(age) ? 2 : 0) +
      (budget && b.tags.budgets?.includes(budget) ? 2 : 0) +
      (interest && b.tags.interests?.includes(interest) ? 4 : 0);

    return scoreB - scoreA;
  });

  // 5. ELIMINAR DUPLICADOS Y LIMITAR A 5
  const uniqueMatches = Array.from(new Map(matches.map((item) => [item.id, item])).values());
  return uniqueMatches.slice(0, 5);
}

export default giftDatabase;
