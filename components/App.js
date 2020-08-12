import React from 'react';
//import ReactDOM from 'react-dom';
import Header from '../components/Header';

class App extends React.Component {
	state = {
		pageHeader: 'OneSearch',
		leftContent: 'Type here.'
	};
	// constructor(props) {
	// 	super(props);
	// 	this.state = { test: 42 };
	// }
	render() {
		return (
			<div className="app">
				<Header title={this.state.pageHeader} />
				<div>
					[{this.state.leftContent}]
				</div>
			</div>
		);
	}
}

App.defaultProps = {
	appTitle: 'Main Title'
};

export default App;