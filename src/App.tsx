import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Discover from './pages/Discover';
import Faq from './pages/Faq';
import { SignUp1 } from './pages/auth/SignUp1';
import { SignUp2 } from './pages/auth/SignUp2';
import { Login } from './pages/auth/Login';
import { TicketPage } from './pages/TicketPage';
import TicketSuccess from './components/ticket/TicketSuccess';
import { UserDashboard } from './pages/user/UserDashboard';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/discover" Component={Discover} />
        <Route path="/about" Component={About} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="/blog" Component={Blog} />
        <Route path="/faq" Component={Faq} />
        <Route path="/signup1" Component={SignUp1} />
        <Route path="/signup2" Component={SignUp2} />
        <Route path="/login" Component={Login} />
        <Route path="/ticketPage" Component={TicketPage} />
        <Route path="/ticketSuccess" Component={TicketSuccess} />
        <Route path="/userDashboard" Component={UserDashboard} />
      </Routes>
    </Router>
  );
}

export default App;
