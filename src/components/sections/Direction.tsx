import { direction } from "../../content/copy";

export default function Direction() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-10 md:mb-14 text-center">
          {direction.title}
        </h2>

        <ul className="space-y-8 mb-12">
          {direction.pillars.map((pillar) => (
            <li key={pillar.title} className="flex gap-4">
              <span className="font-serif text-sage text-2xl leading-none mt-1" aria-hidden="true">
                —
              </span>
              <p className="font-sans text-lg leading-relaxed text-charcoal">
                <span className="font-semibold">{pillar.title}</span> — {pillar.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="font-sans text-lg leading-relaxed text-charcoal max-w-xl">
          {direction.closing}
        </p>
      </div>
    </section>
  );
}
