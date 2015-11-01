/**
 * Created by jtonic on 01.11.2015.
 */


describe('functions', function() {
    it('exceptions', function() {
        var add = function (a, b) {
            if(typeof a !== 'number' || typeof b !== 'number') {
                throw new TypeError('operands need to be numbers');
            }
            return a + b
        }

        expect(add(1, 2)).toBe(3);
        expect(add.bind(null, '1', '2')).toThrow();
        expect(add.bind(null, null, undefined)).toThrowError(TypeError);
    })

    it('Augmenting the builtin types', function() {
        Function.prototype.method = function(name, func) {
            if(!this.prototype[name]) {
                this.prototype[name] = func
                return this
            }
        }
        Number.method('integer', function () {
            return Math[this < 0 ? 'ceil' : 'floor'](this)
        })
        expect((-10 / 3).integer()).toBe(-3)
        expect((10 / 3).integer()).toBe(3)
    })
})