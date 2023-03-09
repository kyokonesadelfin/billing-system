import './App.scss';
import { Route, Routes  } from 'react-router-dom';
import LoanManagement from './components/LoanManagement';
import LoanConfiguration from './components/LoanConfiguration';
import SubmittedApplication from './components/ListOfSubmittedApplication';
import Billing from './components/Billing';
import LandingPage from './landing_page/LandingPage';
import LoginForm from './login_page/LoginForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/loan-management' element={<LoanManagement/>}/>
        <Route exact path='/loan-configuration' element={<LoanConfiguration/>}/>
        <Route exact path='/submitted-application' element={<SubmittedApplication/>}/>
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
