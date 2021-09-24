import React, { useContext } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Auth } from "../../hook";

export default function Signup() {
	const { id, signUp } = useContext(Auth.Context);

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		await signUp(event.target.nickname.value, event.target.payload.value);
	};

	return (
		<div className="d-flex  h-100 p-10 m-10 justify-content-center align-items-center">
			<Card style={{ minHeight: "400px" }}>
				<Card.Body className="h-100">
					<Container className="h-100">
						<Card.Title>SignUp into Handshake</Card.Title>
						<Form
							className="h-100 p-10 m-10 "
							onSubmit={handleOnSubmit}
						>
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-start w-100 mt-3">
									Nickname
								</Form.Label>
								<Form.Control
									name="nickname"
									type="text"
									placeholder="Enter nickname"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-start w-100 mt-3">
									Payload
								</Form.Label>
								<Form.Control
									name="payload"
									type="text"
									placeholder="Enter payload"
								/>
							</Form.Group>
							<div className="d-grid gap-2 mt-4 align-self-end">
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</div>
						</Form>
					</Container>
				</Card.Body>
			</Card>
		</div>
	);
}
