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
                            <Card.Title className="text-success">Actualmente estás en el nivel 3</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								Completa este formulario para avanzar al nivel 4
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
                                        <Form.Group controlId="formFile">
                                            <Form.Label className="text-start w-100 mt-4">Sube una foto de tu INE</Form.Label>
                                            <Form.Control 
                                                type="file"
                                                className="w-100"
                                                style={{border:"1px solid #dddddd"}}
                                            />
                                        </Form.Group>
									</Col>
                                    <Col className="col-12">
                                        <Form.Group controlId="formFile">
                                            <Form.Label className="text-start w-100 mt-4">Sube una foto tuya sosteniendo tu INE</Form.Label>
                                            <Form.Control 
                                                type="file"
                                                className="w-100"
                                                style={{border:"1px solid #dddddd"}}
                                            />
                                        </Form.Group>
									</Col>
								</Row>
								<div className="d-grid gap-2 mt-5 align-self-end">
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
					<Modal.Title>Level 3</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Cool description about level 3
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
