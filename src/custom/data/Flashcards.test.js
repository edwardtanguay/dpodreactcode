import * as qarr from 'datapod/qtools/qarr';

const flashcards = require('./flashcards.json');

test('Have enough flashcards in the datasource', () => {
	expect(flashcards.length).toBeGreaterThan(150);
});

test('Each flashcard has an id that is a number', () => {
	flashcards.map(m => {
		expect(typeof m.id).toBe('number');
	});
});

test('Each flashcard has a unique id.', () => {
	const ids = flashcards.map(m => m.id);
	expect(qarr.hasDuplicateNumbers(ids)).toBeFalsy();
});