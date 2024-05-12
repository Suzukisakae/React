import { BrowserRouter, Router, Routers } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routers>
        <Router path="/" element={<Homepage />} />
        <Router path="product" element={<Product />} />
        <Router path="pricing" element={<Pricing />} />
      </Routers>
    </BrowserRouter>
  );
}

export default App;
