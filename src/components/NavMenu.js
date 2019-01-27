import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavMenu.css'

const NavMenu = () => {
return (
    <Navbar default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href='/News' to='/News'>
                     News
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href='/Map' to='/GMap'>
                     Map
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href='/Guide' to='/Guide'>
                     Guide
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
   )

}
export default NavMenu