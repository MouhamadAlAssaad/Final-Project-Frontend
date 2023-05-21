import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "./newborn.css";

function Newborn() {
  const [DataPatient, setDataPatient] = useState([]);
  const [Data, setData] = useState();
  const [DataById, setDataById] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    status: "",
    patient_id: "",
  });
  const [DataPost, SetPostData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    status: "",
    patient_id: "",
  });
  const [DataEdit, SetEditData] = useState(null);
  const [Id, setId] = useState();
  const show = () => {
    var element = document.querySelector(".none");
    element.classList.toggle("form-add-income");
  };

  const [visibleAdd, isShowAdd] = useState(false);
  const [visibleEdit, isShowEdit] = useState(false);
  const [iconEdit, isShowIcon] = useState(true);
  const [iconAdd, isShowIconAdd] = useState(true);
  const [elementId, setElementId] = useState(null);

  const showAdd = () => {
    if (visibleAdd === false) {
      isShowAdd(true);
    } else {
      isShowAdd(false);
    }
  };
  console.log(elementId);
  const showEdit = () => {
    if (visibleEdit === false) {
      isShowEdit(true);
    } else {
      isShowEdit(false);
    }
  };

  const showicon = () => {
    iconEdit ? isShowIcon(false) : isShowIcon(true);
  };
  const showiconAdd = () => {
    iconAdd ? isShowIconAdd(false) : isShowIconAdd(true);
  };

  const options = {
    filterType: "checkbox",
    responsive: "simple",
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search for Income",
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
      name: "first_name",
      label: "first_name",
    },
    {
      name: "middle_name",
      label: "middle_name",
    },
    {
      name: "last_name",
      label: "last_name",
    },
    {
      name: "status",
      label: "status",
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
              {iconEdit && (
                <Button
                  sx={{ height: "40px" }}
                  onClick={() => {
                    axios
                      .get(
                        `${process.env.REACT_APP_URL}/newBorn/${tableMeta.rowData[0]}`
                      )
                      .then((response) => {
                        setDataById(response.data.response);
                        setId(tableMeta.rowData[0]);
                        show();
                        showiconAdd();
                        showEdit();
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                  }}
                >
                  <AiFillEdit />
                </Button>
              )}
              <Button
                sx={{ height: "40px" }}
                onClick={() => {
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
                          `${process.env.REACT_APP_URL}/newBorn/${tableMeta.rowData[0]}`
                        )
                        .then((response) => {
                          console.log(response);
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
      .get(`${process.env.REACT_APP_URL}/newBorn/`)
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
    getDataPatient();
  }, []);

  const getDataPatient = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/patient/getAllPatients`)
      .then((response) => {
        setDataPatient(response.data.response);
        console.log("Patient", DataPatient);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handelChangePost = (e) => {
    const value = e.target.value;
    SetPostData({
      ...DataPost,
      [e.target.name]: value,
    });
    console.log(DataPost);
  };

  const EditData = () => {
    axios
      .put(`${process.env.REACT_APP_URL}/newBorn/${Id}`, DataEdit)
      .then((res) => {
        console.log(res);
        getData();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChangeEdit = (e) => {
    const value = e.target.value;
    SetEditData({
      ...DataEdit,
      [e.target.name]: value,
    });
  };

  return (
    <div className="newbornss">
      <div className="none">
        {/* for add expense */}
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Newborn</h2>
              <button
                onClick={() => {
                  show();
                  showAdd();
                  showicon();
                }}
              >
                x
              </button>
            </div>
            <label htmlFor="first_name"> First Name</label>
            <TextField
              type="text"
              name="first_name"
              required="required"
              onChange={handelChangePost}
            />
            <label htmlFor="middle_name"> Middle Name</label>
            <TextField
              type="text"
              name="middle_name"
              required="required"
              onChange={handelChangePost}
            />
            <label htmlFor="last_name"> Last Name</label>
            <TextField
              type="text"
              name="last_name"
              onChange={handelChangePost}
            />
            <label htmlFor="status"> status</label>
            <TextField
              type="text"
              name="status"
              onChange={handelChangePost}
            />{" "}
            <label htmlFor="patient_id"> Patient </label>
            <Select
              name="patient"
              required="required"
              onChange={handelChangePost}
            >
              {DataPatient.map((element) => {
                return (
                  <MenuItem
                    value={element._id}
                    onClick={() => setElementId(element._id)}
                  >{`${element.first_name} ${element.last_name}`}</MenuItem>
                );
              })}
            </Select>
            <Button
              variant="outlined"
              onClick={() => {
                const newData = {
                  first_name: DataPost.first_name,
                  middle_name: DataPost.middle_name,
                  last_name: DataPost.last_name,
                  status: DataPost.status,
                  patient_id: elementId,
                };
                axios
                  .post(
                    `${process.env.REACT_APP_URL}/newBorn/addNewBorn`,
                    newData
                  )
                  .then((res) => {
                    console.log(res);
                    getData();
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
                Swal.fire({
                  title: "NewBorn created",
                  icon: "success",
                  iconColor: "#d0e9e7",
                  confirmButtonColor: "#447695",
                });
              }}
            >
              Submit
            </Button>
          </form>
        )}
        {/* for edit expense */}
        {visibleEdit && (
          <form>
            <div className="head-form">
              <h2>Edit Admin </h2>
              <button
                onClick={() => {
                  show();
                  showEdit();
                  showiconAdd();
                  SetEditData(null);
                }}
              >
                x
              </button>
            </div>
            <label htmlFor="first_name"> First Name</label>
            <TextField
              type="text"
              name="first_name"
              onChange={handelChangeEdit}
              defaultValue={DataById.first_name}
            />
            <label htmlFor="middle_name"> Middle Name</label>
            <TextField
              type="text"
              name="middle_name"
              defaultValue={DataById.middle_name}
              onChange={handelChangeEdit}
            />
            <label htmlFor="last_name"> Last Name</label>
            <TextField
              type="text"
              name="last_name"
              defaultValue={DataById.last_name}
              onChange={handelChangeEdit}
            />
            <label htmlFor="status"> Status</label>
            <TextField
              type="text"
              name="status"
              defaultValue={DataById.status}
              onChange={handelChangeEdit}
            />
            {/* <label htmlFor="patient_id"> Patient Id</label>
            <TextField
              type="text"
              name="patient_id"
              defaultValue={DataById.patient_id}
              onChange={handelChangeEdit}
            /> */}
            <Button variant="outlined" onClick={EditData}>
              Edit NewBorn
            </Button>
          </form>
        )}
      </div>
      <div className="newborn_table">
        <h3 className="pagetitle">NewBorn</h3>

        <div className="table_mui">
          <MUIDataTable
            columns={columns}
            data={Data}
            options={options}
            title={
              iconAdd && (
                <Button
                  onClick={() => {
                    show();
                    showAdd();
                    showicon();
                  }}
                >
                  + Add NewBorn
                </Button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Newborn;
