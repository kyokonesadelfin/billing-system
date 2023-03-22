import './App.scss';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import LoginForm from './login_page/LoginForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing_Navbar';
import AddUser from './admin_portal/AddUser';
import ManageUsers from './admin_portal/ManageUsers';



function App() {
  return (
    <>
      <Routes>
        <Route path='/billing' element={<Billing />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/manage' element={<ManageUsers />} />
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;