import React from 'react';
import applicationStore from './../Stores/ApplicationStore';

export default class GreetsComponent extends React.Component {
	constructor () {
		super();
		this.state = {
			name: applicationStore.userName
		};
	}

	componentWillMount () {
		applicationStore.on('change', () => {
			this.setState({name: applicationStore.userName});
		});
	}

	render () {
		return <p>Hello, {this.state.name}</p>
	}
}