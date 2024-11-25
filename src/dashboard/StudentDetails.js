import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

function StudentDetails() {
    const params = useParams()
    console.log(params.id)
    const [studentDetails,setStudentDetails] = useState({})

    const fetchStudentDetails = ()=>{
        axios.get(`https://66f66200436827ced976e50a.mockapi.io/student/${params.id}`).then((res)=>{
            setStudentDetails(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        if(params.id){
            fetchStudentDetails()
        }
    },[params])

  return (
    <div class="container w-50 m-auto mt-5">
    <div class="card" >
    <div class="card-body">
      <h5 class="card-title">Name:{studentDetails.firstName} {studentDetails.lastName}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Email:{studentDetails.email}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Mobile No:{studentDetails.mobile}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Location:{studentDetails.location}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Skills:{studentDetails?.skills?.join(',')}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/studentapi" class="card-link">Student Details Page</a>
     
    </div>
  </div>
  </div>
  )
}

export default StudentDetails
