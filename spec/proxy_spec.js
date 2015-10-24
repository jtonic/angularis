/**
 * Created by jtonic on 24.10.2015.
 */

"use strict";

// Proxy is not yet implemented in nodejs 4.2.1
// the proxy examples are done in the FF console
describe('proxy', function () {
    xit('simple', function () {
        let target = {};
        let handler = {
            get(target, propKey, receiver) {
                console.log('get ' + propKey);
                return 123;
            }
        };
        let proxy = new Proxy(target, handler);
    });

});