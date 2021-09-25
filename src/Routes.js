import React, { useContext } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Views/signup/Signup";
import Settings from "./Views/settings/Settings";
import Vinculation from "./Views/vinculation/Vinculation";
import Home from "./Views/home/Home";
import { Auth } from "./hook";

export default function Routes() {
	return (
		<BrowserRouter basename="/">
			<Auth.State>
				<Route exact path="/signup">
					<SignUp />
				</Route>
				<Route exact path="/vinculate">
					<Vinculation />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/settings">
					<Settings />
				</Route>
				<Identifier />
			</Auth.State>
		</BrowserRouter>
	);
}

function Identifier() {
	const { id } = useContext(Auth.Context);
	return id ? (
		<div
			style={{ position: "absolute", bottom: 5, right: 5, opacity: 0.5 }}
		>
			{id}
		</div>
	) : null;
}
