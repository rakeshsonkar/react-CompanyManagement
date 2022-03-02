import React,{useState,useEffect} from "react";
import './App.css';
import Footer from "./component/Footer";
import Header from './component/Header';
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import Staffbycompany from "./pages/Staffbycompany";
import {
  Routes,
  Route
} from "react-router-dom";
import Companies from "./pages/Companies";
import Order from "./pages/Order";
import Studentdetail from "./pages/Studentdetail";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AddEdit from "./pages/AddEdit";
import StaffADDEDIT from "./pages/StaffADDEDIT";
import PackagePlanCustomer from "./pages/PackagePlanCustomer";
import PlanPurchase from "./pages/PlanPurchase";
function App() {
  const [token, setToken] = useState();
  useEffect(()=> {
    //logic for getting a local storage value
    const data = JSON.parse(localStorage.getItem("token"))
    setToken(data)
  },[])
  if(!token) {
    return <Login />
  }


  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/fasttrackadmin" element={<Dashboard />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/myorder" element={<Order />}></Route>
        <Route path="/studentdetail" element={<Studentdetail/>}></Route>
        <Route path="/Staffbycompany" element={<Staffbycompany />}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/AddEdit" element={<AddEdit />}></Route>
        <Route path="/Edit/:id" element={<AddEdit />}></Route>
        <Route path="/AddEditCredit" element={<PlanPurchase />}></Route>
        <Route path="/EditCredit/:id" element={<PlanPurchase />}></Route>
        <Route path="/StaffADDEDIT" element={<StaffADDEDIT />}></Route>
        <Route path="/StaffEDIT/:id" element={<StaffADDEDIT />}></Route>
        <Route path="/planpurchase" element={<PlanPurchase />}></Route>
        <Route path="/AddPlancustomser" element={<PackagePlanCustomer />}></Route>
        <Route path="/AddPlancustomser/:id" element={<PackagePlanCustomer />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
