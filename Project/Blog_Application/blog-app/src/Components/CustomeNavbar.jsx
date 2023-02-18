import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import userContext from "../context/userContext";

const CustomeNavbar = () => {

  const userContextDate = useContext(userContext);

  let Navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false)

  const [login, setLogin] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())
  }, [login])
  // Whenever login changes useEffect will get call automatically


  const Logout = () => {
    doLogout(() => {
      // Logged out
      setLogin(false);
      userContextDate.setUser(
        {
          data : null,
          login : false
        }
      )
      Navigate('/')
    })
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-4">
        <NavbarBrand tag={ReactLink} to="/login">
          Sagar Pokale
        </NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feed
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/service">
                Services
              </NavLink>
            </NavItem>


            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem tag={ReactLink} to="/" >Contact Us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>

            {
              login && (
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} to={`/user/profileinfo/${user.id}`}>
                      Profile Info
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={ReactLink} to="/user/dashboard">
                      {user.email}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={Logout}>
                      Logout
                    </NavLink>
                  </NavItem>


                </>
              )
            }

            {
              !login && (
                // Called Fragment
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/login">
                      {/* <NavLink href="/login"> */}
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/signup">
                      SignUp
                    </NavLink>
                    {/* <NavLink href="/signup">SignUp</NavLink> */}
                  </NavItem>

                </>
              )
            }

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomeNavbar;
