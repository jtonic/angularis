/**
 * Created by jtonic on 27.10.2015.
 */

"use strict";

describe('Collections', function () {
    it('Type arrays', function () {
        let buffer = new ArrayBuffer(80);
        const floatArray = new Float64Array(buffer);
        floatArray[4] = 11;

        expect(floatArray.length).toBe(10);
        expect(floatArray[4]).toBe(11);

        for (var it of floatArray) {
            console.log(`it = ${it}`);
        }
    });

    it('set', function () {
        let set = new Set('Hello!!!');
        expect(set.size).toBe(5);
        expect(set.has('!')).toBe(true);

        set.add(12);
        expect(set.size).toBe(6);
        expect(set.has(12)).toBe(true);


        set.clear();
        expect(set.size).toBe(0);

        const set1 = new Set([1, 2, 3, 4, 5, 6]);
        expect(set1.size).toBe(6);

        set1.forEach((k, v, s) => console.log(`set it = ${k}`));
    });
});