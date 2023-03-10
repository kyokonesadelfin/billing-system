import './App.scss';
import { Route, Routes  } from 'react-router-dom';
import Billing from './pages/Billing';
import LandingPage from './landing_page/LandingPage';
import LoginForm from './login_page/LoginForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/billing' element={<Billing/>}/>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={<LoginForm/>}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
