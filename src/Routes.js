import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Views/signup/Signup";
import Settings from "./Views/settings/Settings";
import { Auth } from "./hook";
export default function Routes() {
	return (
		<BrowserRouter basename="/">
			<Auth.State>
				<Route exact path="/signup">
					<SignUp />
				</Route>
				<Route exact path="/settings">
					<Settings />
				</Route>
			</Auth.State>
		</BrowserRouter>
	);
}
