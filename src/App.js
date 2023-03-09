import './App.scss';
import Sidenav from './components/Sidenav';
import { Route, Routes  } from 'react-router-dom';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Branch from './pages/Branch';
import Department from './pages/Department';
import Position from './pages/Position';
import Access from './pages/Access';
import Operation from './pages/Operation';
import ServiceTicket from './pages/ServiceTicket';
import Access2 from './pages/Access2';
import NewLoanProduct from './pages/NewLoanProduct';
import LoanManagement from './pages/LoanManagement';
import LoanConfiguration from './pages/LoanConfiguration';
import SubmittedApplication from './pages/ListOfSubmittedApplication';
import Billing from './pages/Billing';
import LandingPage from './landing_page/LandingPage';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Sidenav/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/branch' element={<Branch/>}/>
        <Route exact path='/department' element={<Department/>}/>
        <Route exact path='/position' element={<Position/>}/>
        <Route exact path='/access' element={<Access/>}/>
        <Route exact path='/access/access2' element={<Access2/>}/>
        <Route exact path='/operation' element={<Operation/>}/>
        <Route exact path='/serviceticket' element={<ServiceTicket/>}/>
        <Route exact path='/new-loan-product' element={<NewLoanProduct/>}/>
        <Route exact path='/loan-management' element={<LoanManagement/>}/>
        <Route exact path='/loan-configuration' element={<LoanConfiguration/>}/>
        <Route exact path='/submitted-application' element={<SubmittedApplication/>}/>
        <Route exact path='/billing' element={<Billing/>}/>
        <Route exact path='/landing-page' element={<LandingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
