import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Products from "./component/products/Products";
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/orderplaced" component={OrderPlaced} />
        <Route path="/shipping" component={ShippingDetails} />
        <Route path="/shopping" component={ShoppingCart} />
        <Route path="/payment" component={Payment} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
