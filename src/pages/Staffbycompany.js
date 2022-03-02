import React, { useEffect, useState } from 'react'
import axios from "axios";
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Staffbycompany = () => {
  const Uid = JSON.parse(localStorage.getItem("Uid"));
  const [show, setShow] = useState(false);
  const [modeldata, setmodeldata] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (modeldata) => {
    setmodeldata(modeldata);
    setShow(true);
  }

  const [staff, setStaff] = useState([]);
  useEffect(() => {
    axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/staffByCompany", { Uid: Uid }).then((response) => {
      //console.log(response.data)

      if (response.data.success === "true") {
        setStaff(response.data.res);
      } else {
        setStaff(response.data.message);
      }
    });
  }, []);
  
const deleterecord=(ID)=>{
  axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/deleteStaff", {ID:ID}).then((response) => {
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
useEffect(() => {
  setTimeout(() => {
    $("#example2").DataTable();
  }, 1000)
}, [])
  return (
    <div>
      <div className="page-wrapper" style={{ minHeight: 250 }}>

        <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Staff By Company</h4>
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              <div className="d-md-flex">
                <ol className="breadcrumb ms-auto">
                  <li><Link  to="/Staffbycompany" className="fw-normal">Staff By Company</Link></li>
                </ol>
              </div>
            </div>
          </div>

        </div>

        <div className="container-fluid">

          <div className="manage-admins-main-area">
            <div className="manage-admins-table-area">
              <div className="circle-position-main-area">
                <Link type="button" to="/StaffADDEDIT" className="btn btn-info rounded-circle ml-auto"><i className="fa fa-plus" aria-hidden="true"></i></Link>
              </div>
              
              <table className="table" id="example2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Last login</th>
                    <th>Roles</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    staff.map((resdata, key) => {
                      return (
                        <tr>
                          <td key="{resdata.ACC_ID.toString()}"  >{++key} </td>
                          <td>{resdata.CUSR_FNAME}</td>
                          <td>{resdata.CUSR_LNAME}</td>
                          <td>{resdata.CUSR_EMAIL}</td>
                          <td>{resdata.Password}</td>
                          <td>
                            <Button variant="secondary" onClick={() => handleShow(resdata.Alllogin)} >
                              LoginView
                            </Button></td>
                          {/* <td> {resdata.Alllogin} </td> */}
                          <td>{resdata.role}</td>
                          <td>
                            <td>
                              <Link to={`/StaffEDIT/${resdata.STAFF_ID}`}><i className="fas fa-edit"></i></Link>
                              <button className="dlt-btn" variant="danger" ><i className="fa fa-trash danger" onClick={(e) => { if (window.confirm('Delete the this company Name ?')) { deleterecord(resdata.STAFF_ID) } }}></i></button>
                            </td>
                          </td>
                        </tr>
                      )

                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Last Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>DATE</th>
                <th>TYPE</th>
                <th>Id</th>
                <th>Ip Address</th>
                <th>Ip User Agent</th>
              </tr>
            </thead>
            <tbody>
              {
                modeldata.map((Alllogin, key) => {
                  return (
                    <tr>
                      <td key="{Alllogin.ACC_ID.toString()}" >{++key} </td>
                      <td>{Alllogin.DATE}</td>
                      <td>{Alllogin.TYPE}</td>
                      <td>{Alllogin.id}</td>
                      <td>{Alllogin.ip_address}</td>
                      <td>{Alllogin.ip_user_agent}</td>
                    </tr>
                  )

                })
              }
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Staffbycompany
