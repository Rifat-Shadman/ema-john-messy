import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <a href="/">
                {/* <img src={logo} alt=""/> */}

            </a>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Amazon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="/reviews">Order Review</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/inventory">Add Products</NavDropdown.Item>
                            <NavDropdown.Item href="/manageProducts">Manage Products</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            {/* <nav>
                <Link>E-ShopVers</Link>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/reviews">Order Review</Link>
                <Link to="/inventory">Admin</Link>
                <NavDropdown title="Admin" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/inventory">Add Products</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Manage Products</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                </NavDropdown>
                
                <button onClick={() => setLoggedInUser({})} className="main-button">Sign Out</button>
            </nav> */}
        </div>
    );
};

export default Header;