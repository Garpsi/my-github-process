import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";
import { Link } from "react-router-dom";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id)

  function addBookToCart(book) {
    addToCart(book);
  }

  function booksOnCart() {
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link className="book__link" to="/books">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link className="book__link" to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected" key={book.id}>
              <figure className="book__selected--figure">
                <img
                  className="book__selected--img"
                  src={book.url}
                  alt=""
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <Price
                  salePrice={book.salePrice}
                  originalPrice={book.originalPrice}
                />
                <div className="book__summary">
                  <h3 className="book__summary--title"></h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Officiis animi alias sunt veritatis, molestiae
                    optio, nobis esse explicabo praesentium pariatur
                    cupiditate expedita enim ut magnam a aliquid omnis
                    numquam eveniet.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Officiis animi alias sunt veritatis, molestiae
                    optio, nobis esse explicabo praesentium pariatur
                    cupiditate expedita enim ut magnam a aliquid omnis
                    numquam eveniet.
                  </p>
                </div>
                {booksOnCart() ? (
                  <Link to={`/cart`}>
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button
                    onClick={() => addBookToCart(book)}
                    className="btn"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
