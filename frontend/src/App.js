import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import Shop from "./Components/Shop";
import ProductScreen from "./Components/ProductScreen";
import Screen from "./Components/Screen";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/screen" element={<Screen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
