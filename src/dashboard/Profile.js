import React, { useState } from "react";
import Select from "react-select";



const subjectTakenOptions = [
  { value: "tamil", label: "tamil" },
  { value: "english", label: "english" },
  { value: "maths", label: "maths" },
  { value: "science", label: "science" },
  { value: "social", label: "social" },
];

const classesTakenOptions = [
  { value: "1 STD", label: "1 STD" },
  { value: "2 STD", label: "2 STD" },
  { value: "3 STD", label: "3 STD" },
  { value: "4 STD", label: "4 STD" },
  { value: "5 STD", label: "5 STD" },
]

function Profile() {

  const [newTeacher,setNewTeacher] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    subjecttaken: "",
    subjectknown:[]
  })

const isFormEmpty= newTeacher.firstName.trim() && newTeacher.lastName.trim();

  const [teacherList,setTeacherList] = useState([])

  const onsubmit=()=>{
    setTeacherList([...teacherList,newTeacher])
    setNewTeacher({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    subjecttaken: "",
    cassestaken:[]
  })
  }

console.log(teacherList)
const handlechange =(event,name)=>{
  setNewTeacher({...newTeacher,[name]:event.target.value})
}

const handleDelete=(index)=>{
  teacherList.splice(index,1)
  setTeacherList([...teacherList])
}

const handleSelectChange=(value,name)=>{
  setNewTeacher({...newTeacher,[name]:value})
}


  return (
    <>
      <h2 className="text-center">Teacher Details</h2>
      <div className="container border border-dark p-3">
        <div className="row mt-3">
          <div className="col-6">
            <div class="mb-3">
              <label  class="form-label">
                FirstName
              </label>
              <input
              value={newTeacher.firstName}
              onChange={(event)=>{handlechange(event,'firstName')}}
                type="text"
                class="form-control border border-info"
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label  class="form-label">
                LastName
              </label>
              <input
              value={newTeacher.lastName}
               onChange={(event)=>{handlechange(event,'lastName')}}
                type="text"
                class="form-control  border border-info"
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label  class="form-label">
                Mobile No
              </label>
              <input
              value={newTeacher.mobile}
               onChange={(event)=>{handlechange(event,'mobile')}}
                type="text"
                class="form-control  border border-info"
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label  class="form-label">
                Email Id
              </label>
              <input
              value={newTeacher.email}
               onChange={(event)=>{handlechange(event,'email')}}
                type="text"
                class="form-control  border border-info"
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label  class="form-label">
                Subject Taken
              </label>
              <Select value={subjectTakenOptions.filter((op)=>op.value===newTeacher.subjecttaken)} className="border border-info" options={subjectTakenOptions} onChange={(e)=>handleSelectChange(e.value,'subjecttaken')}/>
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label  class="form-label">
                No Of Classes Taken
              </label>
              <Select 
              value={classesTakenOptions.filter((op)=>{
                return newTeacher?.subjectknown?.some((li)=>li===op.value)
              })}
               onChange={(e)=>setNewTeacher({...newTeacher,subjectknown:e.map((op)=>op.value)})}
               className="border border-info" options={classesTakenOptions}
              isMulti
              isSearchable/>
            </div>
          </div>
        </div>
        <div>
          <button disabled={!isFormEmpty} className="btn btn-outline-primary" onClick={()=>onsubmit()}>Submit</button>
        </div>
      </div>
      <div className="container  border border-dark p-3">
        <table class="table table-bordered border border-primary mt-3 text-center">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Email Id</th>
              <th scope="col">Subject Taken</th>
              <th scope="col">Subjects Known</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              teacherList.map((list,index)=>{
                return  <tr>
                <th scope="row">{index+1}</th>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.mobile}</td>
                <td>{list.email}</td>
                <td>{list.subjecttaken}</td>
                <td>{list.subjectknown.join(' , ')}</td>
                <td>
                  <span> <i class="fa fa-trash-o text-danger fs-5" aria-hidden="true" onClick={()=>handleDelete()}></i></span>
                </td>
              </tr>
              })
            }
           
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile;
