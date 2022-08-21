import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
