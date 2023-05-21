import { useState, useEffect } from "react";
import axios from "axios";
import "../patientCard/patientCard.css";
import flower from "../images/flower.svg";

function NewBornCard() {
  const [Data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const getDataNewBorn = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/newBorn/`)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    getDataNewBorn();
  }, []);

  console.log(Data);

  return (
    <>
      <div className="Patient_box">
        <div className="viewAndNmbr">
          <span> {Data && Data.response.length} </span>
        </div>
        <div>
          <h2 className="title-dashboard">Total newborns </h2>
          <img  className="patient-card-image" src={flower} alt="nothing" />
        </div>
      </div>
    </>
  );
}

export default NewBornCard;
