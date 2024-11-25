import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export const locationOptions = [
  { value: "salem", label: "salem" },
  { value: "chennai", label: "chennai" },
  { value: "coimbatore", label: "coimbatore" },
];
export const skillsOptions = [
  {label: "java", value: "java"},
  {label: "python", value: "python"},
  {label: "javascript", value: "javascript"},
  {label: "c++", value: "c++"},
]

function Student() {
  const navigate=useNavigate()
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    location: "",
    skills:[]
  });
  const [studentList, setStudentList] = useState([]);

  const handleDelete = (index) => {
    studentList.splice(index, 1);
    setStudentList([...studentList]);
  };

  const handleChange = (Event, name) => {
    {
      setNewStudent({ ...newStudent, [name]: Event.target.value });
    }
  };
  const handleSelectChange = (value, name) => {
    setNewStudent({ ...newStudent, [name]: value });
  };

  function validateMobileNumber(number) {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  }
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const onSubmit = async() => {
    if (newStudent.firstName === "") {
      return toast.error("please enter first name");
    }
    if (newStudent.firstName.length < 3) {
      return alert("first name shoud be more than 3 characters");
    }
    if (validateMobileNumber(newStudent.mobile) === false) {
      return alert("please enter valid mobile number");
    }
    if (validateEmail(newStudent.email) === false) {
      return alert("please enter valid email");
    }

    

    await axios
      .post("https://66f66200436827ced976e50a.mockapi.io/student", newStudent)
      .then((res) => {
        console.log(res);
        toast.success('Student created successfully')
        navigate('/studentapi')
      })
      .catch((err) => {
        console.log(err);
      });

      

    setStudentList([...studentList, newStudent]);
    setNewStudent({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      location: "",
    });
  };

  console.log(newStudent);
  console.log(studentList);

  
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">First Name</label>
              <input
                value={newStudent.firstName}
                type="text"
                class="form-control"
                onChange={(Event) => {
                  handleChange(Event, "firstName");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Last Name</label>
              <input
                value={newStudent.lastName}
                type="text"
                class="form-control"
                onChange={(Event) => {
                  handleChange(Event, "lastName");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Email Id</label>
              <input
                value={newStudent.email}
                type="text"
                class="form-control"
                onChange={(Event) => {
                  handleChange(Event, "email");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Mobile No</label>
              <input
                value={newStudent.mobile}
                type="text"
                class="form-control"
                onChange={(Event) => {
                  handleChange(Event, "mobile");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Location</label>
              <Select
              isSearchable
                value={locationOptions.filter(
                  (option) => option.value === newStudent.location
                )}
                options={locationOptions}
                onChange={(e) => handleSelectChange(e.value, "location")}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Skills</label>
              <Select 
              value={skillsOptions.filter((op)=>{
                return newStudent?.skills?.some((li)=>li===op.value)
              })}
               isMulti
               isSearchable
               options={skillsOptions}
               onChange={(ev)=>setNewStudent({...newStudent,skills:ev.map((op)=>op.value)})}/>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-outline-info"
          onClick={() => onSubmit()}
        >
          Submit
        </button>
      </div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Location</th>
              <th scope="col">Skills</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((list, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.email}</td>
                  <td>{list.mobile}</td>
                  <td>{list.location}</td>
                  <td>{list.skills.join(" , ")}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete()}
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Student;
