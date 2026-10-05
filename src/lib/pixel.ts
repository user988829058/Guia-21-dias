declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * O Pixel do Meta é carregado pelo código base colado em index.html
 * (dispara PageView automaticamente). Estas funções só registram eventos
 * adicionais no fbq já existente — nenhum outro carregamento acontece aqui.
 */

export function trackViewContent(contentName: string): void {
  window.fbq?.("track", "ViewContent", { content_name: contentName });
}

const INITIATE_CHECKOUT_FLAG = "p21_initiate_checkout_fired";

/** Dispara InitiateCheckout uma única vez por sessão, não uma vez por botão. */
export function trackInitiateCheckout(contentName: string, value?: number): void {
  if (typeof window === "undefined") return;

  try {
    if (sessionStorage.getItem(INITIATE_CHECKOUT_FLAG)) return;
    sessionStorage.setItem(INITIATE_CHECKOUT_FLAG, "1");
  } catch {
    // sessionStorage indisponível (modo privado etc.) — dispara mesmo assim
  }

  window.fbq?.("track", "InitiateCheckout", {
    content_name: contentName,
    value,
    currency: "BRL",
  });
}
