import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
	return (
		<h2 className="header text-center">
			{title}
		</h2>
	);
};

const App = () => {
	return (
		<div className="app">
			<Header title="Search" />
			<div>
				...
			</div>
		</div>
	);
};

Header.prototypes = {
	title: PropTypes.string.isRequired
};

App.defaultProps = {
	appTitle: 'Main Title'
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);