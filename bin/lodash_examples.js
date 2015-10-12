/**
 * Created by jtonic on 11.10.2015.
 */

var _ = require('lodash');

var person1 = {
  firstName: "Antonel",
    lastName: "Pazargic"
};

var person2 = {
  firstName: "Irina",
    lastName: "Pazargic",
    age: 25
};

_.assign(person1, person2);

console.log('person1:', person1);

var intersection = _.intersection([1, 2], [2, 4, 1], [2, 10, 100, 1]);
console.log(`intersection = ${intersection}`);
