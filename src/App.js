import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./Components/LogIn";
import DashBoard from "./Components/DashBoard";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
function App() {
  const showhide = useSelector((state) => state.toggle.show);

  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Nav className="me-auto">
            {showhide == false ? (
              <>
                <Nav.Link>
                  <Link
                    to="/registration"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Registration
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    LogIn
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                {" "}
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  DashBoard
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
      </div>
      <Switch>
        {showhide == false ? (
          <>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/registration" component={SignUp} />
          </>
        ) : (
          <Route exact path="/dashboard/:id/" component={DashBoard} />
        )}
      </Switch>
    </Router>
  );
}
export default App;
