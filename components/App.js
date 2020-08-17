import React from 'react';
//import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Flashcard from './Flashcard';
import axios from 'axios';

const flashcards = require('../src/itemType_flashcards.json');

class App extends React.Component {
	state = {
		pageHeader: 'test',
		flashcards: []
	};
	// constructor(props) {
	// 	super(props);
	// 	this.state = { test: 42 };
	// }

	componentDidMount() {
		axios.get('/api/fc')
			.then(rsp => {
				console.log(rsp.data.flashcards);
				this.setState({
					flashcards: rsp.data.flashcards
				});
			})
			.catch(console.error);
	}

	// componentWillUnmount() {
	// 	console.log('will unmount');
	// }



	render() {
		//const flashcard = { front: 'testfront2' };
		return (
			<div className="app">
				<Header title={this.state.pageHeader} />
				<div>
					{this.state.flashcards.map(flashcard => <Flashcard {...flashcard} key={flashcard.id} />)}
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