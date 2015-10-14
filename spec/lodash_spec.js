"use strict";

var _ = require('lodash');

describe("lodash", function () {
    it("_.intersection", function () {
        var intersection = _.intersection([1, 2], [2, 4, 1], [2, 10, 100, 1]);
        expect(intersection).toEqual([1, 2]);
    });

    it("_.assign", function () {
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
        expect(person1).toEqual(person2);

    })
});

