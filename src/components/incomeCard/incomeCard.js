import { useState, useEffect } from "react";
import axios from "axios";
import flower from "../images/flower.svg";

function IncomeCard() {
  const [Data, setData] = useState(null);

  const getDataIncome = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/income/getIncome`)
      .then((response) => {
        setData(response.data.response);
      });
  };
console.log(Data);
  const calculateTotalIncome = () => {
    if (Data && Data.length > 0) {
      const totalIncome = Data.reduce((acc, item) => acc + item.amount, 0);
      return totalIncome;
    }
    return 0;
  };

  useEffect(() => {
    getDataIncome();
  }, []);

  return (
    <>
      <div className="Patient_box">
        <div className="viewAndNmbr">
          <div className="viewAndNmbr" style={{ width: 30 }}>
            ${calculateTotalIncome()}
          </div>
        </div>
        <div>
          <h2 className="title-dashboard">Total income </h2>
          <img className="patient-card-image" src={flower} alt="nothing" />
        </div>
      </div>
    </>
  );
}

export default IncomeCard;
