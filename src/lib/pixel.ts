declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * O código base em index.html só cria window.fbq (a fila/stub) e carrega o
 * fbevents.js — não inicializa o pixel nem dispara PageView, porque o ID
 * vem da env var VITE_META_PIXEL_ID (configurada na plataforma de deploy,
 * não commitada), e isso só dá pra ler aqui, em JS, via import.meta.env.
 */
export function initMetaPixel(): void {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (!pixelId) {
    console.warn(
      "VITE_META_PIXEL_ID não está definida — Pixel do Meta não foi inicializado."
    );
    return;
  }

  window.fbq?.("init", pixelId);
  window.fbq?.("track", "PageView");
}

export function trackViewContent(contentName: string): void {
  window.fbq?.("track", "ViewContent", { content_name: contentName });
}

const INITIATE_CHECKOUT_FLAG = "p21_initiate_checkout_fired";

/**
 * Dispara InitiateCheckout uma única vez por sessão, não uma vez por botão.
 * Retorna true quando o evento foi disparado agora (primeira vez na sessão),
 * para quem chama saber se precisa segurar a navegação até o evento sair.
 */
export function trackInitiateCheckout(contentName: string, value?: number): boolean {
  if (typeof window === "undefined") return false;

  try {
    if (sessionStorage.getItem(INITIATE_CHECKOUT_FLAG)) return false;
    sessionStorage.setItem(INITIATE_CHECKOUT_FLAG, "1");
  } catch {
    // sessionStorage indisponível (modo privado etc.) — dispara mesmo assim, sem dedupe
  }

  window.fbq?.("track", "InitiateCheckout", {
    content_name: contentName,
    value,
    currency: "BRL",
  });
  return true;
}
