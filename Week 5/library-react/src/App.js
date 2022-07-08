import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/books" element={<Books />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
