import React, { useContext } from "react";
import QRcode from "qrcode.react";
import { Auth } from "../../hook";
import { Button, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Vinculation() {
	const { vinculation_code } = useContext(Auth.Context);
	const history = useHistory();
	return (
		<div className="d-flex  h-100 p-10 m-10 justify-content-center align-items-center">
			<Card style={{ minHeight: "400px" }}>
				<Card.Body
					className="h-100"
					className="d-flex  h-100 p-10 m-10 justify-content-center align-items-center"
				>
					<Container className="h-100">
						<h4>
							You can vinculate another device scanning the
							following QR
						</h4>
						<QRcode className="m-5" value={vinculation_code} />
					</Container>
				</Card.Body>
				<Card.Footer className="d-flex  h-100 p-10 m-10  justify-content-end">
					<Button
						onClick={(event) => {
							history.push("/home");
						}}
					>
						SKIP
					</Button>
				</Card.Footer>
			</Card>
		</div>
	);
}
