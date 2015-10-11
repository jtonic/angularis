/**
 * Created by jtonic on 10.10.2015.
 */

"use strict";

var _ = require('lodash');

console.log(`
====================================================================
Basics function examples - sum, forEach, map, filter
====================================================================`);
var sum = (x, y) => x + y;
console.log("sum", sum(1, 2));

var first = _.first([1, 2, 3]);
console.log("first= " + first);

var numbers = [77, 80, 90, 100];
_.forEach(numbers, (value) => {
    setTimeout(function () {
        console.log(value);
    }, 100);
});

var doubled = _.map([1, 2, 3, 4], (value) => value * 2);
console.log("doubled: " + doubled);

var filteredNumbers = _.filter(numbers, (value) => value > 90);
console.log("filteredNumbers: " + filteredNumbers);


var sumForFilteredNumbers = _(numbers).filter((x) => x % 5 === 0)
    .reduce((total, x) => total + x);
console.log("sumForFilteredNumbers:", sumForFilteredNumbers);

var family = [
    {name: 'Antonel', age: 45},
    {name: 'Irina', age: 25},
    {name: 'Liviu', age: 32}
];

var oldestSibling = _.chain(family)
    .sortBy('age')
    .last()
    .value();
console.log("Antonel", oldestSibling);

console.log(`
====================================================================
Abstraction functions: Curry, partial functions
====================================================================`);
var name = _.curry((last, first) => [last, first].join(','));

var pazargic = name('Pazargic');

console.log('name ', name('Antonel')('Pazargic'));

console.log('Irina', pazargic('Irina'));
console.log('Antonel', pazargic('Antonel'));

function log(level, target, message) {
    console.log(`[${level}] [${target}] => ${message}`)
}

var infoConsoleLogger = _.partial(log, 'INFO', 'console');

infoConsoleLogger(pazargic('Irina'));

String.prototype.first = _.partial(String.prototype.substr, 0, _);

console.log("Antonel is the best".first(7));

String.prototype.asName = _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1');
console.log('Antonel: ' + 'Antonel Pazargic'.asName());


console.log(`
====================================================================
Functions composition
====================================================================`);
let str = `We can only see a shot distance
ahead but we can see plenty there
that needs to be done`;

let explode = (str) => str.split(/\s+/);

let count = (arr) => arr.length;

let countWords = _.compose(count, explode);

console.log('Words count', countWords(str));

let check = _.curry((len, size) => size >= len);

let check10 = check(10);

let checkText = _.compose(check10, count, explode);

console.log('check text', checkText(str));

console.log(`
====================================================================
Simple CommonJS module example
====================================================================`);
var math = require('./math').math;
console.log(`sum= ${math.sum(10, 20)}`);
console.log(`sub= ${math.sub(20, 10)}`);

console.log(`
====================================================================
Simple ECMAScript 6 module example.
Warn: This example doesn't work in the node js current version - 4.1.2
====================================================================`);
//import {divide, multiply} from "./ejs_math"
//console.log(`Divide 20 to 10 = ${divide(20, 10)}`);

console.log(`
====================================================================
Functional data types: functors
====================================================================`);
var Wrapper = function(val) {
    this.val = val;
};
console.log(`
====================================================================
Not supported yet in node js 4.2.1 Prototyping objects with closures
====================================================================`);
//Wrapper.prototype.map = (f) => f(this.val);

var wrap = (val) => new Wrapper(val);
Wrapper.prototype.map = function (f) {
    return wrap(f(this.val));
};

var msg = 'Hello Antonel Ernest Pazargic !';
let words = wrap(msg).map(_.words).val;
let wordsCount = wrap(msg).map(_.words).map(_.size).val;
console.log('words=', words);
console.log('wordsCount=', wordsCount);

console.log(`
====================================================================
Functional data types: monads
====================================================================`);
