import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "./inbox.css";

function Inbox() {
  const [Data, setData] = useState();
  const [DataById, setDataById] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [Id, setId] = useState(null);

  const options = {
    filterType: "checkbox",
    responsive: "simple",
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search for Messages",
    download: true,
    print: true,
    pagination: true,
    rowsPerPage: 5,
    loaded: true,
    rowsPerPageOptions: [5],
  };
  const columns = [
    {
      name: "_id",
      label: " ",
      options: {
        display: "none",
      },
    },
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name ",
    },
    {
      name: "email",
      label: "Email ",
    },

    {
      name: "message",
      label: "Message ",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <Button
                sx={{ height: "40px" }}
                onClick={() => {
                  setId(tableMeta.rowData[0]);
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#447695",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {

                    if (result.isConfirmed) {
                      axios
                        .delete(
                          `${process.env.REACT_APP_URL}/inbox/${tableMeta.rowData[0]}`
                        )
                        .then((response) => {
                          console.log(response.data);
                          getData();
                        })
                        .catch((err) => {
                          console.log(err.message);
                        });
                    }
                  });
                }}
              >
                <MdDelete />
              </Button>
            </div>
          );
        },
      },
    },
  ];
  console.log(Id);
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/inbox/getall`)
      .then((response) => {
        console.log(response);
        setData(response.data.response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(DataById);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="treatmentss">
      <div className="treatment_table">
        <div>
          {" "}
          <h3 className="pagetitle">Inbox</h3>
        </div>

        <div className="table_mui">
          <MUIDataTable
            columns={columns}
            data={Data}
            options={options}
            // title={
            //   iconAdd && (
            // <Button
            //   onClick={() => {
            //     show();
            //     showAdd();
            //     showicon();
            //   }}
            // >
            //   + Add Appointment
            // </Button>
            //   )
            // }
          />
        </div>
      </div>
    </div>
  );
}

export default Inbox;
