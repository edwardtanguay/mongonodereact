import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
//import data from '../src/testData.json';
//console.log(flashcards.map(m => m.front));

ReactDOM.render(
	// <App flashcards={flashcards} />,
	<App flashcards={[]} />,
	document.getElementById('root')
);

// setTimeout(() => {
// 	ReactDOM.render(
// 		<h3>new component</h3>,
// 		document.getElementById('root')
// 	);
// }, 3000);