import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Discover from './pages/Discover';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/discover" Component={Discover} />
        <Route path="/about" Component={About} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="/blog" Component={Blog} />
      </Routes>
    </Router>
  );
}

export default App;
