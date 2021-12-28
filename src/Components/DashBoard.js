import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { setShow } from "../actions";
export default function DashBoard(props) {
  const name=props.match.params.name
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setShow(false));
    props.history.push("/");
  };
  const handleDelete = () => {
    const id = props.match.params.id;
    let getdata = localStorage.getItem("userdata") || "[]";
    let parsedata = JSON.parse(getdata);
    for (let index = 0; index <= parsedata.length; index++) {
      if (id == index) {
        parsedata.splice(index, 1);
      }
    }
    dispatch(setShow(false));
    localStorage.setItem("userdata", JSON.stringify(parsedata));
    props.history.push("/registration");
  };
  return (
    <>
    <h3 className="text-center my-1">Welcome {name}!!!!!!</h3>
      <div
        className="container "
        style={{ marginTop: "50px", marginLeft: "500px" }}
      >
        <Button variant="danger" onClick={handleDelete}>
          Delete Account
        </Button>
        {"  "}
        <Button variant="warning" onClick={handleLogout}>
          LogOut
        </Button>
      </div>
    </>
  );
}
