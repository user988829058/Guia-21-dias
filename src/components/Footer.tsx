import { footer } from "../content/copy";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sage/40 py-10 px-6">
      <div className="max-w-2xl mx-auto space-y-4">
        {footer.paragraphs.map((paragraph, index) => (
          <p key={index} className="font-sans text-sm leading-relaxed text-charcoal">
            {paragraph}
          </p>
        ))}
      </div>
    </footer>
  );
}
