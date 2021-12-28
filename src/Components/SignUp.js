import React,{useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
function SignUp(props) {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const { username, email, password, confirmpassword } = state;
  const { errusername, erremail, errpassword, errconfirmpassword } = formErrors;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...state, [name]: value };
    setstate(addusers);
    setFormErrors({})
  };
 
  
  const validate = () => {
    let val=true
    const errors={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!username) {
      errors.errusername = "Name is required !";
      val=false
     
    } else if (username.length < 3) {
      errors.errusername = "Length should be greater than 3 !";
      val=false
    }
    else if(!username.match(/^[A-Za-z]+$/) ){
      errors.errusername = "Only alphabets are allowed !";
      val=false
    }
    if (!email) {
      errors.erremail = "Email is required!";
      val=false
    } else if (!regex.test(email)) {
      errors.erremail = "This is not a valid email format!";
      val=false
    }
    if (!password) {
      errors.errpassword = "Password is required!";
      val=false
    } else if (password.length < 8) {
      errors.errpassword = "Password must be more than 8 characters !";
      val=false
    } else if (password.search(/[a-z]/i) < 0) {
      errors.errpassword = "Password contain atleast 1 character !";
      val=false
    } else if (password.search(/[0-9]/) < 0) {
      errors.errpassword = "Password contain atleast 1 digit !";
      val=false
    }
    if (password != confirmpassword) {
      errors.errconfirmpassword = "Password does't match !";
      val=false
    }
    setFormErrors(errors);
    return val;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid=validate()
    if (isvalid) {
      let getdata = localStorage.getItem("userdata") || "[]";
      let parsedata = JSON.parse(getdata);
      const getuser = parsedata.find((data) => data.email == email);
      if (!getuser) {
        parsedata.push(state);
        localStorage.setItem("userdata", JSON.stringify(parsedata));
        props.history.push("/");
      } else {
        alert("This Email already exist");
      }
    }
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="container my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            placeholder="Enter your Name"
            onChange={(event) => handleChange(event)}
          />
          <span className='text-danger'>{errusername}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(event) => handleChange(event)}
          />
          <span className='text-danger'>{erremail}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => handleChange(event)}
          />
          <span className='text-danger'>{errpassword}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={(event) => handleChange(event)}
          />
          <span className='text-danger'>{errconfirmpassword}</span>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
