# RegaloPerfecto - Documentación de Datos

## Estructura de la Base de Datos de Regalos

Este archivo explica cómo modificar y expandir la base de datos de ideas de regalo.

### Archivo: `gifts.ts`

#### Tipos de Datos

```typescript
export interface GiftIdea {
  id: string;                    // Identificador único
  title: string;                 // Nombre del regalo
  description: string;           // Descripción breve (1 línea)
  priceRange: string;           // Rango de precio (ej: "€20-50")
  image: string;                // URL de la imagen
  link: string;                 // Enlace a ejemplo (placeholder)
  tags: {                       // Etiquetas para el matching
    recipients?: Recipient[];
    ages?: AgeRange[];
    budgets?: Budget[];
    interests?: Interest[];
  };
  isDIY?: boolean;              // Si es un proyecto DIY
}
```

#### Cómo Añadir Nuevas Ideas de Regalo

1. **Añade un nuevo objeto al array `giftDatabase`:**

```typescript
{
  id: 'mi-nuevo-regalo',
  title: 'Título del Regalo',
  description: 'Una línea descriptiva',
  priceRange: '€30-60',
  image: 'https://...',  // Usa Unsplash o tu CDN
  link: '#',
  tags: {
    recipients: ['pareja', 'amigo'],  // Destinatarios relevantes
    ages: ['21-35', '36-55'],         // Rangos de edad apropiados
    budgets: ['20-50', '50-100'],     // Presupuestos compatibles
    interests: ['cocina', 'arte'],    // Intereses relacionados
  },
  isDIY: true,  // Solo si es DIY
}
```

2. **Valores permitidos para cada tag:**
   - `recipients`: 'pareja' | 'amigo' | 'madre' | 'padre' | 'nino' | 'companero'
   - `ages`: '0-12' | '13-20' | '21-35' | '36-55' | '56+'
   - `budgets`: '0-20' | '20-50' | '50-100' | '100+'
   - `interests`: 'tecnologia' | 'deporte' | 'cocina' | 'arte' | 'lectura' | 'experiencias'

#### Lógica de Matching

La función `findGiftIdeas()` asigna puntos según coincidencias:
- Interés coincidente: +4 puntos
- Destinatario coincidente: +3 puntos
- Edad coincidente: +2 puntos
- Presupuesto coincidente: +2 puntos

**Mínimo requerido:** 4 puntos para aparecer en resultados

#### Reglas Especiales

1. **Presupuesto bajo (€0-20):**
   - Prioriza regalos marcados con `isDIY: true`
   - Se ordenan primero los regalos DIY

2. **Fallback:**
   - Si hay menos de 3 coincidencias, se añaden ideas que coincidan solo en presupuesto o interés

### Integración con Backend (Futuro)

Para conectar con un backend:

1. **Reemplaza `giftDatabase` con una llamada API:**

```typescript
export async function fetchGiftIdeas(): Promise<GiftIdea[]> {
  const response = await fetch('YOUR_API_ENDPOINT/gifts');
  return response.json();
}
```

2. **Modifica `findGiftIdeas()` para consultar el servidor:**

```typescript
export async function findGiftIdeas(
  recipient: Recipient | null,
  age: AgeRange | null,
  budget: Budget | null,
  interest: Interest | null
): Promise<GiftIdea[]> {
  const response = await fetch('YOUR_API_ENDPOINT/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recipient, age, budget, interest }),
  });
  return response.json();
}
```

3. **Actualiza `Results.tsx` para manejar async:**

```typescript
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadGifts() {
    const ideas = await findGiftIdeas(...);
    setGifts(ideas);
    setLoading(false);
  }
  loadGifts();
}, []);
```

### Variables de Configuración

Para facilitar cambios futuros, considera estas variables:

```typescript
// Configuración exportable
export const MATCH_CONFIG = {
  MIN_SCORE: 4,
  SCORE_WEIGHTS: {
    interest: 4,
    recipient: 3,
    age: 2,
    budget: 2,
  },
  MAX_RESULTS: 5,
  MIN_RESULTS: 3,
};
```

## Mantenimiento

- **Actualizar imágenes:** Usa Unsplash API o tu propio CDN
- **Actualizar precios:** Revisa rangos de precio periódicamente
- **Añadir categorías:** Expande los tipos en `QuizContext.tsx`
- **Testing:** Prueba todas las combinaciones posibles de respuestas
