import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "./expenses.css";
import Loader from "../../components/loader/loader";

function Expenses() {
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState(true);

  const [DataById, setDataById] = useState({
    description: "",
    amount: "",
    date: "",
  });
  const [DataPost, SetPostData] = useState({
    description: "",
    amount: "",
    date: "",
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
    searchPlaceholder: "Search for Expense",
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
      name: "description",
      label: "Description",
    },
    {
      name: "amount",
      label: "Amount",
    },
    {
      name: "date",
      label: "Date",
    },
    // {
    //   name: "status",
    //   label: "status",
    // },
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
                        `${process.env.REACT_APP_URL}/expenses/${tableMeta.rowData[0]}`
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
                          `${process.env.REACT_APP_URL}/expenses/${tableMeta.rowData[0]}`
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
      .get(`${process.env.REACT_APP_URL}/expenses/`)
      .then((response) => {
        console.log(response);
        setData(response.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(DataById);
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
      .put(`${process.env.REACT_APP_URL}/expenses/${Id}`, DataEdit)
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
    <div className="expensesss">
         {Loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
      <div className="none">
        {/* for add expense */}
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Expense</h2>
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
            <label htmlFor="description"> Description</label>
            <TextField
              type="text"
              name="description"
              required="required"
              onChange={handelChangePost}
            />
            <label htmlFor="amount"> Amount </label>
            <TextField
              type="text"
              name="amount"
              required="required"
              onChange={handelChangePost}
            />
            <label htmlFor="date"> Date </label>
            <TextField type="date" name="date" onChange={handelChangePost} />
            {/* <label htmlFor="status"> status</label>
            <TextField
              type="text"
              name="status"
              onChange={handelChangePost}
            />{" "} */}
            {/* <label htmlFor="patient_id"> Patient Id</label>
            <TextField
              type="text"
              name="patient_id"
              onChange={handelChangePost}
            /> */}
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  DataPost.description === "" ||
                  DataPost.amount === "" ||
                  DataPost.date === ""
                ) {
                  Swal.fire({
                    title: "field is Empty !",
                    icon: "warning",
                    confirmButtonColor: "#447695",
                  });
                } else {
                  axios
                    .post(`${process.env.REACT_APP_URL}/expenses/`, DataPost)
                    .then((res) => {
                      console.log(res);
                      getData();
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                  Swal.fire({
                    title: "Expense added",
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
        {/* for edit expense */}
        {visibleEdit && (
          <form>
            <div className="head-form">
              <h2>Edit Expense </h2>
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
            <label htmlFor="description"> Description</label>
            <TextField
              type="text"
              name="description"
              onChange={handelChangeEdit}
              defaultValue={DataById.description}
            />
            <label htmlFor="amount"> Amount</label>
            <TextField
              type="text"
              name="amount"
              defaultValue={DataById.amount}
              onChange={handelChangeEdit}
            />
            <label htmlFor="date"> Date</label>
            <TextField
              type="date"
              name="date"
              defaultValue={DataById.last_name}
              onChange={handelChangeEdit}
            />
            {/* <label htmlFor="status"> Status</label>
            <TextField
              type="text"
              name="status"
              defaultValue={DataById.status}
              onChange={handelChangeEdit}
            /> */}
            {/* <label htmlFor="patient_id"> Patient Id</label>
            <TextField
              type="text"
              name="patient_id"
              defaultValue={DataById.patient_id}
              onChange={handelChangeEdit}
            /> */}
            <Button variant="outlined" onClick={EditData}>
              Edit Expense
            </Button>
          </form>
        )}
      </div>
      <div className="expense_table">
        <h3 className="pagetitle">Expenses</h3>

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
                  + Add Expense
                </Button>
              )
            }
          />
        </div>
      </div>
      </> )}
    </div>
  );
}

export default Expenses;
