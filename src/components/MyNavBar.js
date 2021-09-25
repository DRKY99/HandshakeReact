import React, { useContext } from "react";
import { Container, Card, Form, Button, Col, Navbar, Nav, NavDropdown, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyNavBar = () => {
	
	return (
		<Navbar bg="light" expand="xl">
			<Container>
				<Navbar.Brand href="#home">
					<FontAwesomeIcon icon="fa-solid fa-handshake" />
					HandShake	
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#home">Inicio</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavBar;