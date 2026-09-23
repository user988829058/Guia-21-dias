import { behind } from "../../content/copy";

export default function Behind() {
  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 text-center">
          {behind.title}
        </h2>
        <div className="space-y-5">
          {behind.paragraphs.map((paragraph, index) => (
            <p key={index} className="font-sans text-lg leading-relaxed text-charcoal">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
