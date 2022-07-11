import React from "react";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeBook }) => {
  const totalPrice = () => {
    let cost = 0;
    cart.forEach((item) => {
      cost += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return cost;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img src={book.url} alt="" className="cart__book--img" />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">
                          £{(book.salePrice || book.originalPrice).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeBook(book)}
                          className="cart__book--remove"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        value={book.quantity}
                        onChange={(event) =>
                          changeQuantity(book, event.target.value)
                        }
                        className="cart__input"
                        type="number"
                        min={0}
                        max={99}
                      />
                    </div>
                    <div className="cart__total">
                      £
                      {(
                        (book.salePrice || book.originalPrice) * book.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {cart.length === 0 ? (
              <div className="cart__empty">
                <img src={EmptyCart} className="cart__empty--img" alt="" />
                <h2>You don't have any books in your cart!</h2>
                <a href="/books">
                  <button className="btn">Browse books</button>
                </a>
              </div>
            ) : (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>£{(totalPrice() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>£{(totalPrice() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>£{totalPrice().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() =>
                    alert(`Haven't got around to doing this yet :(`)
                  }
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
