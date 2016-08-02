import dispatcher from './../dispatcher';

export function changeUserName (name) {
	dispatcher.dispatch({
		type: 'CHANGE_USER_NAME',
		name
	});
};