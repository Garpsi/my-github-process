import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path=':id' element={<Posts />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
