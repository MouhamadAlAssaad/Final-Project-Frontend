import { useState, useEffect } from "react";
import axios from "axios";
import flower from "../images/flower.svg";

function ExpenseCard() {
  const [Data, setData] = useState(null);

  const getDataExpense = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/expenses/`)
      .then((response) => {
        setData(response.data.response);
      });
  };
console.log(Data);
  const calculateTotalExpense = () => {
    if (Data && Data.length > 0) {
      const totalExpense = Data.reduce((acc, item) => acc + item.amount, 0);
      return totalExpense;
    }
    return 0;
  };

  useEffect(() => {
    getDataExpense();
  }, []);

  return (
    <>
      <div className="Patient_box">
        <div className="viewAndNmbr">
          <div className="viewAndNmbr" style={{ width: 30 }}>
            ${calculateTotalExpense()}
          </div>
        </div>
        <div>
          <h2 className="title-dashboard">Total expense </h2>
          <img className="patient-card-image" src={flower} alt="nothing" />
        </div>
      </div>
    </>
  );
}

export default ExpenseCard;
