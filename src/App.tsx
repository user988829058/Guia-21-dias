import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Upsell from "./pages/Upsell";
import Downsell from "./pages/Downsell";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obrigado" element={<ThankYou />} />
      <Route path="/upsell" element={<Upsell />} />
      <Route path="/downsell" element={<Downsell />} />
    </Routes>
  );
}
