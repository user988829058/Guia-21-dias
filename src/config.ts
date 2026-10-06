// Constante única do checkout: todo botão de compra da landing (produto
// principal, upsell e downsell) referencia esta mesma URL. Para trocar o
// destino de todos os botões de uma vez, troque só esta linha.
export const CHECKOUT_URL = "https://pay.kiwify.com.br/0g2zXpZ";

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
