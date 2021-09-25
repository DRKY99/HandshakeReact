import React, { useContext } from "react";
import { Container, Card, Form, Button, Col, Row } from "react-bootstrap";
import { Auth } from "../../hook";
import { useHistory } from "react-router-dom";

export default function Signup() {
	const { public_key } = useContext(Auth.Context);
	const history = useHistory();

	return (
		<Container>
			<Row style={{ height: "200px", margin: "20px" }}>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="primary" style={{ height: "100%" }}>
						<Card.Title>PUBLIC KEY</Card.Title>
						<Card.Body className="h-100"></Card.Body>
					</Card>
				</Col>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="danger" style={{ height: "100%" }}>
						<Card.Title>PUBLIC KEY</Card.Title>
						<Card.Body className="h-100"></Card.Body>
					</Card>
				</Col>
			</Row>
			<Row style={{ height: "200px", margin: "20px" }}>
				<Col style={{ height: "100%", margin: "20px" }}>
					<Card bg="secondary" style={{ height: "100%" }}>
						<Card.Title>PUBLIC KEY</Card.Title>
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
