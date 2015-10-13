/**
 * Created by pazaran on 12/10/2015.
 */

"use strict";

var _ = require('lodash');

describe("dodash", function () {
    it("_.intersection", function () {
        var intersection = _.intersection([1, 2], [2, 4, 1], [2, 10, 100, 1]);
        console.log(`intersection = ${intersection}`);
        expect(intersection).toEqual([1, 2]);
    })
});
