import React from 'react';

const Flashcard = (flashcard) => (
	< div className="flashcard" >
		<div className="category">{flashcard.category.toUpperCase()}</div>
		<div className="front">{flashcard.front}</div>
		<div className="back">{flashcard.back}</div>
	</div >
);

export default Flashcard;