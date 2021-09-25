export default function (state, action) {
	const { payload, type } = action;
	switch (type) {
		case "INIT_STATE":
			return {
				payload,
			};
		case "SET_ID":
			return {
				...state,
				id: payload,
			};
		case "SET_PUBLIC_KEY":
			return {
				...state,
				public_key: payload,
			};
		case "SET_PRIVATE_KEY":
			return {
				...state,
				private_key: payload,
			};
		case "SET_VINCULATION_CODE":
			return {
				...state,
				vinculation_code: payload,
			};
		case "SET_GENERIC":
			return {
				...state,
				...payload,
			};
		default:
			console.log("ERROR_CODE_404");
			return state;
	}
}
