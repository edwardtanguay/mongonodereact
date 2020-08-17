import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
	return (
		<h2 className="header text-left">
			{title}
		</h2>
	);
};

Header.prototypes = {
	title: PropTypes.string.isRequired
};

export default Header;