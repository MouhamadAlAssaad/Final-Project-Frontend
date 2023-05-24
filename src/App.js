import { Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Patient from "./pages/Patient/patient";
import Sidebar from "./components/sidebar/sidebare";
import Admin from "./pages/Admin/admin";
import Treatment from "./pages/treatment/treatment";
import Newborn from "./pages/NewBorn/newborn";
import Expenses from "./pages/Expenses/expenses";
import Dashboard from "./pages/Dashboard/dashboard";
import Income from "./pages/Income/income";
import Appointment from "./pages/Appointment/appointment";
import Login from "./pages/login/login";
import NavBar from "./components/navBar/navBar";
import Home from "./pages/Home/home";
import MainDashboard from "./pages/MainDashboard/MainDashboard";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import PrivateRoutes from "./Utils/PrivateRoutes";
import Footer from "./components/footer/footer";
import Inbox from "./pages/Inbox/inbox";

function App() {
  const location = useLocation();
  const login = location.pathname === "/login";
  const home = location.pathname === "/";
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isDashLogin = !isDashboard && !login 
  return (
    <div className="app">
      {/* <div>{!login && <Sidebar />}</div> */}
      {isDashLogin && <NavBar /> }

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<MainDashboard />}>
            <Route path="dashboard-home" element={<Dashboard />} />
            <Route path="dashboard-Patient" element={<Patient />} />
            <Route path="dashboard-Admin" element={<Admin />} />
            <Route path="dashboard-Treatment" element={<Treatment />} />
            <Route path="dashboard-NewBorn" element={<Newborn />} />
            <Route path="dashboard-Expenses" element={<Expenses />} />
            <Route path="dashboard-Income" element={<Income />} />
            <Route path="dashboard-Appointment" element={<Appointment />} />
            <Route path="dashboard-Inbox" element={<Inbox />} />
          </Route>
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
