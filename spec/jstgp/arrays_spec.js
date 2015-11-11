/**
 * Created by pazaran on 11/11/2015.
 */

'use strict';

describe('Arrays', function () {
    it('general', function () {
        const arr1 = ['a', 'b', 'c'];
        const arr2 = ['x', 'y', 'z'];
        const result = arr1.concat(arr2, true);
        expect(result).toEqual(['a', 'b', 'c', 'x', 'y', 'z', true])

        arr1.push('d')
        expect(arr1.join('')).toBe('abcd')

        const d = arr1.pop();
        expect(d).toBe('d')
        expect(arr1).toEqual(['a', 'b', 'c'])

        expect(arr1.reverse()).toEqual(['c', 'b', 'a'])
        expect(arr1).toEqual(['c', 'b', 'a'])

        expect(arr1.slice(0, 1)).toEqual(['c'])

        expect(arr1.slice(2)).toEqual(['a'])

        const numbers = [5, 10, 2, 21, 34, 101]
        console.log(numbers.sort())

        expect(numbers.sort(function(a, b){return a - b})).toEqual([2, 5,  10, 21, 34,  101])


        const letters = ['a', 'b', 'c'];
        const removed = letters.splice(1, 1, 'a1', 'b1', 'b2')
        expect(removed).toEqual(['b'])
        expect(letters).toEqual(['a', 'a1', 'b1', 'b2', 'c'])

        const figures = [1, 2, 3, 4]
        const newSize = figures.unshift(-1, 0);
        expect(newSize).toBe(6)
        expect(figures).toEqual([-1, 0, 1, 2, 3, 4])
    })
})
