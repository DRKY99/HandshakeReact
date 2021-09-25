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
						<Card.Title>Registrate a HandShake</Card.Title>
						<Form
							className="h-100 p-10 m-10 "
							onSubmit={handleOnSubmit}
						>
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-start w-100 mt-3">
									Usuario
								</Form.Label>
								<Form.Control
									name="nickname"
									type="text"
									placeholder="Ingresa tu usuario"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-start w-100 mt-3">
									Email
								</Form.Label>
								<Form.Control
									name="email"
									type="email"
									placeholder="Ingresa tu email"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label className="text-start w-100 mt-3">
									Frase de seguridad
								</Form.Label>
								<Form.Control
									name="passphrase"
									type="password"
									placeholder="Ingresa tu frase de seguridad"
								/>
								<Form.Text className="text-muted">
									Tus datos serán almacenados y encriptados de forma local
								</Form.Text>
							</Form.Group>
							<div className="d-grid gap-2 mt-4 align-self-end">
								<Button variant="primary" type="submit">
									Guardar
								</Button>
							</div>
						</Form>
					</Container>
				</Card.Body>
			</Card>
		</div>
	);
}
