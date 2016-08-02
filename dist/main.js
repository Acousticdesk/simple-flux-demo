import React from 'react';
import ReactDOM from 'react-dom';
import NameComponent from './js/Components/NameComponent';
import GreetsComponent from './js/Components/GreetsComponent';

class Application extends React.Component {
	render () {
		return (
			<div>
				<NameComponent/>
				<GreetsComponent/>
			</div>
		);
	}
};

ReactDOM.render( <Application/>, document.getElementById('application') );