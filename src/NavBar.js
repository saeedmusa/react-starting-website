import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const home = <FontAwesomeIcon icon={faHome} />;

  return (
    <div className="Container">
      <div className="NavBar">
        <Navbar bg="danger" variant="dark" collapseOnSelect={true} fixed="top">
          <Navbar.Brand href="home">{home}</Navbar.Brand>
          <Nav className="mr-auto  ">
            <NavDropdown title="browse anime" id="collasible-nav-dropdown">
              <NavDropdown.Item href="animeList">
                anime list (A-Z)
              </NavDropdown.Item>
              <NavDropdown.Item href="latest">latest</NavDropdown.Item>
              <NavDropdown.Item href="seasons">seasons</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="popular" id="collasible-nav-dropdown">
              <NavDropdown.Item href="this_week">this week</NavDropdown.Item>
              <NavDropdown.Item href="this_month">this month</NavDropdown.Item>
              <NavDropdown.Item href="this_year">this year</NavDropdown.Item>
              <NavDropdown.Item href="all_time">all time</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  );
}
export default NavBar;
