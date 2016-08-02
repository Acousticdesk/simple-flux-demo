import {EventEmitter} from 'events';
import dispatcher from './../dispatcher';

class ApplicationStore extends EventEmitter {
	constructor () {
		super();
		this.userName = 'stranger';
	}

	changeUserName (name) {
		this.userName = name;
		this.emit('change');
	}

	handleActions (action) {
		switch (action.type) {
			case 'CHANGE_USER_NAME':
				this.changeUserName(action.name);
			break;
		}
	}
} 

const applicationStore = new ApplicationStore();

dispatcher.register(applicationStore.handleActions.bind(applicationStore));

export default applicationStore;