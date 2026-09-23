import { inversion } from "../../content/copy";

export default function Inversion() {
  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 text-center">
          {inversion.title}
        </h2>

        <div className="space-y-5 mb-10">
          {inversion.paragraphs.map((paragraph, index) => (
            <p key={index} className="font-sans text-lg leading-relaxed text-charcoal">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-cream px-6 py-6 md:px-8 md:py-8">
          <p className="font-serif text-xl md:text-2xl text-charcoal text-center leading-snug">
            {inversion.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
