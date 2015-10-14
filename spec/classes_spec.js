/**
 * Created by jtonic on 14.10.2015.
 */
"use strict";

describe('classes', function () {

    it('simple definition', function () {
        class Student {
            constructor(name) {
                this.name = name;
            }
        }
        let antonel = new Student('Antonel');
        expect(antonel.name).toBe('Antonel');
    })

});