# RegaloPerfecto - Guía de Desarrollo

## Estructura del Proyecto

```
/src/app/
├── components/          # Componentes reutilizables
│   ├── Header.tsx
│   ├── ProgressCard.tsx
│   ├── GiftCard.tsx
│   └── PageMeta.tsx
├── config/             # Configuración de la aplicación
│   └── app.config.ts
├── context/            # Estado global
│   └── QuizContext.tsx
├── data/               # Base de datos y lógica de datos
│   ├── gifts.ts
│   └── README.md
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx
│   ├── Question1.tsx
│   ├── Question2.tsx
│   ├── Question3.tsx
│   ├── Question4.tsx
│   ├── Results.tsx
│   └── NotFound.tsx
├── utils/              # Utilidades
│   └── exportHelpers.ts
├── routes.ts           # Configuración de rutas
└── App.tsx             # Componente principal
```

## Características Principales

### 1. Sistema de Navegación
- Usa React Router Data Mode
- 6 rutas: Home, 4 preguntas, Resultados, 404
- Navegación progresiva con estado persistente

### 2. Sistema de Recomendación
El algoritmo de matching asigna puntos según coincidencias:
- Interés: 4 puntos
- Destinatario: 3 puntos
- Edad: 2 puntos
- Presupuesto: 2 puntos
- **Mínimo requerido:** 4 puntos

### 3. Animaciones
Usa Motion (Framer Motion) para:
- Transiciones entre páginas
- Micro-animaciones en botones
- Animación de entrada de tarjetas
- Efectos hover

### 4. Accesibilidad
✅ Focus visible en todos los elementos interactivos
✅ Contraste de color WCAG AA
✅ Navegación por teclado
✅ Textos descriptivos

## Personalización

### Cambiar Colores del Tema

Edita `/src/app/config/app.config.ts`:

```typescript
theme: {
  primaryGradient: 'from-blue-500 to-green-600',  // Tu gradiente
  backgroundGradient: 'from-blue-50 via-green-50 to-yellow-50',
  cardShadow: 'shadow-lg hover:shadow-2xl',
}
```

### Añadir Nuevas Ideas de Regalo

Edita `/src/app/data/gifts.ts`:

```typescript
{
  id: 'mi-regalo-unico',
  title: 'Mi Regalo Especial',
  description: 'Una descripción corta y atractiva',
  priceRange: '€25-50',
  image: 'https://images.unsplash.com/...',
  link: '#',
  tags: {
    recipients: ['pareja', 'amigo'],
    ages: ['21-35'],
    budgets: ['20-50'],
    interests: ['cocina'],
  },
  isDIY: false,
}
```

### Modificar Preguntas

Las opciones de las preguntas se definen en cada componente Question[1-4].tsx. Para añadir una nueva opción:

```typescript
const options = [
  // ... opciones existentes
  { 
    value: 'nuevo_valor' as Recipient, 
    label: 'Nueva Opción', 
    icon: IconComponent, 
    color: 'from-color-500 to-color-600' 
  },
];
```

No olvides actualizar también:
1. El tipo en `QuizContext.tsx`
2. Los labels en `config/app.config.ts`

## Integración con Backend

### Paso 1: Configurar API

Edita `/src/app/config/app.config.ts`:

```typescript
export const API_CONFIG = {
  baseUrl: 'https://tu-api.com',
  endpoints: {
    getGifts: '/api/gifts',
    getRecommendations: '/api/recommendations',
    shareResults: '/api/share',
  },
  timeout: 10000,
};
```

### Paso 2: Crear Cliente API

Crea `/src/app/services/api.ts`:

```typescript
import { API_CONFIG } from '../config/app.config';

export async function fetchGifts() {
  const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.getGifts}`);
  return response.json();
}

export async function getRecommendations(quizState: any) {
  const response = await fetch(
    `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.getRecommendations}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quizState),
    }
  );
  return response.json();
}
```

### Paso 3: Actualizar Componentes

En `Results.tsx`:

```typescript
import { getRecommendations } from '../services/api';

useEffect(() => {
  async function loadGifts() {
    setLoading(true);
    try {
      const ideas = await getRecommendations(state);
      setGifts(ideas);
    } catch (error) {
      console.error('Error loading gifts:', error);
    } finally {
      setLoading(false);
    }
  }
  loadGifts();
}, [state]);
```

## Compartir Resultados

La funcionalidad de compartir usa la Web Share API con fallback a clipboard:

```typescript
const shareData = {
  title: 'RegaloPerfecto - Mis ideas',
  text: `He encontrado ${gifts.length} ideas perfectas!`,
  url: window.location.href,
};

if (navigator.share) {
  await navigator.share(shareData);
} else {
  await navigator.clipboard.writeText(window.location.href);
}
```

### Compartir con URL Personalizada

Puedes añadir el estado del quiz a la URL para compartir resultados específicos:

```typescript
import { generateStateHash } from '../utils/exportHelpers';

const hash = generateStateHash(state);
const shareUrl = `${window.location.origin}/results?q=${hash}`;
```

## Testing

### Casos de Prueba Recomendados

1. **Navegación:**
   - ✓ Flujo completo de 4 preguntas
   - ✓ Botón "atrás" del navegador
   - ✓ Acceso directo a /results sin completar quiz

2. **Lógica de Matching:**
   - ✓ Presupuesto bajo prioriza DIY
   - ✓ Mínimo 3 resultados siempre
   - ✓ Diferentes combinaciones de respuestas

3. **Accesibilidad:**
   - ✓ Navegación por teclado (Tab)
   - ✓ Lectores de pantalla
   - ✓ Contraste de colores

4. **Responsive:**
   - ✓ Mobile (< 768px)
   - ✓ Tablet (768px - 1024px)
   - ✓ Desktop (> 1024px)

## Variables de Entorno

Para producción, crea un archivo `.env`:

```env
VITE_API_URL=https://api.regaloperfecto.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX
VITE_UNSPLASH_ACCESS_KEY=tu_clave_aqui
```

Úsalas en tu código:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

## Despliegue

### Build para Producción

```bash
npm run build
```

El build genera archivos estáticos en `/dist` listos para desplegar en:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Variables Importantes para el Build

Asegúrate de configurar:
- Base URL (si no está en el root)
- Variables de entorno de producción
- Claves API necesarias

## Mejoras Futuras Sugeridas

1. **Analytics:** Añadir seguimiento de eventos (Google Analytics, Mixpanel)
2. **A/B Testing:** Probar diferentes flujos de preguntas
3. **Personalización:** Permitir al usuario guardar favoritos
4. **Social Proof:** Mostrar cuántos usuarios han usado cada recomendación
5. **ML:** Mejorar recomendaciones con machine learning
6. **Multi-idioma:** i18n para soportar varios idiomas
7. **PWA:** Convertir en Progressive Web App
8. **Notificaciones:** Recordatorios de cumpleaños/ocasiones

## Soporte

Para preguntas o problemas:
- Revisa la documentación en `/src/app/data/README.md`
- Consulta los tipos en `QuizContext.tsx`
- Usa las utilidades en `utils/exportHelpers.ts`

## License

MIT License - Personaliza según tus necesidades
