import { hero } from "../../content/copy";
import { ACTIVE_HEADLINE } from "../../config";
import VslPlayer from "../VslPlayer";

const headlineByVariant = {
  A: hero.headline,
  B: hero.headlineVariantB,
  C: hero.headlineVariantC,
};

export default function Hero() {
  const headline = headlineByVariant[ACTIVE_HEADLINE];

  return (
    <header className="paper-texture bg-cream pt-10 pb-14 md:pt-16 md:pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-[2rem] leading-[1.15] md:text-[2.75rem] text-charcoal mb-5">
          {headline}
        </h1>
        <p className="font-sans text-lg md:text-xl text-charcoal max-w-2xl mb-8">
          {hero.subheadline}
        </p>

        <VslPlayer />

        <p className="font-sans text-base text-charcoal mt-5 max-w-xl">
          {hero.belowPlayer}
        </p>
      </div>
    </header>
  );
}
