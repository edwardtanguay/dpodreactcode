import * as qstr from './qstr';

/**
 * Capitalize the first letter of a string.
 *
 * qstr.capitalizeFirstLetter("this is a sentence.");
 *
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (line: string) => {
    return line.charAt(0).toUpperCase() + line.slice(1);
};

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
