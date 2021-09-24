import { Types } from "../../index";

export default function (state, action) {
	const { payload, type } = action;
	switch (type) {
		case Types.INIT_STATE:
			return {
				payload,
			};
			break;
		case Types.SELECT:
			return {
				...state,
				id: payload,
			};
			break;
		default:
			return state;
			break;
	}
}
