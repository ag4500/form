import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { setShow } from "../actions";
const LogIn = (props) => {
    const show=useSelector((state)=>state.toggle.show)
    const dispatch=useDispatch()
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
 
  const { email, password } = state;
  const onChange = (e) => {
    const { name, value } = e.target;
    const logusers = { ...state, [name]: value };
    setstate(logusers);
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    let getdata = localStorage.getItem("userdata") || "[]";
    let parsedata = JSON.parse(getdata);
    const a = parsedata.findIndex((i) => i.email == email && i.password == password);
    if(a!=-1){
        dispatch(setShow(!show))
        props.history.push(`/dashboard/${a}`)
    }
    else{
        return alert("Please Enter Valid Credentials");
    }
  };
  return (
    <>
      <Form onSubmit={OnSubmit} className="container my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(event) => onChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => onChange(event)}
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          LogIn
        </Button>
      </Form>
    </>
  );
};
export default LogIn;
