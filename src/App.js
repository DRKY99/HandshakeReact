import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import SignUp from "./Views/signup/Signup";
import Routes from "./Routes";

function App() {
	// add checked state

	return (
		<div className="App">
			<Container style={{ height: "100%" }}>
				<Routes />
			</Container>
		</div>
	);
}

export default App;
