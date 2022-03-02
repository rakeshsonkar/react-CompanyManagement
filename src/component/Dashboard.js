import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Dashboard</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><Link to="/dashboard" className="fw-normal">Dashboard</Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
              
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="white-box analytics-info">
                                <h3 className="box-title">Total Visit</h3>
                                <ul className="list-inline two-part d-flex align-items-center mb-0">
                                    <li>
                                        
                                    </li>
                                    <li className="ms-auto"><span className="counter text-success">659</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="white-box analytics-info">
                                <h3 className="box-title">Total Page Views</h3>
                                <ul className="list-inline two-part d-flex align-items-center mb-0">
                                    <li>
                                       
                                    </li>
                                    <li className="ms-auto"><span className="counter text-purple">869</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="white-box analytics-info">
                                <h3 className="box-title">Unique Visitor</h3>
                                <ul className="list-inline two-part d-flex align-items-center mb-0">
                                    <li>
                                        
                                    </li>
                                    <li className="ms-auto"><span className="counter text-info">911</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard
