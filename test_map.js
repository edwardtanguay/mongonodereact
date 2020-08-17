const flashcards = [
    {
        "back": "bbb1",
        "front": "fff1",
        "id": 21
    },
    {
        "back": "bbb2",
        "front": "fff2",
        "id": 22
    },
    {
        "back": "bbb3",
        "front": "fff3",
        "id": 20
    }
];

flashcards.map(flashcard => console.log(flashcard.front));

const frontFlashcards = flashcards.map(flashcard => ({...flashcard, key: flashcard.id}));

console.log(frontFlashcards);