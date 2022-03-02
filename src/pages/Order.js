import React, { useEffect, useState } from 'react'
import "./Order.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Swal from "sweetalert2";
const Order = () => {
    const [Orders, setOrder] = useState([]);
    const [plancount, setplancount] = useState(0);
    const Uid = JSON.parse(localStorage.getItem("Uid"));

    useEffect(() => {
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/customersPlans", { Uid: Uid }).then((response) => {
            //console.log(response.data)

            if (response.data.success === "true") {
                setOrder(response.data.res);
                setplancount(response.data.plan);
            }
        });
    }, []);
    useEffect(() => {
        setTimeout(() => {
            $("#example2").DataTable();
        }, 1000)
    }, [])
    const deleterecord = (ID) => {
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/deletecustomerPlan", {ID:ID}).then((response) => {
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
    return (
        <div>
            <div className="page-wrapper" style={{ minHeight: 250 }}>

                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">MyOrder</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><Link to="/" className="fw-normal">MyOrder</Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <div className="container-fluid">
                    <div className="my-order-table-area">
                     <div className="row"> 
                      <div className="col-lg-3">   
                        <div className="circle-position-main-area">
                            <Link type="button" to="/AddEditCredit" className="btn btn-info rounded-circle ml-auto"><i className="fa fa-plus" aria-hidden="true"></i> </Link>
                            <p>Add Purchase plan</p>
                        </div>
                        </div>
                        <div className="col-lg-3"> 
                        <div className="circle-position-main-area">
                            {plancount === 0 ? <><Link type="button" to="/AddPlancustomser" className="btn btn-info rounded-circle ml-auto"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                <p>Add customer plan</p></> : <><Link type="button" to={`/AddPlancustomser/${Uid}`} className="btn btn-info rounded-circle ml-auto"><i className="fas fa-edit" aria-hidden="true"></i></Link>
                                <p>Edit customer plan</p></>
                            }

                        </div>
                        </div>
                        <div className="col-lg-6">
                        </div>  
                        </div>  
                        <table className="table table-responsive" id="example2" style={{ width: "100%", display: "block" }} >
                            <thead>
                                <tr>
                                    <th rowSpan={2}>Purchase <br />Date</th>
                                    <th colSpan={3}>Constancies</th>
                                    <th colSpan={3}>Diplomas</th>
                                    <th colSpan={3}>Badges</th>
                                    <th colspan={3}>Contracts</th>
                                    <th rowspan="2">Date Begin</th>
                                    <th rowspan="2">Date End</th>
                                    <th rowspan="2">Status</th>
                                    <th rowspan="2">Comments</th>
                                    <th rowspan="2">Action</th>
                                </tr>
                                <tr className="row-divde-colum">
                                    <th>Adquiridos</th>
                                    <th>Consumidos</th>
                                    <th>Disponibles</th>
                                    <th>Adquiridos</th>
                                    <th>Consumidos</th>
                                    <th>Disponibles</th>
                                    <th>Adquiridos</th>
                                    <th>Consumidos</th>
                                    <th>Disponibles</th>
                                    <th>Adquiridos</th>
                                    <th>Consumidos</th>
                                    <th>Disponibles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Orders.map((resdata) => {
                                        return (
                                            <tr>
                                                <td key="{resdata.ACC_ID.toString()}" >{resdata.Purchase_Date}</td>
                                                <td>{resdata.A_Adquiridos}</td>
                                                <td>{resdata.A_Consumidos}</td>
                                                <td>{resdata.A_Disponibles}</td>
                                                <td>{resdata.B_Adquiridos}</td>
                                                <td>{resdata.B_Consumidos}</td>
                                                <td>{resdata.B_Disponibles}</td>
                                                <td>{resdata.C_Adquiridos}</td>
                                                <td>{resdata.C_Consumidos}</td>
                                                <td>{resdata.C_Disponibles}</td>
                                                <td>{resdata.D_Adquiridos}</td>
                                                <td>{resdata.D_Consumidos}</td>
                                                <td>{resdata.D_Disponibles}</td>
                                                <td>{resdata.DATE_BEGIN}</td>
                                                <td>{resdata.DATE_END}</td>
                                                <td>{(resdata.STATUS === "A") ? "Active" : "InActive"}</td>
                                                <td>{resdata.COMMENTS}</td>

                                                <td>
                                                    <Link to={`/EditCredit/${resdata.ID_PLAN_PURCHASE}`}><i className="fas fa-edit"></i></Link>
                                                    <button className="dlt-btn" variant="danger" ><i className="fa fa-trash danger" onClick={(e) => { if (window.confirm('Delete the this company Name ?')) { deleterecord(resdata.ID_PLAN_PURCHASE) } }}></i></button>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                                {/* <tr>
                                <td>10-2-2022 <br />12:25</td>
                                <td>10</td>
                                <td>20</td>
                                <td>25</td>
                                <td>40</td>
                                <td>20</td>
                                <td>50</td>
                                <td>60</td>
                                <td>70</td>
                                <td>80</td>
                            </tr> */}
                                <tr className="total-hightlite-main-box">
                                    <td>Total</td>
                                    <td style={{ borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none', borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none' }}>6000</td>
                                    <td style={{ borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none', borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none' }}>16357</td>
                                    <td style={{ borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none', borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none' }}>82596</td>
                                    <td style={{ borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none', borderRight: 'none' }} />
                                    <td style={{ borderLeft: 'none' }}>82596</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
