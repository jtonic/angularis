/**
 * Created by pazaran on 23/10/2015.
 */

"use strict";

describe('promises', function () {

    it('all', function () {
        let p1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('Reject 1!!!');
                reject('Error!!!');
            }, 1000)
        });

        let p2 = new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('Resolve 2!!!');
                resolve();
            }, 2000)
        });


       Promise.all([p1, p2]).then(function () {
           console.log('DONE!!!');
       }).catch(function(reason) {
           console.log(`ERROR: Failure reason: ${reason}`);
       })
    });

});
