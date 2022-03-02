import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import $ from 'jquery'; 
import Swal from "sweetalert2";
import "./com.css";
const Companies = () => {
  
  const [Company ,setCompanies]=useState([]);
  let navigate = useNavigate();
  useEffect(()=>{
    axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/companiesList", {}).then((response) => {
     //console.log(response.data)
      
      if(response.data.success === "true"){
        setCompanies(response.data.res);
      }
    })
  },[]);
  useEffect(() => {
    setTimeout(()=>{
      $("#example2").DataTable();
    },1000)
},[])
function handleChange(value,th) {
  localStorage.setItem("Uid", JSON.stringify(value));
  if(th==="0"){
    navigate("/myorder");
  }else if(th==="1"){
    navigate("/Staffbycompany");
  }else if(th==="2"){
    navigate("/studentdetail");
  }else{
    navigate("/studentdetail");
  }
 
  value = "";
}
function deleterecord(ID){
  
    axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/deleteCompany", {ID:ID}).then((response) => {
      if(response.data.success === "true"){
        Swal.fire({
          toast: true,
          icon: 'success',
          title: response.data.message,
          animation: false,
          position: 'top',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })
      window.location.reload();
      }
    })
  

}
 
 // console.log(Company);
  return (
    <div>
    <div className="page-wrapper" style={{minHeight: 250}}>
  <div className="page-breadcrumb bg-white">
    <div className="row align-items-center">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Companies List</h4>
      </div>
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <div className="d-md-flex">
          <ol className="breadcrumb ms-auto">
            <li><Link to="/companies" className="fw-normal">Companies List</Link></li>
          </ol>
        </div>
      </div>
    </div>
    
  </div>
 
  <div className="container-fluid">
   
    <div className="manage-admins-main-area">
      <div className="manage-admins-table-area">
       <div className="circle-position-main-area">
      <Link type="button" to="/AddEdit" className="btn btn-info rounded-circle ml-auto"><i className="fa fa-plus" aria-hidden="true"></i></Link>
       </div> 
        <table className="table" id="example2">
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Status</th>
              <th>Staff</th>
              <th>People</th>
              <th>Plan</th>
              <th>Credits Available</th>
              <th>Credits Consumed</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
        Company.map((resdata,key)=>{
          return(
            <tr>
             <td key="{resdata.ACC_ID.toString()}" >{++key} </td> 
            <td>{resdata.COM_NAME}</td>
             <td>{(resdata.ACC_STATE==="A")?"Active":"InActive"}</td>
            <td>{resdata.staff}</td>
            <td>{resdata.people}</td>
            <td>
              {(resdata.on_demand===1)?"On Demand":"Prepaid"}
              </td>
            <td>{resdata.credits_Available}</td> 
            <td>{resdata.credits_consumed}</td> 
            <td>
              <select onChange={event => handleChange(resdata.ACC_ID,event.target.value)} className="list-companies-select-box">
              <option selected  disabled>Please select</option>
                  <option value={0}>Credit details</option>
                  {/* <option value="{resdata.ACC_ID}">Company items</option> */}
                  <option value={1}>Staff</option>
                  <option value={2}>Templates</option>
                  <option value={3}>Branches</option>
                </select>
                </td>
                <td>
                <Link to={`/Edit/${resdata.ACC_ID}`}><i className="fas fa-edit"></i></Link>
               
              <button className="dlt-btn" variant="danger" ><i className="fa fa-trash danger" onClick={(e)=> {if(window.confirm('Delete the this company Name ?')){deleterecord(resdata.ACC_ID)}}}></i></button>
               
                </td>
          </tr>
          )

        })
      }
            {/* <tr>
              <td>2 </td>
              <td>Javeriana</td>
              <td>Active</td>
              <td>John David</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Yes</td> 
              <td>100</td>
              <td>Credit details</td>
            </tr> */}
           
          </tbody>
        </table> 
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Companies
