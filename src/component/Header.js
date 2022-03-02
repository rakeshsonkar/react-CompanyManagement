import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <header className="topbar" data-navbarbg="skin5">
  <nav className="navbar top-navbar navbar-expand-md navbar-dark">
    <div className="navbar-header" data-logobg="skin6">
      <Link className="navbar-brand" to="/dashboard">
       
        <b className="logo-icon">
         
          <img src={process.env.PUBLIC_URL +"/admin/images/fasttrack.png"} alt="homepage" />
        </b>
        
        {/* <span className="logo-text">
        
          <img src={process.env.PUBLIC_URL +"admin/plugins/images/logo-text.png"} alt="homepage" />
        </span> */}
      </Link>
    
      <Link to="/" className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" ><i className="ti-menu ti-close" /></Link>
    </div>
   
    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
     
      <ul className="navbar-nav ms-auto d-flex align-items-center">
      
        <li className=" in">
          <form role="search" className="app-search d-none d-md-block me-3">
            <input type="text" placeholder="Search..." className="form-control mt-0" />
            <Link to="/" className="active">
              <i className="fa fa-search" />
            </Link>
          </form>
        </li>
      
        <li>
          <Link className="profile-pic" to="/dashboard">
            <img src={process.env.PUBLIC_URL +"/admin/plugins/images/users/varun.jpg"} alt="user-img" width={36} className="img-circle" /><span className="text-white font-medium">Steave</span></Link>
        </li>
      </ul>
    </div>
  </nav>
</header>

    </div>
  )
}

export default Header
