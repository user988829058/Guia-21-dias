import { AnchorHTMLAttributes, MouseEvent } from "react";
import { withUtmParams } from "../lib/utm";
import { trackInitiateCheckout } from "../lib/pixel";

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  eventLabel: string;
  eventValue?: number;
}

// Tempo para o beacon do InitiateCheckout sair antes de navegar para a Kiwify.
const TRACKING_FLUSH_DELAY_MS = 200;

export default function CTAButton({
  href,
  children,
  className = "",
  eventLabel,
  eventValue,
  onClick,
  ...rest
}: CTAButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const firedNow = trackInitiateCheckout(eventLabel, eventValue);
    if (!firedNow) return;

    // Clique com modificador (abrir em nova aba/janela) ou botão do meio:
    // o evento já disparou acima, mas a navegação em si fica por conta do
    // navegador — não interceptamos nem atrasamos esse caso.
    const isPlainLeftClick =
      event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
    if (!isPlainLeftClick) return;

    // Primeira vez disparando nesta sessão: segura a navegação só o
    // suficiente para o evento sair antes do navegador descarregar a página.
    event.preventDefault();
    const destination = withUtmParams(href);
    window.setTimeout(() => {
      window.location.href = destination;
    }, TRACKING_FLUSH_DELAY_MS);
  }

  return (
    <a
      href={withUtmParams(href)}
      onClick={handleClick}
      className={
        "inline-block bg-terracotta hover:bg-terracotta-hover focus-visible:bg-terracotta-hover " +
        "text-white font-sans font-semibold text-lg md:text-xl text-center " +
        "px-8 py-4 rounded-sm transition-colors duration-150 " +
        "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta " +
        className
      }
      {...rest}
    >
      {children}
    </a>
  );
}
