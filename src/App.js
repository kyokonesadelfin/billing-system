import './App.scss';
import Sidenav from './components/Sidenav';
import { Route, Routes  } from 'react-router-dom';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Branch from './components/Branch';
import Department from './components/Department';
import Position from './components/Position';
import Access from './components/Access';
import Operation from './components/Operation';
import ServiceTicket from './components/ServiceTicket';
import Access2 from './components/Access2';
import NewLoanProduct from './components/NewLoanProduct';
import LoanManagement from './components/LoanManagement';
import LoanConfiguration from './components/LoanConfiguration';
import SubmittedApplication from './components/ListOfSubmittedApplication'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Sidenav/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
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
      </Routes>
    </>
  );
}

export default App;
