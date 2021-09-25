import React, { useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Modal,
	Row,
} from "react-bootstrap";
import { geolocated } from "react-geolocated";


export default function Settings() {
	const [dropdownTitle, setDropdownTitle] = useState('LADA');
	
	//Show and close info modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    //Show and close geolocalization modal
	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

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
							<Card.Title className="text-success">Actualmente estás en el nivel 4</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								Completa este formulario para avanzar al nivel 5
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
                                            <Form.Label className="text-start w-100 mt-4">Sube un archivo de un comprobante de domicilio</Form.Label>
                                            <Form.Control 
                                                type="file"
                                                className="w-100"
                                                style={{border:"1px solid #dddddd"}}
                                            />
                                        </Form.Group>
									</Col>
									<Col className="col-12">
                                        <Form.Group controlId="formGeo">
                                            <Form.Label className="text-start w-100 mt-4">Ubicación:</Form.Label>
                                            <div className="d-grid gap-2 align-self-end">
                                                <Button variant="outline-info" onClick={handleShow2}>
                                                    Permitir ubicación
                                                </Button>
                                            </div>
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
					<Modal.Title>Nivel 4</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Descripción cool acerca del nivel 4
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>

            <Modal show={show2} onHide={handleClose2}>
				<Modal.Header>
					<Modal.Title>Permitir</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Handshake quiere saber tu ubicación
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-primary" onClick={handleClose2}>
						Aceptar
					</Button>
                    <Button variant="outline-danger" onClick={handleClose2}>
						Cancelar
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
