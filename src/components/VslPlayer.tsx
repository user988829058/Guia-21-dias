import { useState } from "react";
import { VSL_VIDEO_ID, VSL_PROVIDER } from "../config";
import { trackViewContent } from "../lib/pixel";

/**
 * Player "facade": não carrega nenhum iframe/script pesado até o clique.
 * Antes do clique é só uma div com um botão de play desenhado em CSS,
 * então não pesa no LCP nem no carregamento inicial.
 */
export default function VslPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl =
    VSL_PROVIDER === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${VSL_VIDEO_ID}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${VSL_VIDEO_ID}?autoplay=1`;

  function handlePlay() {
    setIsPlaying(true);
    trackViewContent("VSL Protocolo 21 Dias 40+");
  }

  return (
    <div className="relative w-full aspect-video bg-charcoal overflow-hidden">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title="Vídeo — Protocolo 21 Dias 40+"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Assistir ao vídeo"
          className="absolute inset-0 flex items-center justify-center w-full h-full group"
        >
          <span className="absolute inset-0 bg-charcoal" />
          <span
            className="relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 group-hover:bg-white transition-colors"
            aria-hidden="true"
          >
            <span
              className="ml-1 block w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-charcoal"
            />
          </span>
          <span className="absolute bottom-4 left-4 right-4 text-cream/80 text-sm font-sans z-10 text-left">
            Toque para assistir
          </span>
        </button>
      )}
    </div>
  );
}
