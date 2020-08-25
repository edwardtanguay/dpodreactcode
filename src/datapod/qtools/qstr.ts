import * as qstr from './qstr';

// import * as qstr from '../qtools/qstr';

/**
 * Capitalize the first letter of a string.
 * 
 * qstr.capitalizeFirstLetter("this is a sentence."); 
 * 
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (line: string) => {
	return line.charAt(0).toUpperCase() + line.slice(1);
}

/**
 * Replace all occurances in a string. 
 * 
 * qstr.replaceAll("This is a tost.", "o", "e");
 * 
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

/**
 * Check if a string is inside another string.
 * 
 * qstr.contains("This is a test.", "test");
 * 
 * true
 */
export const contains = (line: string, searchText: string) => {
	return String(line).includes(searchText);
}

/**
 * Check if a string has another string at the end.
 * 
 * qstr.contains("This is a test.", ".");
 * 
 * true
 */
export const endsWith = (main: string, part: string) => {
	return main.endsWith(part);
}

// TODO: refactor, test, comment
export const isEmpty = (line: string) => {
	if (line === undefined || line == null) {
		return true;
	}
	line = line.toString();
	if (line.trim() === '') {
		return true;
	}
	return false;
};

// TODO: all methods in this file
export const chopRight = (main: string, textToChop: string) => {
	if (main.endsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(0, mainLen - (len));
		}
	}
	return main;
};

export const chopLeft = (main: string, textToChop: string) => {
	if (main.startsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(len, mainLen);
		}
	}
	return main;
};

export const breakIntoParts = (main: string, delimiter: string = ',', maximumNumberOfParts: number = 0) => {
	const escapedDelimiter = `\\${delimiter}`;
	const mask = '@@@MASK@@@';
	if (qstr.isEmpty(main)) {
		return [];
	}

	const maskedMain: string = qstr.replaceAll(main, escapedDelimiter, mask);
	const roughParts: string[] = maskedMain.split(delimiter);
	let parts: string[] = [];
	roughParts.forEach((part: string) => {
		let newPart: string = part;
		newPart = newPart.trim();
		parts.push(newPart);
	});
	if (maximumNumberOfParts !== 0 && maximumNumberOfParts < parts.length) {
		const consolidatedParts: string[] = [];
		parts.forEach((part, index) => {
			if (index < maximumNumberOfParts - 1) {
				consolidatedParts.push(part);
			} else {
				const current: string = consolidatedParts[maximumNumberOfParts - 1];
				let prefix: string = '';
				if (current !== undefined) {
					prefix = `${current};`;
				}
				consolidatedParts[maximumNumberOfParts - 1] = prefix + part;
			}
		});
		parts = consolidatedParts;
	}
	//unmask
	const unmaskedParts = [];
	for (const part of parts) {
		const unmaskedPart = qstr.replaceAll(part, mask, delimiter);
		unmaskedParts.push(unmaskedPart);
	}
	parts = unmaskedParts;

	return parts;
}