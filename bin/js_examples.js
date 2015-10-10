/**
 * Created by jtonic on 10.10.2015.
 */

"use strict";

var _ = require('lodash');

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















