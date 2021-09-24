import React, { useEffect, useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import Links from "../../../constants/Links";
import { generateKey } from "openpgp";

const UserState = (props) => {
	const initialState = {
		id: 0,
		public_key: null,
		private_key: null,
	};

	const [state, dispatch] = useReducer(Reducer, initialState);

	const signUp = async (nickname, payload) => {
		await generateKey({
			curve: "curve25519",
			userIDs: [{ name: "nickname", comment: "mac-address" }],
		})
			.then(async (keys) => {
				console.log(keys.privateKey, keys.publicKey);
				const data = {
					nickname,
					public_key: "sdjkahdi",
				};

				await fetch(Links.API + "user", {
					method: "POST",
					headers: {
						"Content-type": "Application/json",
					},
					body: JSON.stringify(data),
				})
					.then(() => {
						console.log("ok");
					})
					.catch(() => {
						console.log("err");
					});
			})
			.catch(console.log);
	};

	return (
		<Context.Provider
			value={{
				id: state.id,
				signUp,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default UserState;
