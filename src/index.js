import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = (props) => {
	return (
		<h2 className="text-center">
			{props.appTitle}
		</h2>
	);
};

App.prototypes = {
	appTitle: PropTypes.string.isRequired
};

App.defaultProps = {
	appTitle: 'Main Title'
};

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);