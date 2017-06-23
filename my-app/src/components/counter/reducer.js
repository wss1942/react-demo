
export default (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			console.info(1);
			return state + 1;
		case 'DECREMENT':
			console.info(2);
			return state - 1;
		default:
			return state;
	}
}
