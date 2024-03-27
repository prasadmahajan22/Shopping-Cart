import { useContext } from "react";
import "./Product.css";
import cartContext from "../../context/context";

const Product = () => {
  const { price, product, setPrice } = useContext(cartContext);
  console.log(product);
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-cont">
        {product.map((element) => (
          <div className="product" key={element.id}>
            <p className="productName">{element.name}</p>
            <p className="price">{element.price}</p>
            <div className="quantity">
              <button
                onClick={() => {
                  element.quantity = element.quantity + 1;
                  setPrice(price + element.price);
                }}
              >
                +
              </button>
              <p className="quant">{element.quantity}</p>
              <button
                onClick={() => {
                  if (element.quantity > 0) {
                    element.quantity = element.quantity - 1;
                    setPrice(price - element.price);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
