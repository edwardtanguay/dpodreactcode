import React from 'react';
import Flashcard from 'custom/components/Flashcard';

interface IFlashcard {
	id: number,
	category: string,
	kind: string,
	front: string,
	back: string,
	key: number
}

interface IFlashcardListProps {
	flashcards: IFlashcard[]
}

const FlashcardList = ({ flashcards }: IFlashcardListProps) => (
	<div className="flashcardContent">
		{flashcards.map(flashcard => <Flashcard {...flashcard} key={flashcard.id} />)}
	</div>
);

export default FlashcardList;