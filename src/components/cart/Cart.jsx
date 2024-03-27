import { useContext } from "react";
import "./Cart.css";
import cartContext from "../../context/context";

const Cart = () => {
  const { product, price } = useContext(cartContext);
  const arr = [];
  product.filter((element) => (element.quantity > 0 ? arr.push(element) : ""));
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cartProducts">
        {!arr.length ? (
          <p className="noAdded">No Product Added</p>
        ) : (
          arr.map((element) => {
            return (
              <div className="cartProduct" key={element.id}>
                <p>{element.name}</p>
                <div className="priceQuantity">
                  <p>
                    {element.quantity} × {element.price}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="totalPrice">
        <h2>Total : </h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default Cart;
