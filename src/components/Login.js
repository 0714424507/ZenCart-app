import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false); // Define login success state
    const [loggedInUsername, setLoggedInUsername] = useState(""); // Define logged-in username state
  
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        // Make API request to the backend for user login
        const response = await fetch("/login/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        if (response.ok) {
            // Handle successful login response
            setEmail("");
            setPassword("");
            const data = await response.json();
            setLoggedInUsername(data.username); // Set the logged-in username
            setLoginSuccess(true); // Set login success state to true
            // Redirect to another page, e.g., dashboard
            navigate("/Products");
            console.log(response);
          } else {
            console.log("Login failed");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
  
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p> */}

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
        {loginSuccess && (
          <div className="popup">
            <p className="popup-message">Logged in successfully as {loggedInUsername}</p>
          </div>
        )}
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;
