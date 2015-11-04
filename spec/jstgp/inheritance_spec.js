/**
 * Created by jtonic on 04.11.2015.
 */

"use strict";

describe('inheritance', function() {

    it('pseudoclassical', function() {
        let Mammal = function(name) {
            this.name = name
        }
        Mammal.prototype.get_name = function() {
            return this.name
        }
        Mammal.prototype.says = function() {
            return this.saying || ''
        }
        var dog = new Mammal('Milli')
        expect(dog.get_name()).toBe('Milli')
        expect(dog.says()).toBeFalsy()
        var Cat = function(name) {
            this.name = name
            this.saying = 'meow'
        }
        Cat.prototype = new Mammal()
        let cat = new Cat('Fluffy')
        expect(cat.get_name()).toBe('Fluffy')
        expect(cat.says()).toBeTruthy()
        expect(cat.says()).toBe('meow')

        Cat.prototype.get_name = function() {
            return `Cat says my name is ${this.name}!!!`
        }
        expect(cat.get_name()).toBe('Cat says my name is Fluffy!!!')
    })
})