/**
 * Utilidades para exportar datos
 * 
 * Estas funciones ayudan a preparar la aplicación para una futura
 * integración con backend.
 */

import { GiftIdea } from '../data/gifts';

/**
 * Exporta las ideas de regalo a JSON
 * Útil para migrar a una base de datos
 */
export function exportGiftsToJSON(gifts: GiftIdea[]): string {
  return JSON.stringify(gifts, null, 2);
}

/**
 * Exporta el estado del quiz a JSON
 * Útil para enviar al backend o compartir
 */
export function exportQuizState(state: {
  recipient: string | null;
  age: string | null;
  budget: string | null;
  interest: string | null;
}): string {
  return JSON.stringify(state, null, 2);
}

/**
 * Genera un hash simple del estado del quiz
 * Útil para crear URLs únicas compartibles
 */
export function generateStateHash(state: {
  recipient: string | null;
  age: string | null;
  budget: string | null;
  interest: string | null;
}): string {
  const stateString = `${state.recipient}-${state.age}-${state.budget}-${state.interest}`;
  return btoa(stateString);
}

/**
 * Decodifica un hash de estado
 */
export function decodeStateHash(hash: string): {
  recipient: string | null;
  age: string | null;
  budget: string | null;
  interest: string | null;
} | null {
  try {
    const decoded = atob(hash);
    const [recipient, age, budget, interest] = decoded.split('-');
    return { recipient, age, budget, interest };
  } catch {
    return null;
  }
}

/**
 * Formatea un regalo para compartir en redes sociales
 */
export function formatGiftForSharing(gift: GiftIdea): string {
  return `🎁 ${gift.title}\n${gift.description}\n💰 ${gift.priceRange}`;
}

/**
 * Descarga los datos como archivo JSON
 * (Útil para desarrollo/testing)
 */
export function downloadAsJSON(data: any, filename: string): void {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Valida que el estado del quiz está completo
 */
export function isQuizStateComplete(state: {
  recipient: string | null;
  age: string | null;
  budget: string | null;
  interest: string | null;
}): boolean {
  return !!(state.recipient && state.age && state.budget && state.interest);
}
