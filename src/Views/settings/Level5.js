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
import MyCards from "../../components/MyCards"

export default function Settings() {

    //Show and close info modal
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
                                <Col className="mt-1">
                                    <MyCards />
                                </Col>
								</Row>
								<div className="d-grid gap-2 mt-4 align-self-end">
									<Button variant="secondary" onClick={handleShow}>
										Info
									</Button>
								</div>
								<div className="d-grid gap-2 mt-3 align-self-end">
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
					<Modal.Title>Nivel 5</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Descripción cool acerca del nivel 5
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
