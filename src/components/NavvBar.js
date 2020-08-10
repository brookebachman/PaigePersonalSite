import React from 'react';
import { Navbar, Nav, ButtonGroup } from 'react-bootstrap';

const NavvBar = (props) => {
	return (
		<Navbar bg="light" variant="light" expand="lg">
			<Navbar.Brand>
				<img src="logo.png" id="logo-mom" />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Nav className="mr-auto">
				
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/reviews">Reviews</Nav.Link>
					<Nav.Link href="/services">Services</Nav.Link>
					<Nav.Link href="/appointments">Appointments</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavvBar;
