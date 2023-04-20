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
        <ul className="sm:text-2xl sm:gap-18 text-md gap-5 flex justify-center py-5">
          <li className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 w-32 text-center rounded-md">
            <Link to="/">Tickets</Link>
          </li>
          <li className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 w-28 text-center rounded-md">
            <Link to="/scan">Scan QR</Link>
          </li>
          <li className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 w-28 text-center rounded-md">
            <Link to="/login">Login</Link>
          </li>
          <li className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 w-28 text-center rounded-md">
            <Link to="/logout">Logout</Link>
          </li>
          <li className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 w-40 text-center rounded-md">
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
