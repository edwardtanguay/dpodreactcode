import * as qstr from './qtools/qstr';

function hello(person: string) {
    return `hello, ${person}.`;
}

let test: string = qstr.capitalizeFirstLetter('nnn');

let user: string = 'James Russel';
const message = hello(user);
console.log(qstr.capitalizeFirstLetter(message));
