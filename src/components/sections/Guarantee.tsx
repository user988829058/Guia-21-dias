import { guarantee } from "../../content/copy";

export default function Guarantee() {
  return (
    <section className="bg-cream py-14 md:py-20 px-6">
      <div className="max-w-2xl mx-auto border-t border-b border-sage/40 py-10 md:py-12">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-5 text-center">
          {guarantee.title}
        </h2>
        <p className="font-sans text-lg leading-relaxed text-charcoal max-w-xl mx-auto">
          {guarantee.text}
        </p>
      </div>
    </section>
  );
}
