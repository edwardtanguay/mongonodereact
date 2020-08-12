import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

setTimeout(() => {
	ReactDOM.render(
		<h3>new component</h3>,
		document.getElementById('root')
	);
}, 3000);