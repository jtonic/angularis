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

    it('iterators', function () {
        function Iterator1() {
            return {
                array: [1, 2, 3, 4, 5],
                nextIndex: 0,
                next: function() {
                    return this.nextIndex < this.array.length ?
                    {value: this.array[this.nextIndex++], done: false} : {done:true}
                }
            }
        }
        let it = new Iterator1()

        expect(it.next().value).toBe(1)
        expect(it.next().value).toBe(2)
        expect(it.next().value).toBe(3)
        expect(it.next().value).toBe(4)
        expect(it.next().value).toBe(5)
        const six = it.next();
        expect(six.value).toBe(undefined)
        expect(six.done).toBe(true)

        for(let val of [1, 2, 3, 4, 5]) {
            console.log(`it val = ${val}`);
            expect(val).toBeDefined()
        }
    });

    it('iterable', function () {
        let iterable = {
            array: [1, 2, 3, 4, 5],
            nextIndex: 0,
            [Symbol.iterator]: function() {
                return {
                    array: this.array,
                    nextIndex: this.nextIndex,
                    next: function() {
                        return this.nextIndex < this.array.length ?
                        {value: this.array[this.nextIndex++], done: false} : {done:true}
                    }
                }
            }
        }

        console.log(`typeof iterable: ${typeof iterable}`);

        for(let val of iterable) {
            console.log(`iterable val: ${val}`);
        }

        expect(iterable[Symbol.iterator]().next().value).toBe(1)

    });

    it('generators', function () {
        function* generator_function() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        }

        let generator = generator_function();
        let iterable = generator[Symbol.iterator]();

        expect(iterable.next().value).toBe(1)
        expect(iterable.next().value).toBe(2)
        expect(iterable.next().value).toBe(3)
        expect(iterable.next().value).toBe(4)
        expect(iterable.next().value).toBe(5)
        const six = iterable.next();
        expect(six.value).toBe(undefined)
        expect(six.done).toBe(true)

        generator = generator_function()
        // for of expression
        for(var val of generator) {
            console.log(`val = ${val}`)
            expect(val).toBeDefined()
        }

    });

    it('for of support of iterable', function () {
        let iterable = {
            [Symbol.iterator]() {
                let step = 0;
                let iterator = {
                    next() {
                        if (step <= 2) {
                            step++;
                        }
                        switch (step) {
                            case 1:
                                return { value: 'hello', done: false };
                            case 2:
                                return { value: 'world', done: false };
                            default:
                                return { value: undefined, done: true };
                        }
                    }
                };
                return iterator;
            }
        };

        for (let x of iterable) {
            console.log(x);
        }
    });
});