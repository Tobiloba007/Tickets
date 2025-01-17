import './index.css';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import { SignUp1 } from './pages/auth/SignUp1';
import TicketSuccess from './components/ticket/TicketSuccess';
import { SignUp2 } from './pages/auth/SignUp2';
import { Login } from './pages/auth/Login';
import { UserDashboard } from './pages/user/UserDashboard';
import { HostDashboard } from './pages/host/HostDashboard';
import Home from './pages/Home';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import Discover from './pages/Discover';
import Pricing from './pages/Pricing';
import { TicketPage } from './pages/TicketPage';
import Demo from './pages/Demo';
import { AdminDashboard } from './pages/admin/AdminDashboard';


const App = () => {
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
        <Route path="/forgotPassword" Component={ForgotPassword} />
        <Route path="/resetPassword" Component={ResetPassword} />
        <Route path="/ticketPage" Component={TicketPage} />
        <Route path="/ticketSuccess" Component={TicketSuccess} />
        <Route path="/userDashboard" Component={UserDashboard} />
        <Route path="/hostDashboard" Component={HostDashboard} />
        <Route path="/adminDashboard" Component={AdminDashboard} />
        <Route path="/demo" Component={Demo} />
      </Routes>
    </Router>
  );
}

export default App;
