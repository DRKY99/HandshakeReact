import React, { useContext } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Auth } from "../../hook";
import { useHistory } from "react-router-dom";
export default function Signup() {
	const { signUp } = useContext(Auth.Context);
	const history = useHistory();

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		const response = await signUp(
			event.target.nickname.value,
			event.target.email.value,
			event.target.passphrase.value
		);
		console.log(response);
		if (response) history.push("/vinculate");
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
									Email
								</Form.Label>
								<Form.Control
									name="email"
									type="email"
									placeholder="Enter nickname"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-start w-100 mt-3">
									Passphrase
								</Form.Label>
								<Form.Control
									name="passphrase"
									type="password"
									placeholder="Enter passphrase"
								/>
								<Form.Text className="text-muted">
									Your data will be encrypted locally
								</Form.Text>
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
