import React from "react";
import { Redirect, Route } from "react-router-dom";
const ProtectedRouting=({ component: Component,islogin})=>{
  return (
    <Route
      render={(props) =>
        islogin? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
export default ProtectedRouting

