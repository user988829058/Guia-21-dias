# Protocolo 21 Dias 40+ — Landing Page

React + Vite + TypeScript + Tailwind. Deploy alvo: Vercel.

## Antes de publicar

Edite `src/config.ts`:

- `CHECKOUT_URL` — link de checkout do produto principal (R$ 27).
- `UPSELL_CHECKOUT_URL` — link de checkout do upsell (Programa de 8 Semanas, R$ 97).
- `DOWNSELL_CHECKOUT_URL` — link de checkout do downsell (Programa em PDF, R$ 47).
- `META_PIXEL_ID` — ID do Pixel do Meta (o Pixel só carrega quando esse valor deixa de ser o placeholder).
- `VSL_VIDEO_ID` / `VSL_PROVIDER` — ID do vídeo (YouTube não listado ou Vimeo) usado no player da seção 1.
- `ACTIVE_HEADLINE` — troca rápida entre as variantes A/B/C de headline (definidas em `src/content/copy.ts`).

Os **bumps** (Guia de Exercícios R$ 19,90 e Checklist R$ 14,90) não são páginas deste projeto —
o texto de cada um está em `src/content/copy.ts` (`bumps.bump1` / `bumps.bump2`) para colar
diretamente na configuração de order bump da plataforma de checkout.

O evento de **Purchase** não é disparado pelo navegador: a API de Conversões do Meta deve ser
configurada no webhook da plataforma de checkout, apontando para o Pixel acima.

## Estrutura

- `src/content/copy.ts` — toda a copy da página, isolada dos componentes.
- `src/components/sections/*` — uma seção por arquivo, na ordem da especificação.
- `src/pages/Home.tsx` — monta a landing page (`/`).
- `src/pages/ThankYou.tsx` — página de obrigado (`/obrigado`).
- `src/pages/Upsell.tsx` / `src/pages/Downsell.tsx` — páginas pós-compra (`/upsell`, `/downsell`).
- `src/styles/global.css` — paleta de cores (CSS custom properties) e textura do hero.

## Comandos

```bash
npm install
npm run dev      # ambiente local
npm run build    # build de produção
npm run preview  # servir o build localmente
```
