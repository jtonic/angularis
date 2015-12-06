/**
 * Created by jtonic on 06.12.2015.
 */
"use strict";

var Lazy = require('lazy.js');

describe('lazy things', function() {
   it('basic', function() {
       var uniqueRands = Lazy.generate(Math.random)
       .map(function(e) {return Math.floor(e * 1000) + 1;})
       .uniq()
       .take(300);

       uniqueRands.each(function(e) {console.log(e);})
   })
});