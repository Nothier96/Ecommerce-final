import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import Shop from "./Components/Shop";
import ProductScreen from "./Components/ProductScreen";
import Laptops from "./Components/Laptops";
import Smartphones from "./Components/Smartphones";
import Tablets from "./Components/Tablets";
import Less1000 from "./Components/Less1000";
import Less500 from "./Components/Less500";
import Smartwatches from "./Components/Smartwatches";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/smartwatches" element={<Smartwatches />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/less1000" element={<Less1000 />} />
          <Route path="/less500" element={<Less500 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
