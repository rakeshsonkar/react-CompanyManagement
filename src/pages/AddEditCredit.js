import React from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate ,Link,useParams} from "react-router-dom";
import axios from 'axios'
import "./addedit.css";
import Default from "../Default.png"
const AddEditCredit = () => {
    let { id } = useParams();
    const isAddMode = !{ id }.id;
    return (
        <div>
            <div className="page-wrapper" style={{ minHeight: 250 }}>
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">{isAddMode ? 'Add ' : 'Edit '} Credit details </h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><Link  to="/myorder" className="fw-normal">{isAddMode ? 'Add ' : 'Edit '}  Credit details</Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid">

                    <div className="manage-admins-main-area">
                        <div className="manage-admins-table-area">
                            <Form>
                               
                               <h3>Customer Type </h3> 
                                <label className="container">On Demand  
                                    <input type="radio" defaultChecked="checked" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="container">Packages 
                                    <input type="radio" defaultChecked="checked" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEditCredit
