import TicketsPage from "../pages/TicketsPage";
import LoginPage from "../pages/LoginPage";
import ScanPage from '../pages/ScanPage';
import CreateTicketPage from '../pages/CreateTicketPage';
import RequireAuth from '../components/RequireAuth';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LogoutPage from "../pages/LogoutPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Tickets</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/scan">Scan QR</Link>
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
  );
}

export default App;
