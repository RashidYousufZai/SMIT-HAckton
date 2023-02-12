import './App.css';
import Admin from "./component/Admin"
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './component/Welcome';
import Dashboard from "./component/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from './component/Account';
import Cart from './component/Cart';
import Homepage from "./component/Homepage"
import First from './component/First';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="first" element={<First/>}/>
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/homepage" element={<Homepage />} />
           <Route path="/account" element={<Account />} />
           <Route path="/Cart" element={<Cart />} />
           <Route path="/admin" element={<Admin/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
