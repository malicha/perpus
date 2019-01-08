import React,{Component} from 'react';
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
  DropdownItem } from 'reactstrap';
  import {Link} from 'react-router-dom';
  import './navbar.css';


export default class NavBar extends Component {
  
  render() {
    return (
      <div className="klj">
        <Navbar light expand="md">
              <NavbarBrand tag={Link} to="/">Perpustakaan</NavbarBrand>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/book">List Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/book/create">Tambah Buku</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}