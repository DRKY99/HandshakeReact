
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
	Col,
	Form,
} from "react-bootstrap";

const MyCards = () => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};
	
	return (
		<div id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form action="">
			<Col className="col-12">
					<Form.Group controlId="formBasicName">
						<Form.Label className="text-start w-100 mt-3">
							Nombre en la tarjeta
						</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Ingresa el nombre en la tarjeta"
							onChange={handleInputChange}
						/>
					</Form.Group>
				</Col>
				<Col className="col-12">
					<Form.Group controlId="formBasicNumber">
						<Form.Label className="text-start w-100 mt-3">
							Número de la tarjeta
						</Form.Label>
						<Form.Control
							type="number"
							name="number"
							placeholder="Ingresa el número de la tarjeta"
							autoComplete="off"
							max="9999999999999999"
							onChange={handleInputChange}
						/>
					</Form.Group>
				</Col>
				<Col className="col-12">
					<Form.Group controlId="formBasicDate">
						<Form.Label className="text-start w-100 mt-3">
							Fecha de expiración
						</Form.Label>
						<Form.Control
							type="date"
							name="expiry"
							placeholder="Expire Date"
							onChange={handleInputChange}
						/>
					</Form.Group>
				</Col>
			</form>
		</div>
	);
};

export default MyCards;