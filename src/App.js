import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Dashboard from './Dashboard';
import Buttons from './pages/ui-features/buttons';
import Dropdowns from './pages/ui-features/dropdowns';
import Typography from './pages/ui-features/typography';
import BasicElements from './pages/forms/basic_elements';
import Transactions from './pages/Transactions/Transactions';
import Register from './pages/authentication/Account';
import './App.css';
import Login from './pages/authentication/login';

function App() {
  return (
   <>
   <Router>
       
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Account" element={ <Register /> } />
            <Route path="/pages/authentication/login" element={ <Login /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/Dashboard" element={<Layout> <Dashboard /> </Layout> } />
            <Route path="/pages/ui-features/buttons" element= { <Layout> <Buttons/></Layout> } />
            <Route path="/pages/ui-features/dropdowns" element={<Layout> <Dropdowns/></Layout>} />
            <Route path="/pages/ui-features/typography" element={<Layout> <Typography/></Layout>} />
            <Route path="/pages/forms/basic_elements" element={<Layout> <BasicElements/></Layout>} />
            <Route path="/pages/Transactions/Transactions" element={<Layout> <Transactions/></Layout>} />
          </Routes>
        
    </Router>
   </>
  );
}

export default App;
