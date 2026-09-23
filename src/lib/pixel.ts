import { META_PIXEL_ID } from "../config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Carrega o Pixel do Meta e dispara PageView.
 * O evento de Purchase é enviado pelo webhook da plataforma de checkout via
 * API de Conversões — não é disparado pelo navegador aqui.
 */
function loadPixelScript(): void {
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    const q = (fbq as unknown as { queue: unknown[][] }).queue;
    q.push(args);
  } as unknown as { (...args: unknown[]): void; queue: unknown[][]; loaded?: boolean; version?: string };

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

export function initMetaPixel(): void {
  if (typeof window === "undefined") return;
  if (META_PIXEL_ID === "PIXEL_ID_PLACEHOLDER") return;

  const start = () => {
    loadPixelScript();
    window.fbq?.("init", META_PIXEL_ID);
    window.fbq?.("track", "PageView");
  };

  const idleWindow = window as Window & { requestIdleCallback?: (cb: () => void) => void };
  if (idleWindow.requestIdleCallback) {
    idleWindow.requestIdleCallback(start);
  } else {
    window.setTimeout(start, 1500);
  }
}

export function trackViewContent(contentName: string): void {
  window.fbq?.("track", "ViewContent", { content_name: contentName });
}

export function trackInitiateCheckout(contentName: string, value: number): void {
  window.fbq?.("track", "InitiateCheckout", {
    content_name: contentName,
    value,
    currency: "BRL",
  });
}
