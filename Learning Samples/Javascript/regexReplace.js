// Regex Replace in Javascript

let str = 'JavaScript';

console.log(str.replace("ava", "-"));

str = 'Java3foobar4Script';

console.log(str.replace(/\d.*\d/, '-'));

str = 'Java323Scr995ip4894545t';

console.log(str.replace(/\d{3}/g, ''));

str = 'Jav5ascript';

console.log(str.replace(/\dA/, '--'));

console.log(str.replace(/\dA/i, '--'));


let splitStr = 'Hello54 How 64aare you';

console.log(splitStr.split(/\d{2}a/));

// Reference

// https://www.freecodecamp.org/news/javascript-string-replace-example-with-regex/
