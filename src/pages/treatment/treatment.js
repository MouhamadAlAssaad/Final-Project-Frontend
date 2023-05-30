import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import "./treatment.css";
import Loader from "../../components/loader/loader";


function Treatment() {
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState(true);
  const [DataById, setDataById] = useState({
    name: "",
    type: "",
  });
  const [DataPost, SetPostData] = useState({
    name: "",
    type: "",
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
      name: "name",
      label: "name",
    },
    {
      name: "type",
      label: "type",
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
                        `${process.env.REACT_APP_URL}/treatment/${tableMeta.rowData[0]}`
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
                          `${process.env.REACT_APP_URL}/treatment/${tableMeta.rowData[0]}`
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
      .get(`${process.env.REACT_APP_URL}/treatment/`)
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
      .put(`${process.env.REACT_APP_URL}/treatment/${Id}`, DataEdit)
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
    <div className="treatmentss">
            {Loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
      <div className="none">
        {/* for add treatment */}
        {visibleAdd && (
          <form>
            <div className="head-form">
              <h2>Add Treatment</h2>
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
            <label htmlFor="name"> Name</label>
            <TextField
              type="text"
              name="name"
              required="required"
              onChange={handelChangePost}
            />
            <label htmlFor="type"> Type </label>
            <TextField
              type="text"
              name="type"
              required="required"
              onChange={handelChangePost}
            />

            <Button
              variant="outlined"
              onClick={() => {
                if (DataPost.name === "" || DataPost.type === "") {
                  Swal.fire({
                    title: "field is Empty !",
                    icon: "warning",
                    confirmButtonColor: "#447695",
                  });
                } else {
                  axios
                    .post(
                      `${process.env.REACT_APP_URL}/treatment/addTreatment`,
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
                    title: "Treatment created",
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
        {/* for edit treatment */}
        {visibleEdit && (
          <form>
            {console.log("bataaaataaaaa", DataById)}
            <div className="head-form">
              <h2>Edit Treatment </h2>
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
            <label htmlFor="name"> Name</label>
            <TextField
              type="text"
              name="name"
              onChange={handelChangeEdit}
              defaultValue={DataById.name}
            />
            <label htmlFor="type"> Type</label>
            <TextField
              type="text"
              name="type"
              defaultValue={DataById.type}
              onChange={handelChangeEdit}
            />
            <Button variant="outlined" onClick={EditData}>
              Edit Treatment
            </Button>
          </form>
        )}
      </div>
      <div className="treatment_table">
        <div>
          {" "}
          <h3 className="pagetitle">Treatment</h3>
        </div>

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
                  + Add Treatment
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

export default Treatment;
