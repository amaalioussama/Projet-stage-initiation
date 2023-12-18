import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");

    const handleSubmit = (e) => {
      if (userType == "Admin" && secretKey != "AdarshT") {
        e.preventDefault();
        alert("Invalid Admin");
      } else {
        e.preventDefault();

        console.log(fname, lname, email, password);
        fetch("http://localhost:5000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            email,
            lname,
            password,
            userType,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              alert("Registration Successful");
            } else {
              alert("Something went wrong");
            }
          });
      }
    };
  return (
    <MDBContainer fluid>
 <form onSubmit={handleSubmit}>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 classNAme="text-center w-100">Sign up</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'
                 onChange={(e) => setFname(e.target.value)}/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your last Name' id='form1' type='text' className='w-100'
                  onChange={(e) => setLname(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email'
                       onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>


              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
              <p className="forgot-password text-right">
            Already registered <a href="/login-component">log in?</a>
          </p>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://st2.depositphotos.com/8065014/12038/v/600/depositphotos_120380202-stock-illustration-tv-box-iptv-icon.jpg' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
</form>
    </MDBContainer>
  );
}

export default App;