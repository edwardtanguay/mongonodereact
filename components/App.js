import React from 'react';
//import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Flashcard from './Flashcard';


class App extends React.Component {
	state = {
		pageHeader: 'OneSearch',
		leftContent: 'Type here.'
	};
	// constructor(props) {
	// 	super(props);
	// 	this.state = { test: 42 };
	// }

	// componentDidMount() {
	// 	console.log('did mount');
	// }

	// componentWillUnmount() {
	// 	console.log('will unmount');
	// }



	render() {
		//const flashcard = { front: 'testfront2' };
		return (
			<div className="app">
				<Header title={this.state.pageHeader} />
				<div>
					{this.props.flashcards.map(flashcard =>
						<Flashcard {...flashcard} />
						)}
					{/* <Flashcard {...this.props.flashcards[121]}></Flashcard> */}
					{/* <Flashcard front={flashcard.front}></Flashcard> */}
				</div>
			</div>
		);
	}
}

App.defaultProps = {
	appTitle: 'Main Title'
};

export default App;