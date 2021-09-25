import React, { useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Form,
	InputGroup,
	Modal,
	Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Settings() {
	const [dropdownTitle, setDropdownTitle] = useState('LADA');
	
	//Show and close modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		//await signUp(event.target.nickname.value, event.target.payload.value);
	};
	return (
		<div className="d-flex h-100 p-10 m-10 justify-content-center align-items-center">
			<Card style={{ minHeight: "400px", maxWidth:"450px"}}>
				<Card.Body className="h-100">
					<Container className="h-100">
						<Card.Header>
                            <Card.Title className="text-success">Actualmente estás en el nivel 2</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								Completa este formulario para avanzar al nivel 3
							</Card.Title>
							<Button variant="link">
								o saltar
							</Button>
							<Form
								className="h-100 p-10 m-10"
								onSubmit={handleOnSubmit}
							>
								<Row className="h-100">
									<Col className="col-12">
										<Form.Group controlId="formBasicEmail">
											<Form.Label className="text-start w-100 mt-3">
												Nombre
											</Form.Label>
											<Form.Control
												name="firstname"
												type="text"
												placeholder="Ingresa tu nombre"
											/>
										</Form.Group>
									</Col>
									<Col className="col-12">
										<Form.Group controlId="formBasicEmail">
											<Form.Label className="text-start w-100 mt-3">
												Apellido
											</Form.Label>
											<Form.Control
												name="lastname"
												type="text"
												placeholder="Ingresa tu apellido"
											/>
										</Form.Group>
									</Col>
									<Col className="col-12">
										<Form.Label htmlFor="phoneNumber" className="text-start w-100 mt-3">
											Número de teléfono
										</Form.Label>
										<InputGroup className="mb-3">
											<DropdownButton
												variant="outline-secondary"
												title={dropdownTitle}
												id="input-group-dropdown-1"
											>
												<Dropdown.Item onClick={() => setDropdownTitle('+52')}>(MX) +52</Dropdown.Item>
												<Dropdown.Item onClick={() => setDropdownTitle('+1')}>(US) +1</Dropdown.Item>
											</DropdownButton>
											<Form.Control id="phoneNumber" type="tel" placeholder="Ingresa tu número de teléfono"/>
										</InputGroup>
									</Col>
									<Col>
										<Button variant="light">
											<FontAwesomeIcon icon={faFacebook}/>
										</Button>
										<Button variant="light">
											<FontAwesomeIcon icon={faInstagram}/>
										</Button>
										<Button variant="light">
											<FontAwesomeIcon icon={faTwitter}/>
										</Button>
										<Button variant="light">
											<FontAwesomeIcon icon={faGoogle}/>
										</Button>
										<Button variant="light">
											<FontAwesomeIcon icon={faGithub}/>
										</Button>
									</Col>
								</Row>
								<div className="d-grid gap-2 mt-4 align-self-end">
									<Button variant="secondary" onClick={handleShow}>
										Info
									</Button>
								</div>
								<div className="d-grid gap-2 mt-4 align-self-end">
									<Button variant="primary" type="submit">
										Guardar
									</Button>
								</div>
							</Form>
						</Card.Body>
					</Container>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header>
					<Modal.Title>Level 2</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Cool description about level 2
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Ok!
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
