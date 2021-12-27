import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
function SignUp(props) {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [validation, setvalidation] = useState(false);
  const { username, email, password, confirmpassword } = state;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...state, [name]: value };
    setstate(addusers);
  };
  const validationdata = () => {
    if (!username.trim() || !password.trim() || !confirmpassword.trim()) {
      alert("Fields Can't be Empty");
      setvalidation(!validation)
      console.log(validation)
    }
    if (password.length < 8 || confirmpassword.length < 8) {
      alert("Password should be greater than 8");
      setvalidation(!validation)
    }
    if (password != confirmpassword) {
      alert("Password does't match");
      setvalidation(!validation)
    }
    if (password.search(/[a-z]/i) < 0) {
      alert("Your password must contain at least one letter.");
      setvalidation(!validation)
    }
    if (password.search(/[0-9]/) < 0) {
      alert("Your password must contain at least one digit.");
      setvalidation(!validation)
    }
 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /*if (!username.trim() || !password.trim() || !confirmpassword.trim()) {
      alert("Fields Can't be Empty");
      setvalidation(false);
    }
    if (password.length < 8 || confirmpassword.length < 8) {
      alert("Password should be greater than 8");
      setvalidation(false);
    }
    if (password != confirmpassword) {
      alert("Password does't match");
      setvalidation(false);
    }
    if (password.search(/[a-z]/i) < 0) {
      alert("Your password must contain at least one letter.");
      setvalidation(false);
    }
    if (password.search(/[0-9]/) < 0) {
      alert("Your password must contain at least one digit.");
      setvalidation(false);
    }*/
   if (username.trim() || password.trim() || confirmpassword.trim()) {
      let getdata = localStorage.getItem("userdata") || "[]";
      let parsedata = JSON.parse(getdata);
      const t = parsedata.find((data) => data.email == email);
      if (!t) {
        parsedata.push(state);
        localStorage.setItem("userdata", JSON.stringify(parsedata));
        props.history.push("/");
      } else {
        alert("User already exist");
      }
    }
  else{
      alert("please fill all fields")
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
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
