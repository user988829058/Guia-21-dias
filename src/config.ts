// Substitua os placeholders abaixo pelos links reais da plataforma de checkout
// e pelo ID do Pixel do Meta antes de publicar.

export const CHECKOUT_URL = "CHECKOUT_URL";
export const UPSELL_CHECKOUT_URL = "CHECKOUT_URL_UPSELL";
export const DOWNSELL_CHECKOUT_URL = "CHECKOUT_URL_DOWNSELL";

// ID do Pixel do Meta: configurado direto no código base em index.html,
// não aqui — essa é a única fonte do ID.

// Troca rápida de headline para teste A/B, sem mexer no layout.
export const ACTIVE_HEADLINE: "A" | "B" | "C" = "A";

// URL direta do arquivo de vídeo (mp4), via variável de ambiente VITE_VSL_URL
// (configurada no Vercel). Quando presente, tem prioridade sobre o embed
// YouTube/Vimeo abaixo.
export const VSL_URL = import.meta.env.VITE_VSL_URL as string | undefined;

// ID do vídeo (VSL) — YouTube não listado publicamente ou Vimeo. Usado só
// como alternativa quando VITE_VSL_URL não está definida.
export const VSL_VIDEO_ID = "VIDEO_ID_PLACEHOLDER";
export const VSL_PROVIDER: "youtube" | "vimeo" = "youtube";
