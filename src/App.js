import { Container } from "react-bootstrap";
import "./App.css";
import SignUp from "./Views/signup/Signup";
import Routes from "./Routes";

function App() {
	return (
		<div className="App">
			<Container style={{ height: "100%" }}>
				<Routes />
			</Container>
		</div>
	);
}

export default App;
