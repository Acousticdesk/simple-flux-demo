import React from 'react';
import {changeUserName} from './../Actions/ApplicationActions';

export default class NameComponent extends React.Component {
	handleChange (e) {
		changeUserName(e.currentTarget.value);
	}

	render () {
		return (
				<input 
					type="text"
					onChange={this.handleChange}
					placeholder="Your name goes here!"/>
		);
	}
}