import React,{useState} from 'react'
import "./login.css";
import axios from 'axios';
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setError] = useState('');
    let navigate = useNavigate();

  const submitForm = () => {
    if (username === "" || password === "") {
      setError("Fields are required");
      return;
    }
    axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/login", {
        email: username,
        password: password,       
      }).then((response) => {
        //console.log(response.data)
        if(response.data.success === "true"){
            setError("");
            localStorage.setItem("isLoggedIn", true);
             localStorage.setItem("token",JSON.stringify(response.data.accessToken));
             localStorage.setItem("user", JSON.stringify(response.data.user_id));
             navigate("/dashboard");
              window.location.reload();
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
              });
              
                
            
        }else{
            //errMsg: response.data.message
            console.log(response.data)
            setError( response.data.message);
            
        }

      }).catch(error => {

        console.log("ERROR:: ",error.response.data.message);
    });
  };

  return (
    <div>
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
  <div className="login-main-box-area">    
    <div className="login-main-area">
      <img src={process.env.PUBLIC_URL +"/admin/images/fasttrack.png"} alt="logo" />  
    </div> 
    <form className="login-form-input-area" onSubmit={(e)=>e.preventDefault()}>   
      <div className="row"> 
        <div className="col-lg-12">
        <p className="text-danger">{errMsg}</p>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control field"  value={username}  onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter username" autoFocus required id="name" />
          </div> 
        </div> 
        <div className="col-lg-12">
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control field"  value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" autoFocus required id="name" />
          </div> 
        </div>
        <div className="col-lg-6">
          <div className="form-check">
            {/* <input className="form-check-input" type="checkbox" defaultValue id="auth-remember-check" />
            <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label> */}
          </div>   
        </div>
        <div className="col-lg-6">
          <div className="forgot-password-main-area">
            <Link to="#">Forgot password?</Link>  
          </div>   
        </div>
        <div className="col-lg-12">
          <div className="contact-form-submint-btn-area">
            <button onClick={submitForm} className="login-form-submint-btn">Login</button>  
          </div> 
        </div>
      </div> 
    </form>  
  </div>
 
</div>

    </div>
  )
}

export default Login
