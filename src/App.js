import './App.scss';
import { Route, Routes  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';
import LandingPage from './landing_page/LandingPage';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/billing' element={<Billing/>}/>
        <Route exact path='/' element={<LandingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
