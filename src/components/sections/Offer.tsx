import { offer, closing, product, educationalNotice } from "../../content/copy";
import CTAButton from "../CTAButton";
import { CHECKOUT_URL } from "../../config";

export default function Offer() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3 text-center">
          {offer.title}
        </h2>
        <p className="font-sans text-lg text-charcoal mb-10 text-center max-w-xl mx-auto">
          {offer.subtitle}
        </p>

        <div className="bg-cream px-6 py-8 md:px-10 md:py-10 mb-8">
          <h3 className="font-serif text-xl text-charcoal mb-5">{offer.includesTitle}</h3>
          <ul className="space-y-3 mb-6">
            {offer.includes.map((line) => (
              <li key={line} className="flex gap-3 font-sans text-lg leading-relaxed text-charcoal">
                <span className="text-sage font-semibold" aria-hidden="true">
                  ·
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="font-sans text-base text-charcoal border-t border-sage/40 pt-5">
            {offer.format}
          </p>
        </div>

        <div className="text-center">
          <CTAButton href={CHECKOUT_URL}>{closing.buttonLabel}</CTAButton>
          <p className="font-sans text-sm text-charcoal mt-3">
            {product.name} — {product.price}
          </p>
          <p className="font-sans text-xs text-charcoal mt-4 max-w-md mx-auto">
            {educationalNotice}
          </p>
        </div>
      </div>
    </section>
  );
}
