/**
 * Returns whether array as duplicate numbers or not
 * 
 * qstr.hasDuplicateNumbers([1, 4, 3, 5, 3, 6]);
 * 
 * true
 */
export const hasDuplicateNumbers = (array: number[]) => {
	return (new Set(array)).size !== array.length;
};