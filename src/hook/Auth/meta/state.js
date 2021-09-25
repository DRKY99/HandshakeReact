import React, { useEffect, useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import Links from "../../../constants/Links";
import { generateKey } from "openpgp";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto-js";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const UserState = (props) => {
	const initialState = {
		id: null,
		public_key: null,
		private_key: null,
		revocation_certificade: null,
		vinculation_code: null,
		levelOne: {
			firstname: null,
			lastname: null,
			phone: null,
		},
	};
	const [state, dispatch] = useReducer(Reducer, initialState);
	const singIn = (passphrase) => {
		const payload = {
			remote_key: crypto.AES.decrypt(
				localStorage.getItem("remote_key").toString(),
				passphrase
			).toString(crypto.enc.Utf8),
			id: parseInt(
				crypto.AES.decrypt(
					localStorage.getItem("id").toString(),
					passphrase
				).toString(crypto.enc.Utf8)
			),
			public_key: crypto.AES.decrypt(
				localStorage.getItem("public_key").toString(),
				passphrase
			).toString(crypto.enc.Utf8),
			private_key: crypto.AES.decrypt(
				localStorage.getItem("private_key").toString(),
				passphrase
			).toString(crypto.enc.Utf8),
			revocation_certificade: crypto.AES.decrypt(
				localStorage.getItem("revocation_certificade").toString(),
				passphrase
			).toString(crypto.enc.Utf8),
		};
		dispatch({ type: "SET_GENERIC", payload });
		cookies.set("passphrase", passphrase, { path: "/" });
	};

	const signUp = async (nickname, email, passphrase) => {
		return await generateKey({
			curve: "curve25519",
			userIDs: [{ name: nickname, email }],
		})
			.then(async (keys) => {
				const data = {
					nickname,
					email,
					public_key: keys.publicKey,
					mac: uuidv4(),
				};
				return await fetch(Links.API + "user", {
					method: "POST",
					headers: {
						"Content-type": "Application/json",
					},
					body: JSON.stringify(data),
				})
					.then((data) => data.json())
					.then(async (data) => {
						console.log(data);
						dispatch({
							type: "SET_GENERIC",
							payload: {
								id: data.id,
								public_key: keys.publicKey,
								private_key: keys.privateKey,
								revocation_certificade:
									keys.revocationCertificate,
								vinculation_code: data.vinculation_token,
							},
						});
						try {
							localStorage.setItem(
								"remote_key",
								crypto.AES.encrypt(
									data.remote_key.toString(),
									passphrase
								).toString()
							);
							localStorage.setItem(
								"id",
								crypto.AES.encrypt(
									data.id.toString(),
									passphrase
								).toString()
							);
							localStorage.setItem(
								"public_key",
								crypto.AES.encrypt(
									keys.publicKey.toString(),
									passphrase
								).toString()
							);
							localStorage.setItem(
								"private_key",
								crypto.AES.encrypt(
									keys.privateKey.toString(),
									passphrase
								).toString()
							);
							localStorage.setItem(
								"revocation_certificade",
								crypto.AES.encrypt(
									keys.revocationCertificate.toString(),
									passphrase
								).toString()
							);
						} catch (error) {
							console.log(error);
							console.log("Error while saving data");
						}
						alert("Confirmation email has been sent");
						return true;
					})
					.catch(() => {
						alert("Something went wrong!");
						return false;
					});
			})
			.catch(() => {
				alert("Something went wrong!");
				return false;
			});
	};

	const setLevelOne = async (firstname, lastname, phone) => {
		const passphrase = cookies.get("passphrase");
		dispatch({
			type: "SET_LVLONE",
			payload: {
				firstname,
				lastname,
				phone,
			},
		});
		try {
			localStorage.setItem(
				"firstname",
				crypto.AES.encrypt(firstname.toString(), passphrase).toString()
			);
			localStorage.setItem(
				"lastname",
				crypto.AES.encrypt(lastname.toString(), passphrase).toString()
			);
			localStorage.setItem(
				"phone",
				crypto.AES.encrypt(phone.toString(), passphrase).toString()
			);
		} catch (error) {
			console.log(error);
		}
		console.log(state.id);
		await fetch(Links.API + "user/lvl_one/" + state.id, {
			method: "GET",
			headers: {
				"Content-type": "Application/json",
			},
		})
			.then((data) => data.json())
			.then((data) => {
				alert(JSON.stringify(data));
			})
			.catch(() => alert("Something went wrong"));
	};

	return (
		<Context.Provider
			value={{
				id: state.id,
				vinculation_code: state.vinculation_code,
				private_key: state.private_key,
				public_key: state.public_key,
				levelOne: state.levelOne,
				signUp,
				singIn,
				setLevelOne,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default UserState;
