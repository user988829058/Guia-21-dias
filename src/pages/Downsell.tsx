import { Link } from "react-router-dom";
import { downsell } from "../content/copy";
import CTAButton from "../components/CTAButton";
import Footer from "../components/Footer";
import { DOWNSELL_CHECKOUT_URL } from "../config";

export default function Downsell() {
  return (
    <main>
      <section className="paper-texture bg-cream py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 text-center">
            {downsell.headline}
          </h1>

          <div className="space-y-5 mb-10">
            {downsell.paragraphs.map((paragraph, index) => (
              <p key={index} className="font-sans text-lg leading-relaxed text-charcoal">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="text-center">
            <CTAButton href={DOWNSELL_CHECKOUT_URL}>{downsell.buttonLabel}</CTAButton>
            <div className="mt-6">
              <Link
                to="/obrigado"
                className="font-sans text-base text-charcoal underline decoration-sage underline-offset-4 hover:text-sage"
              >
                {downsell.declineLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
