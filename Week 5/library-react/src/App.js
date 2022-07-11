import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data'
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map(product => 
        +book.id === +product.id
        ? {...product, quantity: +quantity}
        : product
      )
    )
  }

  function removeBook(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(product => {
      counter += product.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/books' element={<Books books={books}/>}/>
          <Route exact path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
          <Route exact path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
