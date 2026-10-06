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
