import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Gates from "./pages/Gates";
import Roofing from "./pages/Roofing"
import Grills from "./pages/Grills"
import { Routes, Route } from "react-router-dom";

function App() {

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
