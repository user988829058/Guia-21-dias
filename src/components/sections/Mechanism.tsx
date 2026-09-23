import { mechanism } from "../../content/copy";

export default function Mechanism() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-3 text-center">
          {mechanism.title}
        </h2>
        <p className="font-sans text-lg text-charcoal mb-10 md:mb-14 text-center max-w-xl mx-auto">
          {mechanism.subtitle}
        </p>

        <div>
          {mechanism.items.map((item, index) => (
            <div
              key={item.title}
              className={
                "py-8 md:py-10 " +
                (index !== 0 ? "border-t border-sage/40" : "")
              }
            >
              <span className="font-serif text-sage text-sm tracking-widest uppercase mb-2 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-lg leading-relaxed text-charcoal max-w-xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
