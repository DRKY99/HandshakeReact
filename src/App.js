import logo from "./logo.svg";
import "./App.css";
import { Button,
		Card,  
		Col,  
		Container,  
		Form, 
		InputGroup, 
		Row} from "react-bootstrap";
import React, { useState } from "react";
function App() {
	  // add checked state
	const [checked, setChecked] = useState(false)

	return (
		<Container>
			<Row className="align-items-center">
				<Col>
				</Col>
				<Col>
					<Card className="h-100 shadow-sm bg-white rounded">
						<Card.Header className="d-flex">
							<Card.Title>Nivel Noob</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form>
								<InputGroup>
									<Row>
										<Col className="col-9">
											<Form.Group controlId="formBasicEmail">
												<Form.Label>Email</Form.Label>
												<Form.Control type="email" placeholder="Ingresa tu email" />
												
											</Form.Group>
										</Col>
										<Col className="col-3">
											<Form.Check className="mt-4"/>
										</Col>
										<Col className="col-12 mb-3">
											<Card.Text className="text-muted">
												Una vez validados tus datos se guardarán unicamente en tus dispositivos registrados
											</Card.Text>
										</Col>
									</Row>
								</InputGroup>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Check me out" />
								</Form.Group>
								
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
