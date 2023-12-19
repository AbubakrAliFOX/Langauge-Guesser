const franc = require('franc');
const colors = require('colors');
const inputLang = process.argv.slice(2);

console.log(franc(`${inputLang}`).rainbow);