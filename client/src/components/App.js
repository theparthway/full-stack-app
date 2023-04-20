import TicketsPage from "../pages/TicketsPage";
import LoginPage from "../pages/LoginPage";
import ScanPage from '../pages/ScanPage';
import CreateTicketPage from '../pages/CreateTicketPage';
import RequireAuth from '../components/RequireAuth';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogoutPage from "../pages/LogoutPage";
import '../index.css';

function App() {

  return (
    <div className="App">
      <div className="font-poppins">
      <BrowserRouter>
        <ul className="sm:text-2xl sm:gap-24 text-md gap-5 flex justify-center py-5">
          <li>
            <Link to="/">Tickets</Link>
          </li>
          <li>
            <Link to="/scan">Scan QR</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/new">New Ticket</Link>
          </li>
        </ul>

        <Routes>
          <Route index element={<RequireAuth><TicketsPage /></RequireAuth>}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/scan" element={ <RequireAuth><ScanPage /></RequireAuth> } />
          <Route path="/new" element={ <CreateTicketPage></CreateTicketPage> } />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
