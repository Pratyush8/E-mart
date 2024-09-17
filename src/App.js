import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Products from "./component/products/Products";
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/productdetail/ProductDetail";
import Cart from "./component/cart/Cart";
import OrderPlaced from "./component/orderplaced/OrderPlaced";
import Payment from "./component/cart/Payment";
import ShippingDetails from "./component/cart/ShippingDetails";
import ShoppingCart from "./component/cart/ShoppingCart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
        <Route path="/shipping" element={<ShippingDetails />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
