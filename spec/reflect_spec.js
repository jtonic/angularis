/**
 * Created by jtonic on 24.10.2015.
 */

"use strict";

let _ = require('lodash');

/**
 * ECMAScript 6 Reflect API was not implemented yet in node, chrome, ff.
 * The equivalent examples will be done with the support in ECMA 5
 */
describe('reflect api - ECMAScript 5', function () {
    it('simple examples', function () {

        let s = Symbol();
        let obj = {age: 45, [s]: 'Symbol'}

        Object.defineProperty(obj, 'profession', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'developer'
        });

        for (let prop in obj) {
            console.log(`prop = ${prop}`);
        }

        _.forEach(Object.getOwnPropertyNames(obj), (propName) => { console.log(`own prop name: ${propName}`) });

        _.forEach(Object.getOwnPropertySymbols(obj), (propSymbol) => { console.log(`own prop symbols: ${propSymbol.toString()}`) });

        _.forEach(Object.keys(obj), (key) => { console.log(`key: ${key}`) });

    })
});