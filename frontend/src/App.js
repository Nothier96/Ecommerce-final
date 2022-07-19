import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import Products from "./Components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
