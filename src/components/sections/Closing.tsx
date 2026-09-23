import { closing, educationalNotice } from "../../content/copy";
import CTAButton from "../CTAButton";
import { CHECKOUT_URL } from "../../config";

export default function Closing() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 text-center">
          {closing.title}
        </h2>
        <p className="font-sans text-lg leading-relaxed text-charcoal mb-10 max-w-xl">
          {closing.text}
        </p>

        <div className="text-center">
          <p className="font-sans text-sm text-charcoal mb-4 max-w-md mx-auto">
            {educationalNotice}
          </p>

          <CTAButton href={CHECKOUT_URL}>{closing.buttonLabel}</CTAButton>

          <p className="font-sans text-sm text-charcoal mt-4">{closing.belowButton}</p>
        </div>
      </div>
    </section>
  );
}
