import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Form, Row, Col, Button } from "react-bootstrap"
import Swal from "sweetalert2";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'
import "./addedit.css";
import Default from "../Default.png"
const AddEdit = () => {
    let { id } = useParams();

    const isAddMode = !{ id }.id;

    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [geoTimezone, setgeoTimezone] = useState([]);
    const [geocountry, setgeocountry] = useState([]);
    const [Tlanguage, setTlanguage] = useState([]);
    const [singleCompaniesList, setsingleCompaniesList] = useState([]);

    const [CompIamge, setCompanyIamge] = useState(null)
    const [CompanyBanner, setCompanyBanner] = useState(null)
    const [timeZone,setTimeZone] = useState('');
    const [ COU_ID,setCOU_ID]=useState('');
    const [lang,setlang]=useState('');
    console.log(timeZone+"   jai sri");
    useEffect(() => {
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/geoTimezone", {}).then((response) => {
            //console.log(response.data)

            if (response.data.success === "true") {
                setgeoTimezone(response.data.res);
            }
        })
        setTimeZone(singleCompaniesList.TMZ_ID);
    }, []);
    useEffect(() => {
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/geocountry", {}).then((response) => {
            //console.log(response.data)

            if (response.data.success === "true") {
                setgeocountry(response.data.res);
            }
        })
    }, []);

    useEffect(() => {
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/Tlanguage", {}).then((response) => {
            //console.log(response.data)
            if (response.data.success === "true") {
                setTlanguage(response.data.res);
            }
        })
    }, []);
    const addSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        if(event.target.ACC_ID==null){
            var bodyFormData = new FormData(event.target);
        await axios({
            method: "post",
            url: "https://itdevelopmentservices.com/fasttrackadminapi/api/addCompany",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
            //console.log(response.data)
            if (response.data.success === "true") {
                navigate("/companies");

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
            await axios({
                method: "post",
                url: "https://itdevelopmentservices.com/fasttrackadminapi/api/UpdateCompaniesList",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            }).then((response) => {
                //console.log(response.data)
                if (response.data.success === "true") {
                    navigate("/companies");
    
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
                  console.log(error.response.data);
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
    
            //alert(' hdjahfh '+ event.target.ACC_ID);
        }

        





    };
    const changeHandlerImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setCompanyIamge(URL.createObjectURL(e.target.files[0]));
        }
        // setIsCompanyIamge(true);
    };

    const changeHandlerBanner = (e) => {
        if (e.target.files && e.target.files[0]) {
            setCompanyBanner(URL.createObjectURL(e.target.files[0]));
        }

        // setIsCompanyBanner(true);
    };

    const selectedTimeZone = (e) =>
    {
        setTimeZone(e.target.value);
    }
    const selectedCOU_ID=(e)=>{
        setCOU_ID(e.target.value);
    }
    const setlanguag=(e)=>{
        setlang(e.target.value);
    }
    useEffect(() => {
        axios.post("https://itdevelopmentservices.com/fasttrackadminapi/api/singleCompaniesList", { Uid: { id }.id }).then((response) => {
            //console.log(response.data)

            if (response.data.success === "true") {
                setsingleCompaniesList(response.data.res);
                setTimeZone(response.data.res.TMZ_ID);
                setCOU_ID(response.data.res.COU_ID);
                setlang(response.data.res.LAN_ID);

            }
        })

        //const [timeZone,setTimeZone] = useState(singleCompaniesList.TMZ_ID);
       setTimeZone(singleCompaniesList.TMZ_ID);
    }, []);
    //setTimeZone(singleCompaniesList.TMZ_ID);
    return (
        
        <div>
            <div className="page-wrapper" style={{ minHeight: 250 }}>
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">{isAddMode ? 'Add ' : 'Edit '} Companies </h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><Link to="/" className="fw-normal">{isAddMode ? 'Add ' : 'Edit '} Companies</Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid">

                    <div className="manage-admins-main-area">
                        <div className="manage-admins-table-area">

                            <Form noValidate validated={validated} onSubmit={addSubmit} >
                                <Row className="m-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text" name="CompanyName" placeholder="Company Name" defaultValue={{ id }.id ? singleCompaniesList.COM_NAME : ""} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a  Company Name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Company URL</Form.Label>
                                        <Form.Control type="text" placeholder="Company URL" name="comUrl" defaultValue={{ id }.id ? singleCompaniesList.COM_URL : ""} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a  Company URL.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="m-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Company Image</Form.Label>
                                        <Form.Control type="file" placeholder="Company Image" name="comImage" onChange={changeHandlerImage} />
                                        <img src={{ id }.id ? singleCompaniesList.COM_IMG : !CompIamge ? Default : CompIamge} alt="preview image" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Banner</Form.Label>
                                        <Form.Control type="file" placeholder="Banner" name="comBanner" onChange={changeHandlerBanner} />
                                        <img src={{ id }.id ? singleCompaniesList.COM_BANNER : !CompanyBanner ? Default : CompanyBanner} alt="preview image" />
                                    </Form.Group>

                                </Row>
                                <Row className="m-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="Contact Number" name="contactNumber" defaultValue={{ id }.id ? singleCompaniesList.COM_PHONE : ""} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Contact Number.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Time Zone</Form.Label>
                                        <Form.Select  value={timeZone} onChange={selectedTimeZone}  required name="timeZone" >
                                            <option value="">Choose...</option>
                                            {
                                                geoTimezone.map((val) => {
                                                    return (
                                                        <option value={val.TMZ_ID}>{val.TMZ_DES}</option>
                                                    )
                                                })

                                            }
                                            <Form.Control.Feedback type="invalid">
                                                Please select Time Zone.
                                            </Form.Control.Feedback>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="m-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Sate</Form.Label>
                                        <Form.Control type="text" placeholder="Enter State" name="State" defaultValue={{ id }.id ? singleCompaniesList.ACC_STATE :""} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a State.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>country</Form.Label>
                                        <Form.Select value={COU_ID} onChange={selectedCOU_ID}  name="country">
                                            <option value="">Choose...</option>
                                            {
                                                geocountry.map((val) => {
                                                    return (
                                                        <option value={val.COU_ISO_ALPHA}>{val.COU_ISO_ALPHA}</option>
                                                    )
                                                })

                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="m-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Language</Form.Label>
                                        <Form.Select value={lang} onChange={setlanguag}  name="language">
                                        <option value="">Choose...</option>
                                            {
                                                Tlanguage.map((val) => {
                                                        return <option value={val.L_ID}>{val.L_FULL_NAME}</option>;
                                                })
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridMainmail">
                                        <Form.Label>Main mail</Form.Label>
                                        <Form.Control type="text" placeholder="Main mail" name="mainMail" defaultValue={{ id }.id ? singleCompaniesList.COM_EMAIL : ""} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a  Main mail.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Row className="m-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Style</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Style" name="style" defaultValue={{ id }.id ? singleCompaniesList.COM_STYLE : ""} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a State.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Customer type</Form.Label>
                                        <Form.Select defaultValue="C" name="comType">
                                            <option value={"C"}>C</option>
                                            <option value={"P"}>P</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                {

                                    { id }.id ? <input type="hidden" name='ACC_ID'  defaultValue={singleCompaniesList.ACC_ID}/>:" "
                                }
                                
                                <div className="add-compnay-submit-btn">
                                <Button className="m-3" variant="outline-danger" defaultValue={{ id }.id ? "update" : "save"} type="submit">
                                    {{ id }.id ? "update" : "Submit"}
                                </Button>
                                </div>
                            </Form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEdit
