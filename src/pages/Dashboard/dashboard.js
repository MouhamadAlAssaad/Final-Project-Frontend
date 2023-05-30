import React, { useState, useEffect } from "react";
import PatienCard from "../../components/patientCard/patientCard";
import AdminCard from "../../components/adminCard/adminCard";
import NewBornCard from "../../components/newBornCard/newBornCard";
import IncomeCard from "../../components/incomeCard/incomeCard";
import ExpenseCard from "../../components/expenseCard/expenseCard";
import Calendar from "../../components/calendar/calendar.js";

import "./dashboard.css";
import Loader from "../../components/loader/loader.js";

// export default function Dashboard() {
//   const [Loading, setLoading] = useState(true);
//   return (
//     <div>
//       {Loading ? (
//         <div>
//           <Loader />
//         </div>
//       ) : (
//         <div>
//           <h3 className="pagetitle">Dashboard</h3>
//           <div className="dashboard-components">
//             <div className="dashboard-cards">
//               <AdminCard />
//               <PatienCard />
//               <NewBornCard />
//               <IncomeCard />
//               <ExpenseCard />
//             </div>
//             <div className="dashboard-calender">
//               <Calendar />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


export default function Dashboard() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const fetchData = async () => {
    // Your data fetching logic goes here
    // You can make API requests or perform any asynchronous operations

    // Example: Simulating data fetching delay with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <div>
      {Loading ? (
        <div>
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  );
}
