import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "./patient.css";

function Patient() {
  const [Data, setData] = useState();
  const [DataById, setDataById] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    age: "",
    address: "",
    weight: "",
    nationality: "",
    mobile: "",
    blood_group: "",
    pressure: "",
    grosess: "",
    push: "",
    abortion: "",
    which_kid: "",
    kids_alive: "",
    kids_dead: "",
    medical_issues: "",
    surgical_issues: "",
    hereditary_issues: "",
    allergies: "",
    ldp: "",
    delivery_due_date: "",
    treatment: "",
  });
  const [DataPost, SetPostData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    age: "",
    address: "",
    weight: "",
    nationality: "",
    mobile: "",
    blood_group: "",
    pressure: "",
    grosess: "",
    push: "",
    abortion: "",
    which_kid: "",
    kids_alive: "",
    kids_dead: "",
    medical_issues: "",
    surgical_issues: "",
    hereditary_issues: "",
    allergies: "",
    ldp: "",
    delivery_due_date: "",
    treatment: "",
  });
  const [DataEdit, SetEditData] = useState(null);
  const [Id, setId] = useState();

  const show = () => {
    var ele = document.querySelector(".none");
    ele.classList.toggle("form-add-income");
  };

  const [visibleAdd, isShowAdd] = useState(false);
  const [visibleEdit, isShowEdit] = useState(false);
  const [iconEdit, isShowIcon] = useState(true);
  const [iconAdd, isShowIconAdd] = useState(true);

  const showAdd = () => {
    if (visibleAdd === false) {
      isShowAdd(true);
    } else {
      isShowAdd(false);
    }
  };
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
    searchPlaceholder: "Search for Patient",
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
      label: "First Name",
    },
    {
      name: "middle_name",
      label: "Middle Name",
    },
    {
      name: "last_name",
      label: "Last Name",
    },
    {
      name: "age",
      label: "Age",
    },
    {
      name: "address",
      label: "Address",
    },
    {
      name: "weight",
      label: "Weight",
    },
    {
      name: "nationality",
      label: "Nationality",
    },
    {
      name: "mobile",
      label: "Mobile",
    },
    {
      name: "blood_group",
      label: "Blood Group",
    },
    {
      name: "pressure",
      label: "Pressure",
    },
    {
      name: "grosess",
      label: "Grosess",
    },
    {
      name: "push",
      label: "Push",
    },
    {
      name: "abortion",
      label: "Abortion",
    },
    {
      name: "which_kid",
      label: "Which kid",
    },
    {
      name: "kids_alive",
      label: "Kids Alive",
    },
    {
      name: "kids_dead",
      label: "Kids Dead",
    },
    {
      name: "medical_issues",
      label: "Medical Issues",
    },
    {
      name: "surgical_issues",
      label: "Surgical Issues",
    },
    {
      name: "hereditary_issues",
      label: "Hereditary Issues",
    },
    {
      name: "allergies",
      label: "Allergies",
    },
    {
      name: "ldp",
      label: "Ldp",
    },
    {
      name: "delivery_due_date",
      label: "Delivery Due Date",
    },
    {
      name: "treatment",
      label: "Treatment",
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
                        `${process.env.REACT_APP_URL}/patient/get/${tableMeta.rowData[0]}`
                      )
                      .then((response) => {
                        setDataById(response.data);
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
                          `${process.env.REACT_APP_URL}/patient/deletePatient/${tableMeta.rowData[0]}`
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
      .get(`${process.env.REACT_APP_URL}/patient/getAllPatients/`)
      .then((response) => {
        console.log(response);
        setData(response.data.response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
      .put(`${process.env.REACT_APP_URL}/patient/editPatient/${Id}`, DataEdit)
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
    <div className="patientss">
      <div className="none">
        {/* for add patient */}
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Patient</h2>
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
            <div className="form_patient">
              <>
              <div>
                <label htmlFor="first_name"> first_name</label>
                <TextField
                  type="text"
                  name="first_name"
                  required="required"
                  onChange={handelChangePost}
                />
                <label htmlFor="middle_name"> middle_name </label>
                <TextField
                  type="text"
                  name="middle_name"
                  required="required"
                  onChange={handelChangePost}
                /></div>
                <div>
                <label htmlFor="last_name"> last_name</label>
                <TextField
                  type="text"
                  name="last_name"
                  onChange={handelChangePost}
                />
              
              
                <label htmlFor="age"> age</label>
                <TextField
                  type="number"
                  name="age"
                  onChange={handelChangePost}
                />{" "}</div>
                <div>
                <label htmlFor="address"> address Id</label>
                <TextField
                  type="text"
                  name="address"
                  onChange={handelChangePost}
                />{" "}
                <label htmlFor="weight"> weight</label>
                <TextField
                  type="number"
                  name="weight"
                  required="required"
                  onChange={handelChangePost}
                /></div>
              
              <div>
                <label htmlFor="nationality"> nationality </label>
                <TextField
                  type="text"
                  name="nationality"
                  required="required"
                  onChange={handelChangePost}
                />
                <label htmlFor="mobile"> mobile</label>
                <TextField
                  type="number"
                  name="mobile"
                  onChange={handelChangePost}
                /></div>
                <div>
                <label htmlFor="blood_group"> blood_group</label>
                <TextField
                  type="text"
                  name="blood_group"
                  onChange={handelChangePost}
                />{" "}
              
              
                <label htmlFor="pressure"> pressure </label>
                <TextField
                  type="text"
                  name="pressure"
                  onChange={handelChangePost}
                />{" "}</div>
                <div>
                <label htmlFor="grosess"> grosess</label>
                <TextField
                  type="text"
                  name="grosess"
                  required="required"
                  onChange={handelChangePost}
                />
                <label htmlFor="push"> push </label>
                <TextField
                  type="text"
                  name="push"
                  required="required"
                  onChange={handelChangePost}
                />
              </div>
              <div>
                <label htmlFor="abortion"> abortion</label>
                <TextField
                  type="text"
                  name="abortion"
                  onChange={handelChangePost}
                />
                <label htmlFor="which_kid"> which_kid</label>
                <TextField
                  type="number"
                  name="which_kid"
                  onChange={handelChangePost}
                />{" "}</div>
                <div>

                <label htmlFor="kids_alive"> kids_alive</label>
                <TextField
                  type="number"
                  name="kids_alive"
                  onChange={handelChangePost}
                />{" "}
             
              
                <label htmlFor="kids_dead"> kids_dead</label>
                <TextField
                  type="number"
                  name="kids_dead"
                  required="required"
                  onChange={handelChangePost}
                /> </div><div>
                <label htmlFor="medical_issues"> medical_issues </label>
                <TextField
                  type="text"
                  name="medical_issues"
                  required="required"
                  onChange={handelChangePost}
                />
                <label htmlFor="surgical_issues"> surgical_issues</label>
                <TextField
                  type="text"
                  name="surgical_issues"
                  onChange={handelChangePost}
                />
              </div>
              <div>
                <label htmlFor="hereditary_issues"> hereditary_issues</label>
                <TextField
                  type="text"
                  name="hereditary_issues"
                  onChange={handelChangePost}
                />{" "}
                <label htmlFor="allergies"> allergies</label>
                <TextField
                  type="text"
                  name="allergies"
                  onChange={handelChangePost}
                />{" "}</div>
                <div>
                <label htmlFor="ldp"> ldp</label>
                <TextField
                  type="date"
                  name="ldp"
                  required="required"
                  onChange={handelChangePost}
                />
              
                <label htmlFor="delivery_due_date"> delivery_due_date </label>
                <TextField
                  type="date"
                  name="delivery_due_date"
                  required="required"
                  onChange={handelChangePost}
                /></div>
                <div>
                <label htmlFor="treatment"> treatment</label>
                <TextField
                  type="text"
                  name="treatment"
                  onChange={handelChangePost}
                />
              </div>
              </>
            </div>
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  DataPost.first_name === "" ||
                  DataPost.middle_name === "" ||
                  DataPost.last_name === "" ||
                  DataPost.age === "" ||
                  DataPost.address === "" ||
                  DataPost.weight === "" ||
                  DataPost.nationality === "" ||
                  DataPost.mobile === "" ||
                  DataPost.blood_group === "" ||
                  DataPost.pressure === "" ||
                  DataPost.grosess === "" ||
                  DataPost.push === "" ||
                  DataPost.abortion === "" ||
                  DataPost.which_kid === "" ||
                  DataPost.kids_alive === "" ||
                  DataPost.kids_dead === "" ||
                  DataPost.medical_issues === "" ||
                  DataPost.surgical_issues === "" ||
                  DataPost.hereditary_issues === "" ||
                  DataPost.allergies === "" ||
                  DataPost.ldp === "" ||
                  DataPost.delivery_due_date === "" ||
                  DataPost.treatment === ""
                ) {
                  Swal.fire({
                    title: "field is Empty !",
                    icon: "warning",
                    confirmButtonColor: "#447695",
                  });
                } else {
                  axios
                    .post(
                      `${process.env.REACT_APP_URL}/patient/addPatient`,
                      DataPost
                    )
                    .then((res) => {
                      console.log(res);
                      getData();
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                  Swal.fire({
                    title: "Patient created",
                    icon: "success",
                    iconColor: "#d0e9e7",
                    confirmButtonColor: "#447695",
                  });
                }
              }}
            >
              Submit
            </Button>
          </form>
        )}
        {/* for edit patient */}
        {visibleEdit && (
          <form>
            <div className="head-form">
              <h2>Edit Patient </h2>
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
            <div className="form_patient">
              <div>
                <label htmlFor="first_name"> first_name</label>
                <TextField
                  type="text"
                  name="first_name"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.first_name}
                />
                <label htmlFor="middle_name"> middle_name </label>
                <TextField
                  type="text"
                  name="middle_name"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.middle_name}
                />
                <label htmlFor="last_name"> last_name</label>
                <TextField
                  type="text"
                  name="last_name"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.last_name}
                />
              </div>
              <div>
                <label htmlFor="age"> age</label>
                <TextField
                  type="number"
                  name="age"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.age}
                />{" "}
                <label htmlFor="address"> address Id</label>
                <TextField
                  type="text"
                  name="address"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.address}
                />{" "}
                <label htmlFor="weight"> weight</label>
                <TextField
                  type="number"
                  name="weight"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.weight}
                />
              </div>
              <div>
                <label htmlFor="nationality"> nationality </label>
                <TextField
                  type="text"
                  name="nationality"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.nationality}
                />
                <label htmlFor="mobile"> mobile</label>
                <TextField
                  type="number"
                  name="mobile"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.mobile}
                />
                <label htmlFor="blood_group"> blood_group</label>
                <TextField
                  type="text"
                  name="blood_group"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.blood_group}
                />{" "}
              </div>
              <div>
                <label htmlFor="pressure"> pressure </label>
                <TextField
                  type="text"
                  name="pressure"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.pressure}
                />{" "}
                <label htmlFor="grosess"> grosess</label>
                <TextField
                  type="text"
                  name="grosess"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.grosess}
                />
                <label htmlFor="push"> push </label>
                <TextField
                  type="text"
                  name="push"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.push}
                />
              </div>
              <div>
                <label htmlFor="abortion"> abortion</label>
                <TextField
                  type="text"
                  name="abortion"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.abortion}
                />
                <label htmlFor="which_kid"> which_kid</label>
                <TextField
                  type="number"
                  name="which_kid"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.which_kid}
                />{" "}
                <label htmlFor="kids_alive"> kids_alive</label>
                <TextField
                  type="number"
                  name="kids_alive"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.kids_alive}
                />{" "}
              </div>
              <div>
                <label htmlFor="kids_dead"> kids_dead</label>
                <TextField
                  type="number"
                  name="kids_dead"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.kids_dead}
                />
                <label htmlFor="medical_issues"> medical_issues </label>
                <TextField
                  type="text"
                  name="medical_issues"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.medical_issues}
                />
                <label htmlFor="surgical_issues"> surgical_issues</label>
                <TextField
                  type="text"
                  name="surgical_issues"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.surgical_issues}
                />
              </div>
              <div>
                <label htmlFor="hereditary_issues"> hereditary_issues</label>
                <TextField
                  type="text"
                  name="hereditary_issues"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.hereditary_issues}
                />{" "}
                <label htmlFor="allergies"> allergies</label>
                <TextField
                  type="text"
                  name="allergies"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.allergies}
                />{" "}
                <label htmlFor="ldp"> ldp</label>
                <TextField
                  type="date"
                  name="ldp"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.ldp}
                />
              </div>
              <div>
                <label htmlFor="delivery_due_date"> delivery_due_date </label>
                <TextField
                  type="date"
                  name="delivery_due_date"
                  required="required"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.delivery_due_date}
                />
                <label htmlFor="treatment"> treatment</label>
                <TextField
                  type="text"
                  name="treatment"
                  onChange={handelChangeEdit}
                  defaultValue={DataById.treatment}
                />
              </div>
              
              <Button variant="outlined" onClick={EditData}>
                Edit Patient
              </Button>
            </div>
          </form>
        )}
      </div>
      <div className="patients_table">
        <h3 className="pagetitle">Patients</h3>

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
                  + Add Patient
                </Button>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Patient;
