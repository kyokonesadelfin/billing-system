import './App.scss';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import LoginForm from './login_page/LoginForm';
import NotFound from './pages/NotFound';
import Billing from './pages/Billing';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/billing' element={<Billing />} component={<NavBar />}/>
        <Route path='*' element={<NotFound />} />
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      
    </>
  );
}

export default App;
