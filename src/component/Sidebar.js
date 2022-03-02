import React from 'react'
import {
  Link
} from "react-router-dom";
const Sidebar = () => {
 
  return (
    <div>
      <aside className="left-sidebar" data-sidebarbg="skin6">
  {/* Sidebar scroll*/}
  <div className="scroll-sidebar">
    {/* Sidebar navigation*/}
    <nav className="sidebar-nav">
      <ul id="sidebarnav">
        {/* User Profile*/}
        <li className="sidebar-item pt-2">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/dashboard" aria-expanded="false">
            <i className="far fa-clock" aria-hidden="true" />
            <span className="hide-menu">Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/companies" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true" />
            <span className="hide-menu">Companies</span>
          </Link>
        </li>
        {/* <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/myorder" aria-expanded="false">
            <i className="fa fa-table" aria-hidden="true" />
            <span className="hide-menu">MyOrder</span>
          </Link>
        </li> */}
        <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/studentdetail" aria-expanded="false">
            <i className="fa fa-font" aria-hidden="true" />
            <span className="hide-menu">Student Details</span>
          </Link>
        </li>
        {/* <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/Staffbycompany" aria-expanded="false">
            <i className="fa fa-font" aria-hidden="true" />
            <span className="hide-menu">Staff By Company</span>
          </Link>
        </li> */}
        <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/logout"  aria-expanded="false">
            <i className="fa fa-font" aria-hidden="true" />
            <span className="hide-menu">Logout</span>
          </Link>
        </li>
        {/* <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/map-google" aria-expanded="false">
            <i className="fa fa-globe" aria-hidden="true" />
            <span className="hide-menu">Google Map</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/blank" aria-expanded="false">
            <i className="fa fa-columns" aria-hidden="true" />
            <span className="hide-menu">Blank Page</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="404" aria-expanded="false">
            <i className="fa fa-info-circle" aria-hidden="true" />
            <span className="hide-menu">Error 404</span>
          </Link>
        </li> */}
      </ul>
    </nav>
    {/* End Sidebar navigation */}
  </div>
  {/* End Sidebar scroll*/}
</aside>

    </div>
  )
}

export default Sidebar
