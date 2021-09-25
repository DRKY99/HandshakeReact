import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Views/signup/Signup";
import Level1 from "./Views/settings/Level1";
import Level2 from "./Views/settings/Level2";
import Level3 from "./Views/settings/Level3";
import Level4 from "./Views/settings/Level4";
import Level5 from "./Views/settings/Level5";
import { Auth } from "./hook";
export default function Routes() {
	return (
		<BrowserRouter basename="/">
			<Auth.State>
				<Route exact path="/signup">
					<SignUp />
				</Route>
				<Route exact path="/settings/Level1">
					<Level1 />
				</Route>
				<Route exact path="/settings/Level2">
					<Level2 />
				</Route>
				<Route exact path="/settings/Level3">
					<Level3 />
				</Route>
				<Route exact path="/settings/Level4">
					<Level4 />
				</Route>
				<Route exact path="/settings/Level5">
					<Level5 />
				</Route>
			</Auth.State>
		</BrowserRouter>
	);
}
