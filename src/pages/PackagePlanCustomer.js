import React,{useState,useEffect} from 'react'
import "./PackagePlanCustomer.css"
import { Form,  Row, Col, Button } from "react-bootstrap"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams,useNavigate,Link} from "react-router-dom"
const PackagePlanCustomer = () => {
    const [validated, setValidated] = useState(false);
    let { id } = useParams();
    const isAddMode = !{ id }.id;
    let navigate = useNavigate();
   

    const [SingleCustomerPlan,setSingleCustomerPlan]=useState([]);
    const [radioplan ,setradioplan]=useState(" ");


    const addPlanSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);


        if (event.target.ACC_ID != null) {
        var bodyFormData = new FormData(event.target);
        await axios({
            method: "post",
            url: "https://itdevelopmentservices.com/fasttrackadminapi/api/customerPlan",
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
            if (response.data.success === "false") {
                Swal.fire({
                    toast: true,
                    icon: 'error',
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
        bodyFormData.append("ondemand",radioplan);

        await axios({
            method: "post",
            url: "https://itdevelopmentservices.com/fasttrackadminapi/api/updatecustomerPlan",
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
                    timer: 2000,
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
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/singlecustomerPlan", {ID:{ id }}).then((response) => {
        

            if (response.data.success === "true") {
              // console.log(response.data.res)
               setSingleCustomerPlan(response.data.res);
               setradioplan(response.data.res.ON_DEMAND);
            }
        });
    },[]);
    const Ondemond =(e)=>{
        setradioplan(e.target.value);
    }
    return (
        <div>
            <div className="page-wrapper" style={{ minHeight: 250 }}>
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">{isAddMode ? 'Add ' : 'Edit '} Plan Customer </h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><Link to="/" className="fw-normal">{isAddMode ? 'Add ' : 'Edit '} Plan Customer </Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid">
                    <div className="customer-type-main-area">
                        <div className="container">
                            <Form  noValidate validated={validated}  onSubmit={addPlanSubmit}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="customer-type-heading-area">
                                        <h1>Customer Type</h1>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="customer-type-option-area">
                                        <div className="form-group">
                                            
                                            <label htmlFor="html"><input type="radio"   name="ondemand" onChange={Ondemond}   value={1} checked={radioplan===1}   />On Demand{radioplan}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="customer-type-option-area">
                                        <div className="form-group">
                                            <label htmlFor="css"><input type="radio" onChange={Ondemond}  value={0} checked={radioplan===0} />Packages {radioplan}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                 <div className="last-credits-main-area">
                                 <div className="form-group">
                                   <label htmlFor="css">Last credits consumption</label>  
                                   <input className="form-control" type="text"  placeholder="Enter"defaultValue={{ id }.id ?SingleCustomerPlan.LAST_CONSUMPTION:""} readOnly/>        
                                  </div>
                                 </div>
                                </div>
                                <div className="col-lg-6">
                                 <div className="last-credits-main-area">
                                 <div className="form-group">
                                   <label htmlFor="css">Last credits</label>  
                                   <input className="form-control" type="text"  placeholder="Enter" defaultValue={{ id }.id ?SingleCustomerPlan.LAST_CREDITS:""} readOnly/>        
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
                                        <h2>Spent</h2>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_A_SPENT" defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_A_SPENT:""}  placeholder="Enter" autoFocus required  />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Spent.
                                                </Form.Control.Feedback>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_B_SPENT" placeholder="Enter" defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_B_SPENT:""} autoFocus required  />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Spent.
                                                </Form.Control.Feedback>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_C_SPENT" placeholder="Enter"  defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_C_SPENT:""}autoFocus required />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Spent.
                                                </Form.Control.Feedback>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_D_SPENT" placeholder="Enter" autoFocus required  defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_D_SPENT:""}  />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Spent.
                                                </Form.Control.Feedback>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="spent-total-area">
                                        <h2>Total</h2>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_A_TOTAL" placeholder="Enter" defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_A_TOTAL:""} autoFocus required   />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Total.
                                                </Form.Control.Feedback>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_B_TOTAL" placeholder="Enter" autoFocus required  defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_B_TOTAL:""} />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Total.
                                                </Form.Control.Feedback>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_C_TOTAL" placeholder="Enter" autoFocus required  defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_C_TOTAL:""} />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Total.
                                                </Form.Control.Feedback>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="TYPE_D_TOTAL" placeholder="Enter" autoFocus required defaultValue={{ id }.id ?SingleCustomerPlan.TYPE_D_TOTAL:""}  />
                                            <Form.Control.Feedback type="invalid">
                                                    Please provide a  Total.
                                                </Form.Control.Feedback>
                                        </div>
                                    </div>
                                </div>
                                {
                                     { id }.id ? <input type="hidden" name='ID_PLAN_CUSTOMER'defaultValue={{ id }.id ?SingleCustomerPlan.ID_PLAN_CUSTOMER:""}  /> :<input type="hidden" name='ACC_ID' defaultValue={JSON.parse(localStorage.getItem("Uid"))} />
                                }
                                <div className="col-lg-12">
                                    <div className="customer-type-sbt-btn">
                                        <Button className="customer-sbt-btn" defaultValue={{ id }.id ? "update" : "save"} type="submit">{{ id }.id ? "update" : "Submit"}</Button>
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

export default PackagePlanCustomer
