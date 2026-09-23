import { AnchorHTMLAttributes } from "react";
import { withUtmParams } from "../lib/utm";

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function CTAButton({ href, children, className = "", ...rest }: CTAButtonProps) {
  return (
    <a
      href={withUtmParams(href)}
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
