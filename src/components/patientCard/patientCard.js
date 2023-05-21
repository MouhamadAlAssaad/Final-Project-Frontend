import { useState, useEffect } from "react";
import axios from "axios";
import "./patientCard.css";
import flower from "../images/flower.svg";
import righflower from "../images/rightflower.svg"

function PatienCard() {
  const [Data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const getDataPatient = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/patient/getAllPatients`)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    getDataPatient();
  }, []);

  console.log(Data);

  return (
    <>
      <div className="Patient_box">
        <div className="viewAndNmbr">
          <span> {Data && Data.response.length} </span>
        </div>
        <div>
          <h2 className="title-dashboard">Total patients </h2>
          <img  className="patient-card-image" src={flower} alt="nothing" />
        </div>
      </div>
    </>
  );
}

export default PatienCard;
