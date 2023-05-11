import { Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="app">
      <div>
        <Sidebar/>
      </div>
      <Routes>
        <Route path="Patient" element={<Patient />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Treatment" element={<Treatment />} />
        <Route path="NewBorn" element={<Newborn />} />
        <Route path="Expenses" element={<Expenses />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Income" element={<Income />} />
      </Routes>
    </div>
  );
}

export default App;
