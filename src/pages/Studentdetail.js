import React from 'react'
import { Link } from 'react-router-dom'

const Studentdetail = () => {
  return (
    <div>
       <div className="page-wrapper" style={{minHeight: 250}}>
  <div className="page-breadcrumb bg-white">
    <div className="row align-items-center">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Student Details</h4>
      </div>
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <div className="d-md-flex">
          <ol className="breadcrumb ms-auto">
            <li><Link to="/" className="fw-normal">Student Details</Link></li>
          </ol>
         
        </div>
      </div>
    </div>
    {/* /.col-lg-12 */}
  </div>
  
  <div className="container-fluid">
   
    <div className="manage-admins-main-area">
      <div className="manage-admins-table-area">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>ID</th>
              <th>Code Root</th>
              <th>Records</th>
              <th>Institutions</th>
              <th>Phones</th>
              <th>Groups and branches</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Javeriana</td>
              <td>Smith</td>
              <td>#123456</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Birla Institutions</td> 
              <td>9874563214</td>
              <td>Details</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Javeriana</td>
              <td>Smith</td>
              <td>#123456</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Birla Institutions</td> 
              <td>9874563214</td>
              <td>Details</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Javeriana</td>
              <td>Smith</td>
              <td>#123456</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Birla Institutions</td> 
              <td>9874563214</td>
              <td>Details</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Javeriana</td>
              <td>Smith</td>
              <td>#123456</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Birla Institutions</td> 
              <td>9874563214</td>
              <td>Details</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Javeriana</td>
              <td>Smith</td>
              <td>#123456</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Birla Institutions</td> 
              <td>9874563214</td>
              <td>Details</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Javeriana</td>
              <td>Smith</td>
              <td>#123456</td>
              <td>10</td>
              <td>On Demand</td>
              <td>Birla Institutions</td> 
              <td>9874563214</td>
              <td>Details</td>
            </tr>
          </tbody>
        </table>   
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Studentdetail
