import React from "react";
import PatienCard from "../../components/patientCard/patientCard";
import AdminCard from "../../components/adminCard/adminCard";
import NewBornCard from "../../components/newBornCard/newBornCard";
import IncomeCard from "../../components/incomeCard/incomeCard";
import ExpenseCard from "../../components/expenseCard/expenseCard";
import Calendar from "../../components/calendar/calendar.js";

import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <h3 className="pagetitle">Dashboard</h3>
      <div className="dashboard-components">
        <div className="dashboard-cards">
          <AdminCard />
          <PatienCard />
          <NewBornCard />
          
          <IncomeCard />
          <ExpenseCard />
        </div>
        <div className="dashboard-calender">
        <Calendar />
        </div>
      </div>
    </div>
  );
}
