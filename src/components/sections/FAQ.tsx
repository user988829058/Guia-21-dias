import { faq } from "../../content/copy";

export default function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-10 text-center">
          {faq.title}
        </h2>

        <div>
          {faq.items.map((item, index) => (
            <details
              key={item.question}
              className={
                "group py-5 " + (index !== 0 ? "border-t border-sage/40" : "")
              }
            >
              <summary className="font-serif text-lg md:text-xl text-charcoal cursor-pointer list-none flex items-center justify-between gap-4">
                {item.question}
                <span
                  className="text-sage text-2xl leading-none shrink-0 group-open:rotate-45 transition-transform"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="font-sans text-lg leading-relaxed text-charcoal mt-3 max-w-xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
