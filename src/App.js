import './App.scss';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import LoginForm from './login_page/LoginForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';


function App() {
  return (
    <>
      <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route path='/billing' element={<Billing />} />
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
