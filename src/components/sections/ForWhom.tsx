import { forWhom } from "../../content/copy";

export default function ForWhom() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12">
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-5">
            {forWhom.isFor.title}
          </h3>
          <ul className="space-y-3">
            {forWhom.isFor.items.map((item) => (
              <li key={item} className="flex gap-3 font-sans text-lg leading-relaxed text-charcoal">
                <span className="text-sage font-semibold" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:border-l md:border-sage/40 md:pl-12">
          <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-5">
            {forWhom.isNotFor.title}
          </h3>
          <ul className="space-y-3">
            {forWhom.isNotFor.items.map((item) => (
              <li key={item} className="flex gap-3 font-sans text-lg leading-relaxed text-charcoal">
                <span className="text-sage font-semibold" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
