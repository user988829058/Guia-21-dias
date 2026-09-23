import Hero from "../components/sections/Hero";
import Continuity from "../components/sections/Continuity";
import Mechanism from "../components/sections/Mechanism";
import Inversion from "../components/sections/Inversion";
import Direction from "../components/sections/Direction";
import Offer from "../components/sections/Offer";
import ForWhom from "../components/sections/ForWhom";
import Behind from "../components/sections/Behind";
import Guarantee from "../components/sections/Guarantee";
import FAQ from "../components/sections/FAQ";
import Closing from "../components/sections/Closing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Continuity />
      <Mechanism />
      <Inversion />
      <Direction />
      <Offer />
      <ForWhom />
      <Behind />
      <Guarantee />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
