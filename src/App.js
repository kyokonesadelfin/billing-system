import './App.scss';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import LoginForm from './login_page/LoginForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing_Navbar';
import AddUserModal from './pages/AddUserModal';


function App() {
  return (
    <>
      <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route path='/billing' element={<Billing />} />
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/adduser' element={<AddUserModal />} />
      </Routes>
    </>
  );
}

export default App;