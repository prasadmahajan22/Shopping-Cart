import Cart from "./components/cart/Cart";
import Product from "./components/products/Product";
import Cartcontext from "./context/cartcontext";
import "./App.css";
function App() {
  return (
    <Cartcontext>
      <div className="contmain">
        <h1 className="heading">Shopping Cart</h1>
        <div className="cont">
          <Product />
          <Cart />
        </div>
      </div>
    </Cartcontext>
  );
}

export default App;
