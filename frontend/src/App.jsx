import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Gates from "./pages/Gates";
import Roofing from "./pages/Roofing"
import Grills from "./pages/Grills"
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll(".reveal-on-scroll"));

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="/roofing" element={<Roofing />} />
        <Route path="/grills" element={<Grills />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
