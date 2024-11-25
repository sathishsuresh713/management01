import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import Select from 'react-select';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { locationOptions, skillsOptions } from './Student';

function Studentapi() {
  const navigate = useNavigate()
  const [studentList,setStudentList] = useState([])
  const [isEditModal,setIsEditModal] = useState(false)
  const [editData,setEditData] = useState({})


  const fetchStudentList = async() =>{
    await axios
      .get("https://66f66200436827ced976e50a.mockapi.io/student")
      .then((res) => {
        setStudentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
 useEffect(()=>{
  fetchStudentList()
 },[])

 const addStudent=()=>{
  navigate('/student')
 }
 const handleDelete=(id)=>{
  console.log(id)
  axios.delete(`https://66f66200436827ced976e50a.mockapi.io/student/${id}`).then((res)=>{
    toast.success('Student Removed Successfuly')
    fetchStudentList()
  }).catch((err)=>{
    console.log(err)
  })
 }

 const onEdit=(data)=>{
  setEditData(data)
  setIsEditModal(true)
 }
 const onclose=()=>{
  setIsEditModal(false)
 }

const onView=(id)=>{
  navigate(`/student/${id}`)
}

 const handleChange = (Event, name) => {
  {
    setEditData({ ...editData, [name]: Event.target.value });
  }
};
const handleSelectChange = (value, name) => {
  setEditData({ ...editData, [name]: value });
};

const onEditSubmit=async()=>{
 await axios.put(`https://66f66200436827ced976e50a.mockapi.io/student/${editData.id}`,editData).then((res)=>{
  // console.log(res.data)
    toast.success('Student Updatted Successfully')
    setIsEditModal(false)
    setEditData({})
    fetchStudentList()
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className="container mt-3">
        <h3>Student List</h3>
        <div className='text-end'>
            <button className='btn btn-outline-primary btn-sm' onClick={()=>addStudent()}>Add +</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
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
                    <span className='text-warning me-2' onClick={()=>onEdit(list)}>
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                    <span className='text-info me-2' onClick={()=>onView(list.id)}>
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </span>
                    <span
                      className="text-danger btn-sm"
                      onClick={() => handleDelete(list.id)}
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal isOpen={isEditModal} toggle={()=>onclose()} size='lg'>
          <ModalHeader toggle={()=>onclose()}>Edit Student</ModalHeader>
          <ModalBody>
          <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">First Name</label>
              <input
                value={editData.firstName}
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
                value={editData.lastName}
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
                value={editData.email}
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
                value={editData.mobile}
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
                  (option) => option.value === editData.location
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
                return editData?.skills?.some((li)=>li===op.value)
              })}
               isMulti
               isSearchable
               options={skillsOptions}
               onChange={(ev)=>setEditData({...editData,skills:ev.map((op)=>op.value)})}
               />
            </div>
          </div>
        </div>
      </div>
          </ModalBody>
          <ModalFooter>
            <button onClick={()=>onclose()}>cancel</button>
            <button onClick={()=>onEditSubmit()}>submit</button>
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default Studentapi
