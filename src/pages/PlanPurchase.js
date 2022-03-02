import React, { useEffect, useState } from 'react'
import "./PackagePlanCustomer.css"
import { useParams,useNavigate, Link} from "react-router-dom"
import { Form, Row, Col, Button } from "react-bootstrap"
import axios from 'axios'
import Swal from 'sweetalert2'




const PlanPurchase = () => {
    const [validated, setValidated] = useState(false);
    let { id } = useParams();
    const isAddMode = !{ id }.id;
    let navigate = useNavigate();
    const [singleCreditsDetail, setSingleCreditsDetail]=useState([]);
    const [curr,setcurr]=useState('');
    const [Start,setStart]=useState('');
    const [End,setEnd]=useState('');



    const addPlanSubmit = async(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);


        
        if (event.target.ACC_ID != null) {
        var bodyFormData = new FormData(event.target);
        await axios({
            method: "post",
            url: "https://itdevelopmentservices.com/fasttrackadminapi/api/addCredits",
            data: bodyFormData,
        }).then((response) => {
            //console.log(response.data)
            if (response.data.success === "true") {
                navigate("/myorder");

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
            }
        }).catch(function (error) {
            if (error.response) {
                //   console.log(error.response.data);
                Swal.fire({
                    toast: true,
                    icon: 'error',
                    title: "Error",
                    text: error.response.data.message,
                    animation: false,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 5000,
                    color: "#ff0000",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
            }
        });
    }else{
        var bodyFormData = new FormData(event.target);
        bodyFormData.append("ACC_ID",JSON.parse(localStorage.getItem("Uid")));

        await axios({
            method: "post",
            url: "https://itdevelopmentservices.com/fasttrackadminapi/api/updateCredits",
            data: bodyFormData,
        }).then((response) => {
            //console.log(response.data)
            if (response.data.success === "true") {
                navigate("/myorder");

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
            }
        }).catch(function (error) {
            if (error.response) {
                //   console.log(error.response.data);
                Swal.fire({
                    toast: true,
                    icon: 'error',
                    title: "Error",
                    text: error.response.data.message,
                    animation: false,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 5000,
                    color: "#ff0000",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
            }
        });
        }
    }
    useEffect(()=>{
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/singleCreditsDetail", {ID:{ id }}).then((response) => {
        

            if (response.data.success === "true") {
              // console.log(response.data.res)
               setSingleCreditsDetail(response.data.res[0]);
               setcurr(response.data.res[0].CURRENCY);
               setStart(response.data.res[0].DATE_BEGIN);
               setEnd(response.data.res[0].DATE_END);
            }
        });
    },[]);
   const changeCurrency =(e)=>{
       setcurr(e.target.value);
   }
   const changeStartval=(e)=>{
       setStart(e.target.value);
   }
   const changeEndval=(e)=>{
       setEnd(e.target.value);
   }
//alert( singleCreditsDetail.ACC_ID);
    return (
        <div>
            <div className="page-wrapper" style={{ minHeight: 250 }}>
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title"> {isAddMode ? 'Add ' : 'Edit '} Credit details </h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><Link to="/AddEditCredit" className="fw-normal">{isAddMode ? 'Add ' : 'Edit '} Credit details </Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid">
                    <div className="customer-type-main-area">
                        <div className="container">
                            <Form noValidate validated={validated} onSubmit={addPlanSubmit} >
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="last-credits-main-area">
                                            <div className="form-group">
                                                <label htmlFor="css">Price</label>
                                                <input className="form-control" type="number"  placeholder="Optional amount" name="price" defaultValue={{ id }.id ?singleCreditsDetail.PRICE:""} required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="last-credits-main-area">
                                            <div className="form-group">
                                                <label htmlFor="css">Currency</label>
                                                <select className="form-control" name="currency" value={curr} onChange={changeCurrency} required>
                                                    <option value="" disabled selected >Select Currency</option>
                                                    <option value="COP">COP</option>
                                                    <option value="USD">USD</option>
                                                    <option value="EUR">EUR</option>
                                                    <option value="MXN">MXN</option>
                                                </select>
                                                <Form.Control.Feedback type="invalid">
                                                    Please select Currency type.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="select-date-heading-area">
                                            <h1>Select Dates</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="select-date-option-area">
                                            <div className="form-group">
                                                <label htmlFor="html">Date Begin </label>
                                                <input className="form-control" type="date"  name="dateBegin" value={Start} onChange={changeStartval}  required/>                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Begin date.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="select-date-option-area">
                                            <div className="form-group">
                                                <label htmlFor="html">Date End</label>
                                                <input className="form-control" type="date"   name="dateend"  value={End} onChange={changeEndval} required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  end date.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="my-order-list-area">
                                            <h2>My Orders</h2>
                                            <h3>Constancies</h3>
                                            <h3>Diplomas</h3>
                                            <h3>Badges</h3>
                                            <h3>Contracts</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="spent-total-area">
                                            <h2>Sale Price</h2>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="saleA" placeholder="Enter" defaultValue={{ id }.id ?singleCreditsDetail.TYPE_A:""} autoFocus required id="#" />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="saleB" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_B:""} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="saleC" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_C:""} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="saleD" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_D:""} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="spent-total-area">
                                            <h2>Number</h2>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="NumberA" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_A_PRICE:""} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="NumberB" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_B_PRICE:""} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="NumberC" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_C_PRICE:""} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="NumberD" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?singleCreditsDetail.TYPE_D_PRICE:""}/>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Price.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="comment-write-main-area">
                                            <div className="form-group">
                                                <label>Comments</label>
                                                <textarea className="form-control" placeholder="Enter Message  " name="comment" defaultValue={{ id }.id ?singleCreditsDetail.COMMENTS:""}  required></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a  Comments.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>
                                    </div>
                                    {

                                 { id }.id ? <input type="hidden" name='ID_PLAN'defaultValue={{ id }.id ?singleCreditsDetail.ID_PLAN_PURCHASE:""}  /> :<input type="hidden" name='ACC_ID' defaultValue={JSON.parse(localStorage.getItem("Uid"))} />
                                          } 
                                      <div className="col-lg-12">
                                        <div className="customer-type-sbt-btn">
                                        <Button className="m-3 customer-sbt-btn" variant="outline-danger" defaultValue={{ id }.id ? "update" : "save"} type="submit">
                                        {{ id }.id ? "update" : "Submit"}
                                    </Button>
                                        </div>
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PlanPurchase
