import { thankYou } from "../content/copy";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <main>
      <section className="paper-texture bg-cream min-h-[70vh] flex items-center py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            {thankYou.title}
          </h1>
          <p className="font-sans text-lg leading-relaxed text-charcoal mb-5">
            {thankYou.text}
          </p>
          <p className="font-sans text-base leading-relaxed text-charcoal">
            {thankYou.helper}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
