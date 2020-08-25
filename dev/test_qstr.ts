import * as qstr from '../src/datapod/qtools/qstr';

function hello(person: string) {
	return `hello, ${person}.`;
}

let test: string = qstr.capitalizeFirstLetter('nnn');

let user: string = "James Russel";
let message = hello(user);
console.log(qstr.capitalizeFirstLetter(message) + ', it works.');