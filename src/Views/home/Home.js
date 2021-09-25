import React, { useContext } from "react";
import { Container, Card, Form, Button, Col, Navbar, Nav, NavDropdown, Row } from "react-bootstrap";
import { Auth } from "../../hook";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyNavBar from "../../components/MyNavBar";


export default function Signup() {

	return (
		<Container>
			<MyNavBar/>
			<Row style={{ height: "200px", margin: "20px" }}>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="primary" style={{ height: "100%" }}>
						<Card.Title>Card 1</Card.Title>
						<Card.Body className="h-100"></Card.Body>
					</Card>
				</Col>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="danger" style={{ height: "100%" }}>
						<Card.Title>Card 2</Card.Title>
						<Card.Body className="h-100"></Card.Body>
					</Card>
				</Col>
			</Row>
			<Row style={{ height: "200px", margin: "20px" }}>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="secondary" style={{ height: "100%" }}>
						<Card.Title>Card 3</Card.Title>
						<Card.Body className="h-100"></Card.Body>
					</Card>
				</Col>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="warning" style={{ height: "100%" }}>
						<Card.Title>PUBLIC KEY</Card.Title>
						<Card.Body className="h-100"></Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
